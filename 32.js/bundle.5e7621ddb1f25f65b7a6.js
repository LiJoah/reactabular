webpackJsonp([32],{1527:function(e,n,a){var t=a(1),r=a(14),o=a(15).PageRenderer;o.__esModule&&(o=o.default);var s=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(1560)}},componentWillMount:function(){},render:function(){return t.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,e.exports=s},1560:function(e,n){e.exports="8.12.0 / 2017-10-05\n==================\n\n  * Chore - Support React 16. #324\n\n8.9.0 / 2017-04-03\n==================\n\n  * Refactor - Use **prop-types** package over React `propTypes` to fix the package for React 15.5. #297\n\n8.8.0 / 2017-04-03\n==================\n\n## reactabular-table\n\n  * Refactor - Refactor `mergePropPair` logic. Now Babel should generate easier code.\n\n8.7.2 / 2017-04-03\n==================\n\n## reactabular-table\n\n  * Bug fix - If there are no transforms, skip processing them entirely.\n\n8.7.1 / 2017-03-16\n==================\n\n## reactabular-dnd\n\n  * Bug fix - Don't create a new component type on render to avoid issues with controlled components. #287\n\n8.7.0 / 2017-02-02\n==================\n\n## reactabular-virtualized\n\n  * Feature - Pick up `props.style.maxHeight` at `Virtualized.Body` if it's set. #277\n\n8.6.0 / 2017-01-16\n==================\n\n## reactabular-dnd\n\n  * Bug fix - Bump lodash peer dependency to v4 minimum. This was expected already, but the version was wrong.\n\n## reactabular-resizable\n\n  * Bug fix - Bump lodash peer dependency to v4 minimum. This was expected already, but the version was wrong.\n\n## reactabular-sticky\n\n  * Bug fix - Bump lodash peer dependency to v4 minimum. This was expected already, but the version was wrong.\n\n## reactabular-table\n\n  * Bug fix - Bump lodash peer dependency to v4 minimum. This was expected already, but the version was wrong.\n\n## reactabular-virtualized\n\n  * Bug fix - Bump lodash peer dependency to v4 minimum. This was expected already, but the version was wrong.\n\n8.5.1 / 2017-01-12\n==================\n\n## reactabular-virtualized\n\n  * Bug fix - Calculate rows when height changes. #270\n\n8.5.0 / 2016-12-20\n==================\n\n## reactabular-table\n\n  * Feature - Drop `deep-diff` dependency. Now it checks through lodash instead. Simpler this way.\n  * Bug fix - Allow `rowKey` to be zero. #262\n\n8.4.2 / 2016-12-15\n==================\n\n## reactabular-table\n\n  * Bug fix - Fix false negative for `rowKey` check. Now objects with getters should work as expected. #261\n\n8.4.0 / 2016-12-01\n==================\n\n## reactabular-easy\n\n  * Feature - Expose `onDragColumnStart` and `onDragColumnEnd` at `easy.bindColumns`.\n\n## reactabular-resizable\n\n  * Feature - Expose `resizable.column` `onDragStart` and `onDragEnd`. These work the same way as `onDrag` except at the beginning and the end of the process.\n\n## reactabular-column-extensions\n\n  * Feature - Expose `onDragColumnStart` and `onDragColumnEnd` at `resizableHeader`.\n\n8.3.2 / 2016-12-01\n==================\n\n## reactabular-easy\n\n  * Bug fix - Swap resizableHeader and sorting formatter application order to match the original.\n\n8.3.1 / 2016-11-30\n==================\n\n## reactabular-resizable\n\n  * Bug fix - Make sure `helper` doesn't crash if `props` are missing from a column.\n\n8.3.0 / 2016-11-30\n==================\n\n## reactabular-resizable\n\n  * Feature - Pass `index` to `helper` `getId`. The enhanced signature is `getId(column, index)`.\n  * Bug fix - Make sure `helper` merges class names correctly if there are multiple.\n\n8.2.1 / 2016-11-30\n==================\n\n## reactabular-column-extensions\n\n  * Bug fix - Drop `reactabular` peer dependency as that's not needed anymore.\n\n8.2.0 / 2016-11-29\n==================\n\n## reactabular-sticky\n\n  * Feature - Allow `Sticky.Header` `overflow` to be overridden through `style`.\n\n8.1.0 / 2016-11-27\n==================\n\n## reactabular-sticky\n\n  * Feature - Allow `Sticky.Body` `overflow` to be overridden through `style`. #246\n\n8.0.0 / 2016-11-27\n==================\n\nThis is a major release with plenty of improvements, but also some breakage so go through the following changes carefully. The biggest changes have to do with the column definition (`formatters [<fn>]` over `format: <fn>`, no support for nested columns out of the box), resolving (composes better), and `reactabular-easy` partitioning (better API for the future).\n\n## Reorganization\n\n`reactabular` wrapper package has been dropped. As a result no standalone builds are available anymore. This has to do with the fact that the project has been split up into smaller parts that maintaining one didn't make any sense.\n\nThis means that in order to use the basic table without any bells and whistles you will have to `import * as Table from 'reactabular-table';` over `import { Table } from 'reactabular';`\n\nThe following packages have been moved to standalone projects:\n\n  * `reactabular-search` is [searchtabular](https://github.com/reactabular/searchtabular) now.\n  * `reactabular-tree` is [treetabular](https://github.com/reactabular/treetabular) now.\n  * `reactabular-resolve` is [table-resolver](https://github.com/reactabular/table-resolver) now.\n  * `reactabular-highlight` has been integrated to `searchtabular`. You get `search.highlighter`, `search.highlightCell`, and `search.highlightValue` now.\n  * `reactabular-search-columns` has been integrated to `searchtabular`. You can access it through `search.Columns`.\n  * `reactabular-search-field` has been integrated to `searchtabular`. You can access it through `search.Field`.\n  * `reactabular-sort` is [sortabular](https://github.com/reactabular/sortabular) now.\n  * `reactabular-select` was integrated into [selectabular](https://github.com/reactabular/selectabular). You can access it through `import { byArrowKeys } from 'selectabular';`.\n  * `react-edit` is functionally the same as before except it is in a repository of its own. This makes it possible to keep its versioning out of sync with the rest as it moves slower.\n  * `reactabular-visibility-toggles` has been pushed to [react-visibility-toggles](https://github.com/reactabular/react-visibility-toggles) with several improvements and full test coverage.\n\n`reactabular-utils` doesn't exist anymore as the functionality has been split up into `reactabular-table` and `table-resolver`.\n\n## No More Nested Support Out of the Box\n\nReactabular doesn't support nested column definitions out of the box anymore. Earlier they did, but the logic didn't. To fix this, the related resolving pass was moved outside of the core. Even though it's more code, now all the logic (search/sorting/...) works with nested definitions and you have control over naming and the conventions you prefer.\n\n  * Breaking - `resizableColumn` isn't included in the core distribution anymore. You should use `reactabular-resizable` instead.\n  * Breaking - Official support for lodash 3 has been dropped.\n\n## reactabular-dnd\n\n  * Feature - Expose `dnd.draggableRow`. This allows you to use row dragging with virtualization. Example: `body.row = dnd.draggableRow(Virtualized.BodyRow)`.\n  * Feature - `dnd.draggableRow` hooks into row level (`onRow({ rowId })`) props `onCanMove({ rowId })`, `onMoveStart({ rowId })`, `onMove({ sourceRowId, targetRowId })`, and `onMoveEnd({ rowId })` instead of just `onMove`.\n  * Feature - Fail fas if `moveLabels` is missing data.\n  * Feature - Expose `move` core algorithm. This can be useful standalone.\n\n## reactabular-easy\n\n  * Feature - Support row dragging. This has been exposed through `onMoveRow({ sourceRowId, targetRowId })`. You are expected to call an algorithm that actually moves the row there. `reactabular-dnd` implements these. Note that this works only while there is no sorting or search query in place!\n  * Bug fix - Inject `className` per row only if it has been defined at `onRow`.\n  * Bug fix - If a column has width set, set `maxWidth` to it as well. #238\n  * Breaking - The API has been partitioned so that the column definition related functionality is bound separately. This makes it possible to implement nested column functionality on top of it. Consider the example below and see the README for more:\n\n```javascript\n...\n\nrender() {\n  ...\n\n  const newColumns = easy.bindColumns({\n    toggleChildrenProps: { className: 'toggle-children' },\n    sortingColumns,\n    rows,\n    idField,\n    parentField,\n    props: this.props,\n\n    // Handlers\n    onMoveColumns: this.onMoveColumns,\n    onSort: this.onSort,\n    onDragColumn: this.onDragColumn,\n    onToggleShowingChildren: this.onToggleShowingChildren\n  })(columns);\n\n  ...\n}\n\n...\n```\n\n## reactabular-table\n\n  * Feature - Pass whole column through header/body for extra parameters.\n  * Feature - Support `onRow` at `Table.Header`.\n  * Feature - Allow `Table.Header` to accept `headerRows` (an array of column definitions) to override default columns. See below.\n  * Feature - Move `utils.resolveRowKey`, `utils.evaluateFormatters`, `utils.evaluateTransforms`, `utils.mergeProps`, `utils.columnsAreEqual` to `reactabular-table`.\n  * Bug fix - Skip functions at `BodyRow` `shouldComponentUpdate`.\n  * Breaking - Generalize `format: <fn>` as `formatters: [<fn>]`. The formatters are applied recursively from left to right: `[f1, f2, f3] => f1(f2(f3(value, extra)))`. This allows composition.\n  * Breaking - Extract nested column logic. Now you will have to resolve nested columns before passing them to the table. The advantage of doing this is that now all logic (search/sorting/etc.) works with nested tables. Basic idea:\n\n```javascript\nimport { resolve } from 'reactabular';\n// or\n// import * as resolve from 'table-resolver';\n\n...\n\nconst NestedColumnsTable = () => {\n  const resolvedColumns = resolve.columnChildren({ columns });\n  const resolvedRows = resolve.resolve({\n    columns: resolvedColumns,\n    method: resolve.nested\n  })(rows);\n\n  return (\n    <Table.Provider columns={resolvedColumns}>\n      <Table.Header\n        headerRows={resolve.headerRows({ columns })}\n      />\n\n      <Table.Body\n        rows={resolvedRows}\n        rowKey=\"id\"\n      />\n    </Table.Provider>\n  );\n};\n\n...\n```\n\n## reactabular-resizable\n\n  * Feature - Allow `minWidth` to be set per `column` explicitly.\n  * Breaking - Push performance optimized resizing to a function. As a result `reactabular-resizable` exposes `column` and `helper` functions now. `column` is the same as before. `helper` implements optional performance optimizations. See the README for usage instructions.\n\n## reactabular-virtualized\n\n  * Bug fix - Improve horizontal scrolling performance when used with reactabular-sticky. If it detects Y didn't change while scrolling, it skips rendering now.\n  * Bug fix - Skip functions at `BodyRow` `shouldComponentUpdate`.\n  * Breaking - Speed up vertical scrolling by implementing `shouldComponentUpdate` for rows. Now it detects whether or not a row has been measured and also does check based on column and row changes like default SCU at reactabular-table.\n\n## reactabular-column-extensions\n\n  * New package to wrap common configuration.\n\n7.0.0 / 2016-11-03\n==================\n\n## reactabular-dnd\n\n  * Breaking - Rework `moveRows` interface. Instead of `moveRows(rows, { sourceRowId, targetRowId }) => rows` it's `moveRows({ rows, sourceRowId, targetRowId }) => rows` now.\n\n## reactabular-easy\n\n  * Bug fix - Pass `parentField` to `tree.filter`. Now toggling should work.\n  * Breaking - Push `onMoveColumns` behavior out of table core. Now it doesn't maintain table state at all. As a result you need to implement `onMoveColumns` handler like this to make column moving work:\n\n```javascript\nonMoveColumns({ columns, source, target }) {\n  this.setState({ columns });\n}\n```\n\n## reactabular-select\n\n  * Breaking - Push logic to [selectabular](https://www.npmjs.com/package/selectabular). See the selection demo (features -> selecting rows) for the new, more powerful API.\n\n## reactabular-tree\n\n  * Bug fix - Allow `tree.toggleChildren` to work without column `props` defined.\n  * Feature - Add `tree.getImmediateChildren`.\n  * Feature - Add `tree.moveRows`.\n  * Breaking - Refactor `tree.filter` as `({ fieldName, parentField = 'parent' }) => (rows) => filteredRows`.\n\n## reactabular-utils\n\n  * Bug fix - If `rowKey` value is zero, `resolveRowKey` should return `0-row`.\n  * Feature - Allow `colSpan` and `rowSpan` to be overridden at `resolveHeaderRows`.\n\n6.1.2 / 2016-10-31\n==================\n\n## reactabular-easy\n\n  * Bug fix - Fix `onRow` behavior (match interface with `reactabular-table`). #229\n\n6.1.1 / 2016-10-27\n==================\n\n## reactabular-search\n\n  * Bug fix - Return `false` if `property` is not defined. #228\n\n## reactabular-tree\n\n  * Bug fix - Allow `tree.filter` `parent` to be zero.\n\n6.1.0 / 2016-10-25\n==================\n\n## reactabular-easy\n\n  * Bug fix - Make sure `idField` `prop` works correctly. `tree.sort` needed to receive `idField` for the logic to work.\n\n## reactabular-tree\n\n  * Feature - Allow `idField` to be passed to `tree.sort`.\n\n6.0.3 / 2016-10-19\n==================\n\n## reactabular-easy\n\n  * Bug fix - Bump peer version ranges to avoid npm warnings.\n\n## reactabular-tree\n\n  * Bug fix - Bump peer version ranges to avoid npm warnings.\n\n## reactabular-virtualized\n\n  * Bug fix - Bump peer version ranges to avoid npm warnings.\n\n6.0.2 / 2016-10-19\n==================\n\n## reactabular-easy\n\n  * Feature - Add an example showing how to access `scrollTo`.\n\n6.0.0 / 2016-10-14\n==================\n\n## reactabular-easy\n\n  * Breaking - Expose `idField` and `parentField` `props` for customizing tree field types. Earlier `rowKey` handled `idField` but now it has been separated for clarity.\n  * Breaking - Drop `styles` prop. Use `props` instead.\n\n## reactabular-search\n\n  * Breaking - `search.multipleColumns` and `search.singleColumn` now accept a `castingStrategy` parameter to define how to cast properties when searching. By default, everything by arrays is cast to a string.\n  * Feature - `search.matches` now traverses arrays and returns results in the same shape.\n\n## reactabular-search-columns\n\n  * Bug fix - Make toggling behavior rely on `property` over `id`. Now the behavior is more consistent with filtered sets. #216\n  * Bug fix - If `column.property` is not set, generate key based on column index instead.\n\n## reactabular-resizable\n\n  * Breaking - Drop `styles` prop. Use `props` instead.\n\n## reactabular-sort\n\n  * Breaking - Drop `styles` prop. Use `props` instead.\n\n## reactabular-table\n\n  * Feature - Allow table body and body row `shouldComponentUpdate` to be overridden.\n\n## reactabular-tree\n\n  * Breaking - Merge `tree.flatten` with `tree.unpack`. The new signature for `tree.unpack` is `tree.unpack = ({ parentField = 'parent', parent, idField = 'id'}) => (rows) => <unpackedRows>`.\n  * Breaking - Rework API so that all functions except `tree.toggleChildren` work in curry format (`(...) => (rows) => <new rows>`). This way the API is consistent and easy to extend.\n  * Breaking - Expose `childrenField` for `tree.pack` and `tree.unpack`. It defaults to `children`.\n  * Breaking - Make `tree.pack` to work in a recursive manner (packs children within children).\n  * Breaking - Make `tree.search` match against children as well. If children as matched, it will return parents as well.\n  * Feature - Add `tree.getChildren` utilities for getting node children.\n\n## reactabular-virtualized\n\n  * Feature - Add `scrollTo(index)` method to `Virtualized.Body` `ref`.\n\n5.3.0 / 2016-10-05\n==================\n\n## reactabular-easy\n\n  * Feature - Expose `props` prop for customizing `props` of the component. This will replace `styles` eventually.\n\n## reactabular-resizable\n\n  * Feature - Expose `props` prop for customizing `props` of the component. This will replace `styles` eventually.\n\n## reactabular-sort\n\n  * Feature - Expose `props` prop for customizing `sort.header` `props` of the component. This will replace `styles` eventually.\n\n5.2.1 / 2016-09-30\n==================\n\n## reactabular-tree\n\n  * Bug fix - If `className` is not provided to `tree.toggleChildren`, do not render `undefined` as a class. Also dropped extra `console.log`.\n\n5.2.0 / 2016-09-30\n==================\n\n## reactabular-tree\n\n  * Bug fix - Calculate `tree.getParents` correctly for root level nodes without parents. Previously that gave false positives.\n  * Feature - Annotate `tree.toggleChildren` with `has-children` and `has-parent` classes. Easier to style this way.\n\n5.1.0 / 2016-09-29\n==================\n\n## reactabular-tree\n\n  * Feature - Add `tree.flatten` to allow transforming a nested tree structure into a flat structure used by the algorithms.\n\n5.0.2 / 2016-09-28\n==================\n\n## reactabular-virtualized\n\n  * Bug fix - Skip `setState` on `componentWillReceiveProps` if no rows were calculated. #209\n\n5.0.1 / 2016-09-28\n==================\n\n## reactabular-easy\n\n  * Bug fix - If there are no draggable headers, do *not* inject `dnd.Header`. This means you don't need to set up React DnD if you aren't using drag and drop functionality. #209\n\n5.0.0 / 2016-09-28\n==================\n\n## reactabular-easy\n\n  * Breaking - Push children toggle behavior to `onToggleShowingChildren` prop. See the readme for a sample implementation. This makes the implementation more flexible. You can trigger `reactabular-tree` `collapseAll` and `expandAll` over `showingChildren` for instance.\n\n4.3.0 / 2016-09-27\n==================\n\n## reactabular-tree\n\n  * Feature - Let `toggleChildren` toggle when cell is clicked. If you want the old behavior, override `onClick` through `props`.\n  * Feature - Add `collapseAll` and `expandAll` helpers.\n\n4.2.0 / 2016-09-23\n==================\n\n## reactabular-easy\n\n  * Feature - Accept `toggleChildrenProps` for customization.\n\n## reactabular-tree\n\n  * Feature - Allow `toggleChildren` to accept `props` for customization.\n\n4.1.0 / 2016-09-20\n==================\n\n## react-edit\n\n  * Feature - Pass `extraParameters` to `edit` interface. #201\n\n## reactabular-sort\n\n  * Feature - Add `sort.byColumnsPrioritizeLastSorted`. #199\n\n4.0.0 / 2016-09-12\n==================\n\n## reactabular-easy\n\n  * Breaking - Push `onDragColumn` control to user. Earlier it managed widths through CSS (more performant, but also more brittle). The problem with that was that the initial update of a stylesheet could fail (no widths were set). Now widths are controlled by React completely. Note that the API changed to `onDragColumn(width, { columnIndex })`.\n\n3.0.6 / 2016-09-12\n==================\n\n## reactabular-table\n\n  * Feature - Allow `BodyRow` `shouldComponentUpdate` to be overridden by setting `components.body.row.shouldComponentUpdate = true`.\n\n## reactabular-virtualized\n\n  * Bug fix - Rework initial measurement so that it works with CSS solutions like Radium.\n\n3.0.5 / 2016-09-02\n==================\n\n## reactabular-tree\n\n  * Feature - Allow `id` to be passed to `filter`.\n\n## reactabular-easy\n\n  * Bug fix - Pass `rowKey` to `tree.filter`. This way it filters correctly with arbitrary ids.\n\n3.0.4 / 2016-09-02\n==================\n\n## reactabular-tree\n\n  * Feature - Allow `toggleChildren` `id` to be customized (not just \"id\" anymore).\n\n## reactabular-easy\n\n  * Bug fix - Pass `rowKey` to `tree.toggleChildren`. This way toggling can work with arbitrary ids.\n\n3.0.3 / 2016-09-01\n==================\n\n## reactabular-easy\n\n  * Bug fix - Drop redundant `console.log`.\n\n3.0.2 / 2016-09-01\n==================\n\n## reactabular-virtualized\n\n  * Feature - Push development logging behind `window.LOG_VIRTUALIZED`.\n\n## reactabular-tree\n\n  * Feature - Include suggested default styling for the toggle arrow.\n\n3.0.1 / 2016-09-01\n==================\n\n## reactabular-virtualized\n\n  * Bug fix - Keep header and body in sync when scrolling at header.\n\n## reactabular-tree\n\n  * Bug fix - Pass `strategy` to `sorter` at `tree.sort`.\n\n3.0.0 / 2016-09-01\n==================\n\n## reactabular-virtualized\n\n  * Feature - New standalone package. Virtualization provides a nice performance increase for large datasets. The package works in tandem with reactabular-sticky.\n\n## reactabular-table\n\n  * Breaking - `onRow` accepts `row, { rowIndex, rowKey }` instead of `row, rowIndex`.\n  * Feature - If a row contains `_index`, use that as a `rowIndex`. This allows custom indexing (useful for virtualization).\n\n## reactabular-easy\n\n  * Feature - Integrate virtualization for extra performance.\n  * Feature - Integrate `reactabular-tree`. Now it works with tree style data. You should set `cell.toggleChildren: true` to show the UI control for toggling row children visibility.\n\n## reactabular-resizable\n\n  * Feature - Expose `parent` prop (defaults to `document`). This is handy if you use an iframe and need something more custom.\n\n## reactabular-tree\n\n  * Breaking - Rewrite API. Now most parts accept objects and you can also customize field names.\n  * Feature - Add `tree.sort` to wrap toggling row children.\n\n## reactabular-sticky\n\n  * Bug fix - Make sure `scrollOffset` gets a value no matter what. This avoid a React warning.\n\n## reactabular-utils\n\n  * Add `resolveRowKey`.\n\n2.0.5 / 2016-08-26\n==================\n\n## reactabular-sort\n\n  * Bug fix - Make sure `sort.byColumns` does not mutate passed `sortingColumns`. Now it performs a deep clone using lodash.\n\n## reactabular-sticky\n\n  * Feature - Allow `onScroll` handler to be defined for `Body`. Previously it overrode that.\n\n## reactabular-table\n\n  * Feature - Allow `Body` `rowKey` to be defined as a function (`({ rowData, rowIndex }) => {... return a rowKey ...}`). #193\n\n2.0.4 / 2016-08-24\n==================\n\n## reactabular-sticky\n\n  * Bug fix - Calculate extra padding to table body so that header and body widths match even if a scrollbar is visible.\n\n2.0.3 / 2016-08-22\n==================\n\n## reactabular-easy\n\n  * Feature - If an empty column definition is provided, escape early and avoid showing a warning per row.\n\n2.0.2 / 2016-08-17\n==================\n\n## react-edit\n\n  * Feature - Allow value rendering to be customized. Now you can pass a custom renderer for value if the default (no visible value!) isn't enough.\n\n## reactabular-resolve\n\n  * Bug fix - Make sure `resolve` does not crash if `rows` aren't provided. It will return an empty array in that case.\n\n2.0.1 / 2016-08-16\n==================\n\n  * Feature - Generate a proper ES6 build for each package. This time it transpiles ES6 features too unlike before. The problem was that Babel didn't transpile object rest spread within ES6 classes correctly. This means ES6 -> ES5 transformation needs to be performed. Not ideal, but this works.\n\n2.0.0 / 2016-08-16\n==================\n\n  * Breaking - Push `property` to root level of a column over cell. The new style is often terser.\n  * Feature - Generate a proper ES6 build for each package. Now they should work with systems like webpack 2 without problems. #189\n\n## react-edit\n\n  * Breaking - Rename as `react-edit` given it's a generic component. It's not distributed as a part of `reactabular` anymore and you'll have to install it separately. #176.\n  * Breaking - Auto focus `input` by default. #180.\n\n## reactabular-table\n\n  * Feature - Improve performance by pushing `onRow` check lower in the component hierarchy.\n\n## reactabular-search-field\n\n  * Breaking - Override `query` `onChange` instead of patching.\n  * Breaking - Make it possible to pass `column` as a prop. You should manage its state now. #182\n  * Feature - Add `onColumnChange` hook. This is needed for tracking `column` state.\n  * Bug fix - Make search input controlled by default.\n\n## reactabular-sort\n\n  * Breaking - Return sorting columns if no selected column is passed.\n  * Breaking - Extract header styling to a separate file (`style.css` at package root) and allow `style` prop to be passed.\n  * Breaking - Port sorting to a property based scheme over index one.\n  * Feature - Mark React as a peer dependency.\n  * Feature - Allow sorting `fieldName` to be customized for `sort`, `header`, and `reset`. This is useful if you want to sort per `property` for example.\n  * Feature - Allow `sorter` `getColumns` mechanism to be customized. This is needed to make `fieldName` useful.\n\n## reactabular-resizable\n\n  * Breaking - Extract header styling to a separate file (`style.css` at package root) and allow `style` prop to be passed.\n  * Feature - Document how to offset the widget.\n\n## reactabular-easy\n\n  * Breaking - Push `sortingColumns` to a prop. You should control its state yourself.\n  * Feature - Add suggested default styling (`style.css` at package root).\n  * Feature - Allow `classNames` and `styles` props to be passed for styling.\n  * Bug fix - Force update after mounting. This is needed for the sticky ref scheme to work.\n\n## reactabular-resolve\n\n  * Breaking - Rework `resolve` interface to be object based and pass row index through it.\n  * Feature - Implement `resolve.index`. This attached the row indices to `_index`. That can be handy data to have for optimization.\n\n## reactabular-visibility-toggles\n\n  * Feature - New standalone package of its own. #183\n\n## reactabular-dnd\n\n  * Feature - New standalone package of its own for wrapping drag and drop related concerns.\n\n## reactabular-tree\n\n  * Feature - New standalone package of its own for tree helpers. #168\n\n1.2.6 / 2016-08-11\n==================\n\n  * Feature - select - Drop direct dependency on Reactabular.\n  * Feature - easy - Expose `components`. Now you can override default components just like for a regular `Table.Provider`. Only exception is `header.cell` given drag and drop needs to override that in order to work.\n  * Feature - easy - Make `selectedRowIdField` prop optional. It worked before due to the default value, but it's neater this way.\n\n1.2.5 / 2016-08-08\n==================\n\n  * Feature - search-field - Accept `query` as a prop now. Better for persistency.\n\n1.2.4 / 2016-08-08\n==================\n\n  * Feature - search-columns - Rewrite as a stateless function. You should pass `query` as a prop now.\n\n1.2.3 / 2016-08-08\n==================\n\n  * Feature - reactabular - New `search-columns` module for searching per column (UI).\n  * Feature - reactabular - New `search-field` module for searching (UI).\n  * Feature - table - Make `rowKey` propType check compatible with React 15.3. It should give you better output during development now.\n  * Feature - easy - Expose `headerExtra` prop. It can be used to inject extra rows to a header. This works well with `reactabular-search-columns`.\n  * Feature - easy - Expose `onSort` and `sortingColumns` props. These are useful for implementing sorting persistency.\n\n1.2.2 / 2016-08-07\n==================\n\n  * Bug fix - resizable - Fix README example as Sticky API has been simplified (no need for ReactDOM anymore).\n\n1.2.1 / 2016-08-05\n==================\n\n  * Feature - edit - Expose `event` to `onActivate`.\n  * Feature - easy - Push `reactabular` and `reactabular-utils` as peer dependencies. This way you have better control over which versions to consume at your project.\n\n1.2.0 / 2016-08-05\n==================\n\n  * Bug fix - table - Pass unresolved values to `Table.Body` transforms instead of resolved ones.\n\n1.1.6 / 2016-08-05\n==================\n\n  * Feature - edit - Allow `activateEvent` (default `onClick`) to be overridden.\n  * Feature - easy - Trigger `onMoveColumns` only after moving columns has finished.\n  * Feature - easy - Expose `selectedRowId`. It defaults to `id`, but if your selection logic relies on some other field, you can change it now.\n  * Feature - reactabular - New `select` module for handling row selections.\n\n1.1.5 / 2016-08-04\n==================\n\n  * Feature - Attach `NODE_ENV` checks to `propTypes`. Smaller size for production usage.\n\n1.1.4 / 2016-08-04\n==================\n\n  * Bug fix - sort - Do not crash if column `cell` definition is missing. #178\n\n1.1.3 / 2016-08-04\n==================\n\n  * Bug fix - easy - If a header is set both `sortable` and `resizable`, allow custom formatter to used still.\n\n1.1.2 / 2016-08-04\n==================\n\n  * Bug fix - sticky - Fix `reactabular-table` import. Missing `* as`.\n\n1.1.1 / 2016-08-04\n==================\n\n  * Bug fix - sticky - Fix `reactabular-table` import. It points to the correct package now.\n  * Feature - table - Drop `lodash/omit` dependency.\n\n1.1.0 / 2016-08-03\n==================\n\n  * Feature - edit - Allow `editingProps` (`value`/`onValue`) to be overridden.\n  * Feature - table - Added `getRef` for getting references to underlying DOM elements.\n  * Feature - sticky - Added `getRef` for getting references to underlying DOM elements.\n  * Feature - sticky - Moved `reactabular-table` as a peer dependency as I realized it's better to let the user decide which version of the table to use.\n  * Feature - easy - Dropped dependency on react-dom.\n\n1.0.11 / 2016-07-29\n===================\n\n  * Bug fix - sort - `sort.reset` accepts object properly now. Earlier it bailed out too early.\n  * Feature - Add sorting numbers to the header so you know in which order sorting rules are applied.\n  * Feature - Allow column sorting status to be reset by doubleclicking on a column header.\n\n1.0.10 / 2016-07-29\n===================\n\n  * Feature - sort - `sort.sort` accepts `event` parameter now. It defaults to `onClick`.\n  * Feature - sort - `sort.reset` is a new transform that can be used to remove the given column from the sorting rules.\n  * Feature - sort - `sort.header` is a new formatter that can be used to apply sorting. This is handy if you use `sort.reset`.\n\n1.0.8 / 2016-07-27\n==================\n\n  * Feature - easy - Make `tableWidth` and `tableHeight` checks looser.\n\n1.0.6 / 2016-07-27\n==================\n\n  * Bug fix - easy - Merge column definition `props.className` correctly. Previously it discarded possible value.\n  * Feature - easy - Add styling hooks. Now you can attach classes to the table structure (table, thead, tbody).\n  * Feature - easy - Add `onDragColumn` and `onMoveColumns` hooks.\n\n1.0.5 / 2016-07-27\n==================\n\n  * Feature - highlight - Do not pass `undefined` keys to `_highlights` data.\n  * Feature - easy - Add column visibility to the example.\n  * Feature - easy - Render `EasyTable` in a fixed viewport.\n  * Bug fix - easy - Do not re-initialize styles if columns change. Without this CSS resets. I may have to revisit this decision but it seems logical now.\n  * Feature - easy - Support `draggable` header flag.\n\n1.0.3 / 2016-07-27\n==================\n\n  * Feature - sticky - Make `tableHeader` prop check looser.\n  * Feature - easy - Resolve nested and `cell.resolve` based data.\n  * Feature - easy - Support search with highlighting through a `query` prop.\n\n1.0.2 / 2016-07-26\n==================\n\n  * Feature - resizable - New module for resizing columns.\n  * Feature - sticky - New pair of components (`Sticky.Header`, `Sticky.Body`) that allow you to render data within a fixed viewport.\n\n1.0.1 / 2016-07-26\n==================\n\n  * Feature - resolve - Make sure `undefined` keys aren't included in the resolved result.\n  * Bug fix - highlight - Retain original data while highlighting rows.\n\n1.0.0 / 2016-07-25\n==================\n\n  * Complete rewrite. Too many changes to mention. Please study the documentation for details.\n\n0.14.2 / 2016-06-13\n===================\n\n  * Bug fix - Fix `postinstall` script for Node 0.10. #147 @Gudahtt\n\n0.14.1 / 2016-06-11\n===================\n\n  * Bug fix - Use a ref at `input` editor over `this.getDOMNode()` given latter was deprecated in React 15.\n\n0.14.0 / 2016-06-09\n===================\n\n  * Breaking - Force `rowKey` to be set. This helps with performance so better set that. #135\n  * Feature - Drop dependency on `react/lib/update`. Smaller bundle this way too.\n  * Feature - Drop dependency on `lodash/merge`.\n\n0.13.0 / 2016-06-07\n===================\n\n  * Feature - Support for multiple search filters. #138 @szdc\n\n0.12.1 / 2016-04-08\n===================\n\n  * Expand React peer dependency range to include React 15.\n\n0.12.0 / 2016-03-22\n===================\n\n  * Breaking - Bump lodash minimum version to 4.0.\n  * Feature - Import only specific lodash functions. #134 @callahad\n\n0.11.2 / 2016-02-23\n===================\n\n  * Bug fix - Don't attempt to merge table cell values. #132 @trun\n\n0.11.1 / 2016-02-18\n===================\n\n  * Feature - Allow `Search` \"all\" to be translated. #130\n\n0.11.0 / 2016-02-14\n===================\n\n  * Bug fix - Cell functions could be skipped when two columns shared the same property. #129 @MrOrz\n\n0.10.4 / 2016-02-13\n===================\n\n  * Feature - Relaxed about lodash peer version, now < 5. #128 @FredericHeem\n\n0.10.3 / 2016-01-31\n===================\n\n  * Feature - Support multi-column sorts a la react-datagrid (cycle through ascending, descending, none independently). #127 @JeffSanchez\n\n0.10.2 / 2016-01-22\n===================\n\n  * Bug Fix - ”formatter shortcut” logic in cell function. #125 @MrOrz\n\n0.10.1 / 2016-01-21\n===================\n\n  * Bug Fix - Do not show React elements at search dropdown Only strings and numbers are allowed. #124\n\n0.10.0 / 2016-01-19\n===================\n\n  * Bug Fix - Merge props & values of cell functions correctly. #53, #122 @MrOrz\n  * Documentation - Correct usage from props.header to props.columnNames. #121 @goldensunliu\n  * Documentation - Fix object protocol example. #117 @arkon\n  * Demo - Updated react-pagify\n  * Demo - Add double click example for cell\n  * Breaking - Replaced `className` with `headerClass`. #113 @goldensunliu\n\n0.9.2 / 2015-11-10\n==================\n\n  * Feature - Support Node 0.10 again. #112 @bjrmatos\n"}});