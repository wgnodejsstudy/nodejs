import React, { Component } from 'react';
import Customer from './components/poe_table'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';
import {observable} from "mobx"
import {observer} from "mobx-react"

class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
    data : {}    
  };
}

    
  componentDidMount() {
    axios.get("api/search?league=Standard&name=ShaperRun").then((res) => {
      this.setState({data : res.data});
      console.log(this.state.data);
    })
  }

  render() {
    if(!this.state.data.outputItem){
      return <span>Loading...</span>;
    }
    const {data_2} = this.state.data;
    console.log(data_2);
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>필요 아이템 목록</TableCell>
              <TableCell>필요 커런시</TableCell>
              <TableCell>획득 아이템 목록</TableCell>
              <TableCell>획득 커런시</TableCell>
              <TableCell>차액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Customer run= {this.state.data.groupName} 
            item1 = {this.state.data.inputItem[0].name} 
            item2 = {this.state.data.inputItem[1].name} 
            item3 = {this.state.data.inputItem[2].name} 
            item4 = {this.state.data.inputItem[3].name} 
            currency1 = {this.state.data.inputItem[0].amount + " " + this.state.data.inputItem[0].currency} 
            currency2 = {this.state.data.inputItem[1].amount + " " + this.state.data.inputItem[1].currency} 
            currency3 = {this.state.data.inputItem[2].amount + " " + this.state.data.inputItem[2].currency} 
            currency4 = {this.state.data.inputItem[3].amount + " " + this.state.data.inputItem[3].currency}
            targetItem1 = {this.state.data.outputItem[0].name}
            targetItem2 = {this.state.data.outputItem[1].name}
            targetCurrency1 = {this.state.data.outputItem[0].amount + " " + this.state.data.outputItem[0].currency}
            targetCurrency2 = {this.state.data.outputItem[1].amount + " " + this.state.data.outputItem[1].currency}
            />
          </TableBody>
        </Table>
      </div>

    );
  }
}

export default App;