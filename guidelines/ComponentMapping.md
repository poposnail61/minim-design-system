# Figma to React Component Mapping

Use this file when implementing a Figma screen with the Minim Design System. Its purpose is to make AI agents choose the correct existing React component and semantic tokens instead of recreating UI from raw frames.

Code Connect is the preferred long-term mechanism for this mapping, but this repository can still use this document as the source map until Figma Code Connect access is available.

## Current Code Connect Status

Code Connect could not be queried from the current Figma account because Figma requires a Dev or Full seat on an Organization or Enterprise plan.

When that access is available, convert this mapping into `.figma.ts` templates instead of changing the component API.

## Matching Order

When reading a Figma screen:

1. Match by Figma component name.
2. Match by visible structure and component role.
3. Match by existing React props.
4. Match by semantic token usage.
5. Only then consider extending an existing component.

Do not create a new component just because the Figma layer is nested differently. First check whether the existing component already exposes the needed slot, prop, variant, or child composition.

## Component Map

| Figma component or layer name | React component | Source | Notes |
|---|---|---|---|
| `button` | `Button` | `src/components/Button.tsx` | Use for primary actions, pagination buttons, table action buttons, icon buttons when the button component can express the state. |
| `toggle-button` | `ToggleButton` | `src/components/ToggleButton.tsx` | Use for selected/unselected button controls. |
| `inline-button` | `InlineButton` | `src/components/InlineButton.tsx` | Use for text-like inline actions such as count selectors with a trailing chevron. |
| `action-chip` | `ActionChip` | `src/components/ActionChip.tsx` | Use for one-shot chip actions such as reset. |
| `toggle-chip` | `ToggleChip` | `src/components/ToggleChip.tsx` | Use for chip controls that toggle selection directly. |
| `filter-chip` | `FilterChip` | `src/components/FilterChip.tsx` | Use for dropdown filter triggers. Pair with `MenuPopover` / `MenuModal` when it opens a menu. |
| `input-chip` | `InputChip` | `src/components/InputChip.tsx` | Use for removable input/tag chips. |
| `badge` | `Badge` | `src/components/Badge.tsx` | Use for non-interactive status or category labels. |
| `input-field` | `InputField` | `src/components/Fields.tsx` | Use for normal text input. Do not include a title/label wrapper unless the Figma screen has one outside the field component. |
| `select-field` | `SelectField` | `src/components/Fields.tsx` | Use for select input. Use menu components for opened option surfaces. |
| `search-field` | `SearchField` | `src/components/Fields.tsx` | Use for search input. Prefix search icon is built in. |
| `textarea-field` | `TextareaField` | `src/components/Fields.tsx` | Do not add prefix icons. |
| `checkbox` | `Checkbox` | `src/components/SelectionControls.tsx` | Use Minim icon names for checked/mixed/outline states. |
| `radio` | `Radio` | `src/components/SelectionControls.tsx` | Use Minim radio icons. |
| `switch` | `Switch` | `src/components/SelectionControls.tsx` | Use for boolean on/off controls. |
| `segment-control` | `SegmentControl` | `src/components/SelectionControls.tsx` | Use for segmented selection. Do not recreate as independent buttons. |
| `tabs` | `Tabs` | `src/components/SelectionControls.tsx` | Use for tab navigation. Includes selected indicator and tablist bottom line. |
| `menu-modal` | `MenuModal` | `src/components/Menu.tsx` | Floating menu surface. No border; use menu shadow token. |
| `menu-popover` | `MenuPopover` | `src/components/Menu.tsx` | Use when a trigger opens a menu with `--spacing-200` offset. |
| `menu-item` | `MenuItem` | `src/components/Menu.tsx` | Standard menu row. |
| `toggle-menu-item` | `ToggleMenuItem` | `src/components/Menu.tsx` | Selected state uses check indicator; do not invent arbitrary suffixes. |
| `checkbox-menu-item` | `CheckboxMenuItem` | `src/components/Menu.tsx` | Distinct menu item with leading checkbox control. Do not model as a generic typed menu item. |
| `menu-divider` | `MenuDivider` | `src/components/Menu.tsx` | Use for dividers inside `MenuModal`. |
| `table` | `Table` | `src/components/Table.tsx` | Table is composed from `TableRow` and cell components. |
| `table-row` | `TableRow` | `src/components/Table.tsx` | Use `variant="header"` for header row, default for data rows. |
| `header-cell` | `HeaderCell` | `src/components/Table.tsx` | Header text cell. Header row bottom divider uses `--stroke-neutral`. |
| `checkbox-header-cell` | `CheckboxHeaderCell` | `src/components/Table.tsx` | Header checkbox cell. |
| `cell` | `Cell` | `src/components/Table.tsx` | Normal data cell. Can accept prefix/suffix, description, and critical kind. |
| `input-cell` / `Input-cell` | `InputCell` | `src/components/Table.tsx` | Editable/table text cell. Use for compact fixed-width table data fields. |
| `checkbox-cell` | `CheckboxCell` | `src/components/Table.tsx` | Data row checkbox cell. |
| `switch-cell` | `SwitchCell` | `src/components/Table.tsx` | Data row switch cell. |
| `button-cell` | `ButtonCell` | `src/components/Table.tsx` | Use for table actions. Compose existing `Button` children when actions differ by kind, e.g. neutral edit and critical delete. |
| `dialog` | `Dialog` | `src/components/Dialog.tsx` | Modal dialog surface with title, description, content, and footer actions. |
| `slot-icon-content` | `SlotIconContent` | `src/components/Content.tsx` | Icon slot content. |
| `slot-label-content` | `SlotLabelContent` | `src/components/Content.tsx` | Label and optional description content. |
| `image` | `ImageContent` | `src/components/Content.tsx` | Use for table thumbnails, avatars, and image slots when Figma uses the image content component. |
| `person-content` | `PersonContent` | `src/components/Content.tsx` | Person/avatar row content. |
| `multi-person-content` | `MultiPersonContent` | `src/components/Content.tsx` | Overlapping person group. |
| icon component names such as `chevron-down-outline`, `checkbox-mixed-solid` | `Icon` | `src/components/Icon.tsx` | Use the Minim Icon name directly. Do not use lucide icons or hand-drawn SVG for Minim components. |

## Token Map

Use semantic tokens from `src/styles/theme.css`.

| Figma token style | React/CSS token |
|---|---|
| `bg/layer` | `--bg-layer` |
| `bg/layer-base` | `--bg-layer-base` |
| `bg/field` | `--bg-field` |
| `bg/field-subtle` | `--bg-field-subtle` |
| `bg/neutral` | `--bg-neutral` |
| `bg/neutral-subtle` | `--bg-neutral-subtle` |
| `bg/neutral-solid` | `--bg-neutral-solid` |
| `bg/primary-solid` | `--bg-primary-solid` |
| `bg/secondary-solid` | `--bg-secondary-solid` |
| `bg/critical-solid` | `--bg-critical-solid` |
| `fg/neutral` | `--fg-neutral` |
| `fg/muted` | `--fg-muted` |
| `fg/on-surface` | `--fg-on-surface` |
| `fg/primary` | `--fg-primary` |
| `fg/critical` | `--fg-critical` |
| `fg/disabled` | `--fg-disabled` |
| `stroke/neutral` | `--stroke-neutral` |
| `stroke/neutral-subtle` | `--stroke-neutral-subtle` |
| `stroke/primary` | `--stroke-primary` |
| `stroke/critical` | `--stroke-critical` |
| `spacing/0` | `--spacing-0` |
| `spacing/50` | `--spacing-50` |
| `spacing/100` | `--spacing-100` |
| `spacing/150` | `--spacing-150` |
| `spacing/200` | `--spacing-200` |
| `spacing/300` | `--spacing-300` |
| `spacing/500` | `--spacing-500` |
| `radius/medium` | `--radius-medium` |
| `radius/large` | `--radius-large` |
| `radius/xlarge` | `--radius-xlarge` |
| `radius/full/h36` | `--radius-full-h36` |
| `radius/full/h44` | `--radius-full-h44` |
| `size/h20` | `--size-h20` |
| `size/h32` | `--size-h32` |
| `size/h36` | `--size-h36` |
| `size/h44` | `--size-h44` |

Do not consume base tokens such as `--gray-*`, `--blue-*`, `--green-*`, `--red-*`, or `--alpha-*` in component code.

## Figma Screen Implementation Rules

When implementing a full Figma screen:

1. Identify each visible Figma instance.
2. Replace it with the mapped React component.
3. Preserve composition: menu triggers use menu components, tables use table cells, chips use chip components.
4. Pass variant props instead of adding custom CSS when the component already supports that variant.
5. Use semantic size tokens for fixed widths introduced by a real Figma case.
6. Add documentation tokens when a component behavior changes.
7. Do not use raw Figma-generated JSX as production code.

## Table Case Notes

The YesTravel table case maps to existing table components:

- Overall table: `Table`
- Header row: `TableRow variant="header"`
- Data row: `TableRow`
- Checkbox column: `CheckboxHeaderCell` / `CheckboxCell`
- Item thumbnail and label: `Cell` with `prefix={<ImageContent size="h32" />}`
- Fixed compact text columns: `InputCell`
- Row actions: `ButtonCell` with child `Button` components

Divider behavior:

- Header bottom line: `--stroke-neutral`
- Data row bottom line: `--stroke-neutral-subtle`
- No vertical dividers

## Code Connect Upgrade Plan

When Figma Code Connect access is available:

1. Add `@figma/code-connect` to dev dependencies.
2. Add `figma.config.json` with include paths for `.figma.ts` files.
3. Add one `.figma.ts` template per published Figma component.
4. Keep templates next to component source files or in a dedicated `code-connect/` folder.
5. Map Figma properties only to props that exist in the React component interface.
6. Use this document as the canonical source for component names and token expectations.
