import React from 'react';
import ReactDOM from 'react-dom';
import { Column, Table, AutoSizer, ColumnProps } from 'react-virtualized';
import style from 'styled-components'
import 'react-virtualized/styles.css';
import './styles.css'

// Table data as an array of objects
const list = [
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'scarlett richards', description: '' },
  { name: 'sara kristensen', description: '' },
  { name: 'mason jones', description: '' },
  { name: 'carter addy', description: '' },
  { name: 'becky miles', description: '' },
  { name: 'silas hansen', description: '' },
  { name: 'alfred poulsen', description: '' },
  { name: 'louka laurent', description: '' },
  { name: 'jade harcourt', description: '' },
  { name: 'matthias lecomte', description: '' },
  { name: 'roope eskola', description: '' },
  { name: 'arttu mattila', description: '' },
  // And so on...
];

type Props = {
  columns: ColumnProps[];
}

const ContentBox = style.div`
height: 100%;
`;

const columns : ColumnProps[] = [
  { dataKey: 'name', label: 'name', width: 100 },
  { dataKey: 'descroption', label: 'description', width: 100 },
];

class App extends React.Component<Props> {
  render() {
    return (
      <ContentBox>
        <div>
          <AutoSizer disableHeight>
            {({ width }) => (
              <Table
                ref="Table"
                rowGetter={({ index }) => list[index]}
                headerHeight={20}
                rowHeight={30}
                rowCount={list.length}
                height={400}
                width={width}
              >
                <Column
                  label="name"
                  dataKey="name"
                  width={100}
                />
                <Column
                  label="Description"
                  dataKey="description"
                  width={200}
                />
              </Table>
            )}
          </AutoSizer>
        </div>
      </ContentBox>
    )
  }
}


// Render your table
ReactDOM.render(
  <App columns={columns}/>,
  document.querySelector('#root')
);


// ReactDOM.render(<App />, document.querySelector('#root'))