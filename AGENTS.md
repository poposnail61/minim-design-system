# Codex Working Rules

When implementing or modifying this design system, follow these rules without exception:

1. Always follow the Figma source of truth.
   - Inspect the relevant Figma component, variants, dimensions, fills, strokes, typography, spacing, radius, effects, shadows, blur, opacity, and state structure before changing code.
   - Do not implement from screenshots alone. Screenshots are only for visual verification.

2. Use semantic tokens in components.
   - Component code must use the design system semantic CSS variables, such as `--bg-*`, `--fg-*`, `--stroke-*`, `--spacing-*`, `--radius-*`, `--size-*`, and effect/shadow tokens.
   - Do not hardcode raw colors, spacing, radii, shadows, blur, opacity, or typography values in component implementations unless the value is already a defined token or a token is missing and must be added deliberately.

3. Preserve component composition from Figma.
   - If a Figma component is composed from internal parts, implement the same structural relationship in code.
   - Do not flatten composed controls into unrelated standalone buttons or elements.

4. Verify after implementation.
   - Run the production build.
   - Use the local app and screenshot inspection to compare the implemented component against Figma after actual Figma values have been applied.
