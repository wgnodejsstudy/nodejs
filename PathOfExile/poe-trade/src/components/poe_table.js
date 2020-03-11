import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.run}</TableCell>
                <TableCell>{this.props.item1}
                    <TableRow>
                        {this.props.item2}
                    </TableRow>
                    <TableRow>
                        {this.props.item3}
                    </TableRow>
                    <TableRow>
                        {this.props.item4}
                    </TableRow>
                </TableCell>
                <TableCell>{this.props.currency1}
                    <TableRow>
                        {this.props.currency2}
                    </TableRow>
                    <TableRow>
                        {this.props.currency3}
                    </TableRow>
                    <TableRow>
                        {this.props.currency4}
                    </TableRow>
                </TableCell>
                <TableCell>{this.props.targetItem1}
                    <TableRow>
                        {this.props.targetItem2}
                    </TableRow>
                </TableCell>
                <TableCell>{this.props.targetCurrency1}
                    <TableRow>
                        {this.props.targetCurrency2}
                    </TableRow>
                </TableCell>
            </TableRow>
        )
    }
}

export default Customer;
