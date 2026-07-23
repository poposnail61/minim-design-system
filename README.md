# Minim Design System

React components and semantic tokens for the Minim Design System.

## Install

```sh
npm install @poposnail/minim-design-system
```

The package expects React to be installed in the consuming app.

## Usage

Import the style bundle once at the app root.

```tsx
import "@poposnail/minim-design-system/styles.css";
```

Use components from the package entry.

```tsx
import { Button, SelectField, Table, TableRow, HeaderCell, Cell } from "@poposnail/minim-design-system";

export function Example() {
  return (
    <>
      <Button label="Confirm" kind="primary" variant="solid" size="large" />

      <SelectField defaultValue="active" onValueChange={(value) => console.log(value)}>
        <option value="active">Active</option>
        <option value="paused">Paused</option>
      </SelectField>

      <Table>
        <TableRow variant="header">
          <HeaderCell label="Name" />
          <HeaderCell label="Status" />
        </TableRow>
        <TableRow>
          <Cell label="Minim" />
          <Cell label="Ready" />
        </TableRow>
      </Table>
    </>
  );
}
```

## Development

```sh
npm run dev
npm run build
npm run build:lib
npm run typecheck
```

- `npm run build` builds the documentation/demo site.
- `npm run build:lib` builds the React library into `dist-lib`.
- `npm run typecheck` validates the exported library surface.

## Implementation Rules

When implementing Figma screens with this package:

- Use existing components before creating new ones.
- Use semantic tokens only.
- Do not consume base tokens in component code.
- Read `guidelines/Guidelines.md` and `guidelines/ComponentMapping.md` before mapping Figma screens to React code.
