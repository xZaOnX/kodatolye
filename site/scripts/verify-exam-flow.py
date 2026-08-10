from playwright.sync_api import sync_playwright
import re

failures = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1100, "height": 900})
    page.goto("http://127.0.0.1:5173/", wait_until="networkidle")

    assert page.get_by_role("heading", name="KodAtölye").is_visible()
    page.get_by_role("button", name=re.compile("Sınava çalış")).click()
    page.wait_for_selector(".exam-pick-card")
    n = page.locator(".exam-pick-card").count()
    if n != 25:
        failures.append(f"expected 25 exams, got {n}")

    # Armstrong flow
    page.locator(".exam-pick-card", has_text="Armstrong").first.click()
    page.wait_for_selector(".brief-box")
    if not page.get_by_text("Ne yapman gerekiyor?").is_visible():
        failures.append("brief missing")
    page.get_by_role("button", name="Sorulara başla").click()
    page.wait_for_selector(".quiz-card")
    if not page.get_by_text("Çoktan seçmeli").is_visible():
        failures.append("expected MCQ first")

    # answer first MCQ correctly (Evet is option B index 1 for armstrong)
    page.locator(".quiz-option").nth(1).click()
    page.get_by_role("button", name="Kontrol et").click()
    if not page.locator(".feedback-ok").is_visible():
        failures.append("MCQ correct failed")
    page.get_by_role("button", name=re.compile("Sonraki")).click()

    # second MCQ - pick correct (index 1)
    page.wait_for_selector(".quiz-card")
    page.locator(".quiz-option").nth(1).click()
    page.get_by_role("button", name="Kontrol et").click()
    page.get_by_role("button", name=re.compile("Sonraki")).click()

    # now blank
    page.wait_for_selector("input.blank")
    if not page.get_by_text("Boşluk doldur").is_visible():
        failures.append("expected blank after MCQs")

    # basics still works
    page.goto("http://127.0.0.1:5173/", wait_until="networkidle")
    page.get_by_role("button", name=re.compile("Sıfırdan Python")).click()
    if not page.get_by_text("Anladım, sorulara geç").is_visible():
        failures.append("basics broken")

    browser.close()

if failures:
    print("FAILURES:\n" + "\n".join(failures))
    raise SystemExit(1)
print("FLOW OK: picker → brief → MCQ → blank; basics OK")
