# Commit Message Instructions (semantic-release / Conventional Commits)

Generate a semantic-release compatible commit message.

Format: `<type>(<scope>): <subject>` — imperative, lowercase start, no trailing period, max 72 chars.

Types and release impact:
- `feat`: minor — new feature, page, section, component
- `fix`, `perf`, `revert`: patch — bug fix, performance, revert
- `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`: none

Scope: optional, singular, lowercase, no spaces (e.g. `blog`, `hero`, `content`, `layout`, `deps`, `nuxt`). Omit if repo-wide.

Breaking change → major: append `!` (`feat(api)!: ...`) and add footer `BREAKING CHANGE: <description>`.

Body: only if needed, explain what/why, wrap at 100 chars. Footer: `BREAKING CHANGE:` or `Closes #123`.

Rules:
- Exactly one type. Mixed changes: prefer highest impact (`feat` over `fix`).
- One logical change per commit.
- Never use past tense, vague subjects (`update stuff`, `fix bug`, `wip`), or trailing period.

Examples:
- `feat(blog): add pagination to blog index`
- `fix(hero): correct avatar image path on mobile`
- `feat(content)!: switch blog metadata to new schema`
- `chore(deps): update nuxt to 4.5.2`
