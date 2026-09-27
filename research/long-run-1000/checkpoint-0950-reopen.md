# 950 checkpoint reopen gate

Date: 2026-09-27 (Japan).

- 950 admissions stopped; the [checkpoint audit](checkpoint-0950.md) sampled 20 positions and recorded zero remaining major errors.
- Corpus at the gate: 950 entities, 706 sources, 1000 claims; `python scripts/validate_corpus.py` returned `PASS`.
- Audit report commit `5dd5c59056350a5abb136995d05e2cd1038c6a0c` is the identical local and public `main` HEAD. The worktree was clean when the gate was checked.
- Schema and theory were unchanged. No 951st entity was admitted before this check.

**Decision: `LONG_RUN_950_REOPEN_PASS`.** Source-backed admissions for positions 951–1000 may resume. The 1000-entity stop and final audit still apply.
