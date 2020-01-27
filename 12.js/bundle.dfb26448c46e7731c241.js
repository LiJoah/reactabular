webpackJsonp([12],{1520:function(n,e,o){var t=o(1),l=o(14),i=o(15).PageRenderer;i.__esModule&&(i=i.default);var s=l({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1553)}},componentWillMount:function(){},render:function(){return t.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,n.exports=s},1553:function(n,e){n.exports="[![build status](https://secure.travis-ci.org/reactabular/react-visibility-toggles.svg)](http://travis-ci.org/reactabular/react-visibility-toggles) [![bitHound Score](https://www.bithound.io/github/reactabular/react-visibility-toggles/badges/score.svg)](https://www.bithound.io/github/reactabular/react-visibility-toggles) [![codecov](https://codecov.io/gh/reactabular/react-visibility-toggles/branch/master/graph/badge.svg)](https://codecov.io/gh/reactabular/react-visibility-toggles)\n\n# react-visibility-toggles - Visibility toggles for React\n\n`react-visibility-toggles` provides a React component for rendering visibility toggles for table columns. It works well with Reactabular.\n\n## Example\n\n```\n/*\nimport VisibilityToggles from 'react-visibility-toggles';\n*/\n\nconst columns = [\n  {\n    header: {\n      label: 'Name'\n    },\n    visible: true\n  },\n  {\n    header: {\n      label: 'Age'\n    },\n    visible: false\n  }\n];\n\n<VisibilityToggles\n  columns={columns}\n  onToggleColumn={({ column, columnIndex }) => console.log(column, columnIndex)}\n  isVisible={({ column }) => column.visible}\n  props={{}}\n/>\n```\n\n## Integrating with Reactabular\n\nThe following example shows how to integrate `react-visibility-toggles` with Reactabular:\n\n```jsx\n/*\nimport React from 'react';\nimport * as Table from 'reactabular-table';\nimport { cloneDeep } from 'lodash';\nimport VisibilityToggles from 'react-visibility-toggles';\n*/\n\nclass ToggleColumnsTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      columns: [\n        {\n          property: 'name',\n          header: {\n            label: 'Name'\n          },\n          visible: true\n        },\n        {\n          property: 'age',\n          header: {\n            label: 'Age'\n          },\n          visible: false\n        },\n        {\n          property: 'color',\n          header: {\n            label: 'Color'\n          },\n          cell: {\n            transforms: [color => ({ style: { color } })]\n          },\n          visible: true\n        }\n      ],\n      rows: [\n        {\n          id: 100,\n          name: 'Adam',\n          age: 12,\n          color: 'red'\n        },\n        {\n          id: 101,\n          name: 'Brian',\n          age: 44,\n          color: 'green'\n        },\n        {\n          id: 102,\n          name: 'Mike',\n          age: 25,\n          color: 'blue'\n        }\n      ]\n    };\n\n    this.onToggleColumn = this.onToggleColumn.bind(this);\n  }\n  render() {\n    const { columns, rows } = this.state;\n\n    return (\n      <div>\n        <VisibilityToggles\n          columns={columns}\n          onToggleColumn={this.onToggleColumn}\n        />\n\n        <Table.Provider\n          columns={columns.filter(column => column.visible)}\n        >\n          <Table.Header />\n\n          <Table.Body rows={rows} rowKey=\"id\" />\n        </Table.Provider>\n      </div>\n    );\n  }\n  onToggleColumn({ columnIndex }) {\n    const columns = cloneDeep(this.state.columns);\n\n    columns[columnIndex].visible = !columns[columnIndex].visible;\n\n    this.setState({ columns });\n  }\n}\n\n<ToggleColumnsTable />\n```\n\n## License\n\nMIT. See LICENSE for details.\n\n"}});