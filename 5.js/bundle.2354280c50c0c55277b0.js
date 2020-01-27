webpackJsonp([5],{1514:function(e,n,t){var r=t(1),o=t(14),s=t(15).PageRenderer;s.__esModule&&(s=s.default);var a=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1547)}},componentWillMount:function(){},render:function(){return r.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,e.exports=a},1547:function(e,n){e.exports="[![build status](https://secure.travis-ci.org/reactabular/treetabular.svg)](http://travis-ci.org/reactabular/treetabular) [![bitHound Score](https://www.bithound.io/github/reactabular/treetabular/badges/score.svg)](https://www.bithound.io/github/reactabular/treetabular) [![codecov](https://codecov.io/gh/reactabular/treetabular/branch/master/graph/badge.svg)](https://codecov.io/gh/reactabular/treetabular)\n\n# Treetabular - Tree utilities\n\n`treetabular` provides tree helpers for Reactabular. It allows you to set up collapsible rows that can contain more collapsible ones while remaining within a table format.\n\nTo achieve this, `treetabular` relies on a flat structure that contains the hierarchy:\n\n```javascript\nconst tree = [\n  {\n    _index: 0,\n    id: 123,\n    name: 'Demo'\n  },\n  {\n    _index: 1,\n    id: 456,\n    name: 'Another',\n    parent: 123\n  },\n  {\n    _index: 2,\n    id: 789,\n    name: 'Yet Another',\n    parent: 123\n  },\n  {\n    _index: 3,\n    id: 532,\n    name: 'Foobar'\n  }\n];\n```\n\nIf there's a `parent` relation, the children must follow their parent right after it (you might use `fixOrder` helper function if your data does not meet that criteria).\n\n> You can find suggested default styling for the package at `style.css` in the package root.\n\n## API\n\n```javascript\nimport * as tree from 'treetabular';\n\n// Or you can cherry-pick\nimport { filter } from 'treetabular';\nimport { filter as filterTree } from 'treetabular';\n```\n\n### Transformations\n\n**`tree.collapseAll = ({ property = 'showingChildren' }) => (rows) => [<collapsedRow>]`**\n\nCollapses rows by setting `showingChildren` of each row to `false`.\n\n**`tree.expandAll = ({ property = 'showingChildren' }) => (rows) => [<expandedRow>]`**\n\nExpands rows by setting `showingChildren` of each row to `true`.\n\n**`tree.filter = ({ fieldName, idField = 'id', parentField = 'parent' }) => (rows) => [<filteredRow>]`**\n\nFilters the given rows using `fieldName`. This is handy if you want only rows that are visible assuming visibility logic has been defined.\n\n### Queries\n\n**`tree.getLevel = ({ index, idField = 'parentId', parentField = 'parent' }) => (rows) => <level>`**\n\nReturns the nesting level of the row at the given `index` within `rows`.\n\n**`tree.getChildren = ({ index, idField = 'id', parentField = 'parent' }) => (rows) => [<child>]`**\n\nReturns children based on given `rows` and `index`. This includes children of children.\n\n**`tree.getImmediateChildren = ({ index, idField = 'id', parentField = 'parent' }) => (rows) => [<child>]`**\n\nReturns immediate children based on given `rows` and `index`.\n\n**`tree.getParents = ({ index, idField = 'parentId', parentField = 'parent' }) => (rows) => [<parent>]`**\n\nReturns parents based on given `rows` and `index`.\n\n**`tree.hasChildren = ({ index, idField = 'id', parentField = 'parent '}) => (rows) => <boolean>`**\n\nReturns a boolean based on whether or not the row at the given `index` has children.\n\n**`tree.search = ({ operation: (rows) => [<row>], idField = 'id', parentField = 'parent' }) => (rows) => [<searchedRow>]`**\n\nSearches against a tree structure using `operation` while matching against children too. If children are found, associated parents are returned as well. This has been designed to [searchtabular](https://www.npmjs.com/package/searchtabular) `multipleColumns` and `singleColumn`, but as long as the passed operation follows the interface, it should fit in.\n\n> This depends on [resolve.resolve](https://www.npmjs.com/package/table-resolver#resolveresolve)!\n\n**`tree.wrap = ({ operations: [rows => rows], idField = 'id' }) => (rows) => [<operatedRow>]`**\n\nIf you want to perform an operation, such as sorting, against the root rows of a tree, use `tree.wrap`.\n\n**Example:**\n\n```javascript\nwrap({\n  operations: [\n    sorter({\n      columns,\n      sortingColumns,\n      sort: orderBy\n    })\n  ]\n})(rows);\n```\n\n### Packing\n\n**`tree.pack = ({ parentField = 'parent', childrenField = 'children', idField = 'id' }) => (rows) => [<packedRow>]`**\n\nPacks children inside root level nodes. This is useful with sorting and filtering.\n\n**`tree.unpack = ({ parentField = 'parent', childrenField = 'children', idField = 'id', parent }) => (rows) => [<unpackedRow>]`**\n\nUnpacks children from root level nodes. This is useful with sorting and filtering.\n\n### Drag and Drop\n\n**`tree.moveRows = ({ operation: (rows) => [<row>], retain = [], idField = 'id', parentField = 'parent' }) => (rows) => [<movedRow>]`**\n\nAllows moving tree rows while `retain`ing given fields at their original rows. You should pass an `operation` that performs actual moving here. [reactabular-dnd](https://www.npmjs.com/package/reactabular-dnd) `moveRows` is one option.\n\n### UI\n\n**`tree.toggleChildren = ({ getIndex, getRows, getShowingChildren, toggleShowingChildren, props, idField = 'id', parentField, toggleEvent = 'DoubleClick' }) => (value, extra) => <React element>`**\n\nMakes it possible to toggle node children through a user interface.\nPass `\"indent\":false` inside `props` object if you want to disable automatic indentation.\n\nThe default implementation of `getIndex(rowData)` depends on [resolve.resolve](https://www.npmjs.com/package/table-resolver#resolveresolve) as it looks for index of the row to toggle based on that. This can be customized though.\n\n### Helpers\n\n**`tree.fixOrder = ({ parentField = 'parent', idField = 'id' }) => (rows) => [<rows in correct order>]`**\n\nIf children in your rows don't follow their parents you can use that helper method so they will be moved into right place.\n\nBasically it converts `[ parent, x, y, z, children ]` into `[ parent, children, x, y, z ]`.\n\n## Example\n\n```jsx\n/*\nimport React from 'react';\nimport cloneDeep from 'lodash/cloneDeep';\nimport orderBy from 'lodash/orderBy';\nimport { compose } from 'redux';\nimport * as resolve from 'table-resolver';\nimport VisibilityToggles from 'reactabular-visibility-toggles';\nimport * as Table from 'reactabular-table';\nimport * as tree from 'treetabular';\nimport * as search from 'searchtabular';\nimport * as sort from 'sortabular';\n\nimport {\n  generateParents, generateRows\n} from './helpers';\n*/\n\nconst schema = {\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    name: {\n      type: 'string'\n    },\n    age: {\n      type: 'integer'\n    }\n  },\n  required: ['id', 'name', 'age']\n};\n\nclass TreeTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    const columns = this.getColumns();\n    const rows = resolve.resolve({ columns })(\n      generateParents(generateRows(100, schema))\n    );\n\n    this.state = {\n      searchColumn: 'all',\n      query: {},\n      sortingColumns: null,\n      rows,\n      columns\n    };\n\n    this.onExpandAll = this.onExpandAll.bind(this);\n    this.onCollapseAll = this.onCollapseAll.bind(this);\n    this.onToggleColumn = this.onToggleColumn.bind(this);\n  }\n  getColumns() {\n    const sortable = sort.sort({\n      // Point the transform to your rows. React state can work for this purpose\n      // but you can use a state manager as well.\n      getSortingColumns: () => this.state.sortingColumns || {},\n\n      // The user requested sorting, adjust the sorting state accordingly.\n      // This is a good chance to pass the request through a sorter.\n      onSort: selectedColumn => {\n        const sortingColumns = sort.byColumns({\n          sortingColumns: this.state.sortingColumns,\n          selectedColumn\n        });\n\n        this.setState({ sortingColumns });\n      }\n    });\n\n    return [\n      {\n        property: 'name',\n        props: {\n          style: { width: 200 }\n        },\n        header: {\n          label: 'Name',\n          transforms: [sortable]\n        },\n        cell: {\n          formatters: [\n            tree.toggleChildren({\n              getRows: () => this.state.rows,\n              getShowingChildren: ({ rowData }) => rowData.showingChildren,\n              toggleShowingChildren: rowIndex => {\n                const rows = cloneDeep(this.state.rows);\n\n                rows[rowIndex].showingChildren = !rows[rowIndex].showingChildren;\n\n                this.setState({ rows });\n              },\n              // Inject custom class name per row here etc.\n              props: {}\n            })\n          ]\n        },\n        visible: true\n      },\n      {\n        property: 'age',\n        props: {\n          style: { width: 300 }\n        },\n        header: {\n          label: 'Age',\n          transforms: [sortable]\n        },\n        visible: true\n      }\n    ];\n  }\n  render() {\n    const {\n      searchColumn, columns, sortingColumns, query\n    } = this.state;\n    const visibleColumns = columns.filter(column => column.visible);\n    const rows = compose(\n      tree.filter({ fieldName: 'showingChildren' }),\n      tree.wrap({\n        operations: [\n          sort.sorter({\n            columns,\n            sortingColumns,\n            sort: orderBy\n          })\n        ]\n      }),\n      tree.search({\n        operation: search.multipleColumns({ columns, query })\n      })\n    )(this.state.rows);\n\n    return (\n      <div>\n        <VisibilityToggles\n          columns={columns}\n          onToggleColumn={this.onToggleColumn}\n        />\n\n        <button onClick={this.onExpandAll}>Expand all</button>\n        <button onClick={this.onCollapseAll}>Collapse all</button>\n\n        <div className=\"search-container\">\n          <span>Search</span>\n          <search.Field\n            column={searchColumn}\n            query={query}\n            columns={visibleColumns}\n            rows={rows}\n            onColumnChange={searchColumn => this.setState({ searchColumn })}\n            onChange={query => this.setState({ query })}\n          />\n        </div>\n\n        <Table.Provider\n          className=\"pure-table pure-table-striped\"\n          columns={visibleColumns}\n        >\n          <Table.Header />\n\n          <Table.Body rows={rows} rowKey=\"id\" />\n        </Table.Provider>\n      </div>\n    );\n  }\n  onExpandAll() {\n    this.setState({\n      rows: tree.expandAll()(this.state.rows)\n    });\n  }\n  onCollapseAll() {\n    this.setState({\n      rows: tree.collapseAll()(this.state.rows)\n    });\n  }\n  onToggleColumn({ columnIndex }) {\n    const columns = cloneDeep(this.state.columns);\n\n    columns[columnIndex].visible = !columns[columnIndex].visible;\n\n    this.setState({ columns });\n  }\n}\n\n<TreeTable />\n```\n\n## License\n\nMIT. See LICENSE for details.\n"}});