import React, { Component } from 'react';
import Customer from './components/poe_table'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

var data = {
  "groupName": "ShaperRun",
  "inputItem": [
    {
      "name": "지도1",
      "price": "100",
      "obe": "cha"
    },
    {
      "name": "지도2",
      "price": "1",
      "obe": "exa"
    },
  ],
  "outputItem": [
    {
      "name": "앗지리의 성찰",
      "price": "17",
      "obe": "exa"
    }
  ]
}

class App extends Component {

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>아이템</TableCell>
              <TableCell>커런시</TableCell>
              <TableCell>타겟 아이템</TableCell>
              <TableCell>커런시</TableCell>
              <TableCell>차액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Customer run={data.groupName} item1={data.inputItem[0].name} item2={data.inputItem[1].name} currency1={data.inputItem[0].price + " " + data.inputItem[0].obe} currency2={data.inputItem[1].price + " " + data.inputItem[1].obe} targetItem={data.outputItem[0].name} targetCurrency={data.outputItem[0].price + " " + data.outputItem[0].obe} />
          </TableBody>
        </Table>

      </div>

    );
  }


}

export default App;