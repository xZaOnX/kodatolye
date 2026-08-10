# Intermediate challenge rollout pattern

All **25** curated exams now have Intermediate packs (2 functions + 1 full program each).

## Files

- TR source of truth: [`site/src/data/intermediateChallenges.ts`](../site/src/data/intermediateChallenges.ts)
- EN overlays: [`site/src/data/intermediateChallenges.en.ts`](../site/src/data/intermediateChallenges.en.ts)
- Types: `CodingChallenge`, `FullProgramChallenge`, `IntermediatePack` in [`site/src/types.ts`](../site/src/types.ts)
- Verified full-program fixtures helper: [`site/scripts/verify_intermediate.py`](../site/scripts/verify_intermediate.py)

Beginner data (`examPacks`, `functionDrills`, `exercises`) must not be rewritten.

## Pack shape (per exam)

Each `IntermediatePack` has:

1. **1–2 `functions`** — empty editor, `starterCode` = signature + `pass`, checked with Pyodide `assertCode` tests.
2. **1 `fullProgram`** — README-style brief, `inputFiles` on virtual FS, optional `stdin`, assert `expectedStdout` and/or `expectedFiles`.

Session order is always: all function challenges → full program.

## Difficulty rules

- No `{{blank}}` scaffolds.
- Fewer, collapsible hints.
- Include edge cases (blank lines, invalid input, out-of-bounds, ValueError).
- Same domain as the Beginner/Polito exam; fixtures may be **smaller custom maps/files** if the original I/O is huge — say so in `rubricNotes`.
- Spec must state exact stdout / filenames so the runner can compare.

## Adding / editing an exam

1. Read `exams/<id>/README.md` and the reference `.py` (if any).
2. Pick 1–2 core functions (parse, check, transform).
3. Write 5–7 assert tests including edges.
4. Build a full-program fixture (embed file contents in the pack).
5. Run a reference solution against the fixture; paste exact expected output (update `verify_intermediate.py` if useful).
6. Add TR pack entry + EN overlay keys (`functions[id]`, `fullProgram`).
7. Smoke-test in the Intermediate tab (load Pyodide, pass/fail paths).

## IDs

- Functions: `<examId>-int-fn-<name>`
- Full: `<examId>-int-full`

## Runner notes

- Function tests share one interpreter session after loading student code — avoid leaking mutable globals between tests when possible.
- Full programs get `sys.stdin` from `stdin` via StringIO; write `inputFiles` with `pyodide.FS.writeFile`.
- Output comparison trims trailing whitespace / normalizes `\r\n`.
