# Minim Design System AI Guidelines

This document is the working contract for AI agents and contributors modifying the Minim Design System. Read it before changing components, tokens, pages, examples, or documentation.

## Core Rules

1. Do not create new components when an existing component can be used.
2. Reuse existing components, props, variants, tokens, and composition patterns first.
3. Do not use base tokens in component code.
4. Use semantic tokens only.
5. Do not hardcode visual values unless the value is already exposed as a semantic token and the implementation has no tokenized alternative.
6. Follow Figma as the source of truth for component structure, spacing, radius, stroke, shadow, icon, typography, and state behavior.
7. Do not implement from screenshots alone. Screenshots are for verification after actual Figma values have been checked.

## Source Priority

When changing the system, use this priority order:

1. Existing component implementation in `src/components/`
2. Existing semantic tokens in `src/styles/theme.css`
3. Existing documentation pages and playground patterns in `src/app/App.tsx`
4. Figma component values and structure
5. A new token or new component only after confirming the existing system cannot express the design

If these sources conflict, stop and identify the conflict instead of guessing.

## Component Reuse Policy

Minim is a composed component system. New UI should be assembled from existing primitives and documented components.

Use existing components for:

- Buttons: `Button`, `ToggleButton`, `InlineButton`
- Chips: `ActionChip`, `ToggleChip`, `FilterChip`, `InputChip`
- Fields: `InputField`, `SelectField`, `SearchField`, `TextareaField`
- Selection: `Checkbox`, `Radio`, `Switch`, `SegmentControl`, `Tabs`
- Menu: `MenuModal`, `MenuPopover`, `MenuItem`, `ToggleMenuItem`, `CheckboxMenuItem`, `MenuDivider`
- Table: `Table`, `TableRow`, `HeaderCell`, `CheckboxHeaderCell`, `Cell`, `ButtonCell`, `InputCell`, `CheckboxCell`, `SwitchCell`
- Status/content: `Badge`, `Dialog`, `SlotIconContent`, `SlotLabelContent`, `ImageContent`, `PersonContent`, `MultiPersonContent`
- Icons: `Icon` from Minim Icon names

Do not duplicate these with local ad hoc markup. For example:

- Do not build a chip-like selector with a raw `<button>` if `FilterChip` or `ToggleChip` fits.
- Do not build a dropdown menu with arbitrary divs if `MenuPopover`, `MenuModal`, and menu item components fit.
- Do not draw checkbox, radio, mixed, or check icons manually; use the existing icon component and Minim icon names.
- Do not create a one-off table cell if a table cell component already exists.

## Component Creation Gate

Creating a new component is prohibited by default.

Create a new component only when all are true:

1. No existing component can represent the required behavior or visual structure.
2. Figma has a distinct component or variant that maps to it.
3. The required semantics cannot be expressed through existing props.
4. The new component uses semantic tokens only.
5. The new component is documented with `Playground`, `Props`, and `Tokens`.

If any condition is not met, extend or compose existing components instead.

## Token Policy

Use semantic tokens as the only styling contract in component code.

Allowed token families:

- Foreground: `--fg-*`
- Background: `--bg-*`
- Stroke: `--stroke-*`
- Spacing: `--spacing-*`
- Radius: `--radius-*`
- Size: `--size-*`
- Effects: `--effect-*`
- Typography classes: `ts-*`

Disallowed in component implementations:

- Base color tokens such as `--gray-*`, `--blue-*`, `--green-*`, `--red-*`, `--alpha-*`
- Raw hex, rgb, hsl, oklch, or named colors
- Raw pixel values for component spacing, radius, size, stroke, or icon size when a semantic token exists
- Untokenized shadows, blur, opacity, or animation values

Base tokens may exist in `theme.css` as foundations, but component code should consume the semantic layer. For example:

```tsx
// Good
className="bg-[var(--bg-field)] text-[var(--fg-neutral)] border-[var(--stroke-neutral)]"

// Bad
className="bg-[var(--gray-0)] text-[var(--gray-900)] border-[#e4e4e7]"
```

If a needed semantic token is missing, add or request the semantic token deliberately. Do not bypass the system with a base token.

## Figma Matching Policy

Before modifying a component, check the relevant Figma component values:

- Component name and variant names
- Auto-layout direction and composition
- Height, width, min-width, fixed/hug/fill behavior
- Padding, gap, and internal text inset
- Radius and shape variants
- Fill, stroke, opacity, blur, shadow, and effects
- Icon names, icon size, icon position, and selected/disabled icon changes
- State structure: enabled, hover, pressed, focused, selected, mixed, error, disabled, readonly

Do not infer values because another component looks similar. Similar components can still have different tokens or structure.

## Composition Rules

Preserve Figma composition in code:

- If Figma separates components, keep them separate in code.
- If a component opens a menu, use the existing menu components and `--spacing-200` offset where that behavior is defined.
- If a component is made from other components, compose those components instead of rebuilding their internals.
- If a state is represented by an icon in Figma, use the matching Minim icon.
- If a visual slot is absent in Figma, do not invent one.

Examples:

- `CheckboxMenuItem` is not a generic `MenuItem` with a type prop; it is a distinct component using a leading checkbox control.
- `ToggleMenuItem` does not get an arbitrary suffix if Figma does not define one.
- `SelectField` opens a `MenuModal`/menu pattern; its menu should not be visually unrelated to the menu component.
- `Tabs` has both a selected indicator and a tablist bottom line.

## Documentation Page Rules

Every component documentation page should use the same structure:

1. `Playground`
2. `Props`
3. `Tokens`

The playground should show one component at a time. Do not place alternative components, component matrices, or broad state galleries inside `Playground`.

Playground controls should be built from existing Minim components:

- Use `SegmentControl` for playground background selection.
- Use `FilterChip` plus menu components for option selection.
- Use `Switch` for boolean controls.
- Use meaningful icons only when the component prop requires an icon.
- Default playground examples should not include decorative or meaningless icons.

## Verification Checklist

Before finishing a change:

1. Confirm no new component was created unnecessarily.
2. Confirm component code uses semantic tokens, not base tokens.
3. Confirm the component still matches Figma structure and variant behavior.
4. Confirm documentation page sections are `Playground`, `Props`, `Tokens`.
5. Confirm `Props` and `Tokens` tables include any new or changed behavior.
6. Run `npm run build`.
7. Check the local app visually when the change affects UI.
8. If Figma cannot be accessed or does not expose the target node, state that clearly and avoid claiming exact Figma verification.

## References Used For This Guideline

This guideline follows common design system documentation patterns:

- Atlassian Design System treats design tokens as the single source of truth for design decisions: https://atlassian.design/foundations/tokens/
- U.S. Web Design System separates components, patterns, utilities, and design tokens in documentation: https://designsystem.digital.gov/design-tokens/
- Material Design documents design tokens as a foundation for component implementation: https://m3.material.io/foundations/design-tokens/overview
