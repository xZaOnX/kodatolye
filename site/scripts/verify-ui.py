from playwright.sync_api import sync_playwright
import json
import re
from pathlib import Path

exercises = json.loads(
    Path("/Users/ozanoneyman/development/uTK sınav/site/scripts/exercises.json").read_text()
)

by_exam = {}
for e in exercises:
    by_exam.setdefault(e["examId"], e)

failures = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1100, "height": 900})
    page.goto("http://127.0.0.1:5173/", wait_until="networkidle")

    assert page.get_by_role("heading", name="KodAtölye").is_visible()
    page.get_by_role("button", name=re.compile("Boşluk doldur")).click()
    page.wait_for_selector(".exam-group")
    groups = page.locator(".exam-group").count()
    if groups != 25:
        failures.append(f"expected 25 exam groups, got {groups}")

    for exam_id, ex in by_exam.items():
        page.goto("http://127.0.0.1:5173/", wait_until="networkidle")
        page.get_by_role("button", name=re.compile("Boşluk doldur")).click()
        page.wait_for_selector(".exam-group")
        btn = page.locator(".exam-item", has_text=ex["title"]).first
        btn.click()
        page.wait_for_selector(".code-block")

        blanks = page.locator("input.blank")
        n = blanks.count()
        if n != len(ex["blanks"]):
            failures.append(f"{ex['id']}: blank count {n} != {len(ex['blanks'])}")
            continue

        for i in range(n):
            blanks.nth(i).fill("WRONG")
        page.get_by_role("button", name="Kontrol et").click()
        if not page.locator(".feedback-wrong").is_visible():
            failures.append(f"{ex['id']}: expected wrong feedback")

        for i, b in enumerate(ex["blanks"]):
            blanks.nth(i).fill(b["answer"])
        page.get_by_role("button", name="Kontrol et").click()
        if not page.locator(".feedback-ok").is_visible():
            failures.append(f"{ex['id']}: expected ok feedback")

    page.goto("http://127.0.0.1:5173/", wait_until="networkidle")
    page.get_by_role("button", name=re.compile("Sıfırdan Python")).click()
    if not page.get_by_text("Anladım, sorulara geç").is_visible():
        failures.append("Sıfırdan Python path broken")

    browser.close()

if failures:
    print("FAILURES:")
    print("\n".join(failures))
    raise SystemExit(1)

print(f"UI OK: {len(by_exam)} exams spot-checked, home paths OK")
