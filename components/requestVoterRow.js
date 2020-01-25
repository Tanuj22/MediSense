import React, {Component} from 'react';
import { Table, Button } from 'semantic-ui-react';
import voting from '../ethereum/voting';
import web3 from '../ethereum/web3';

class RequestRow extends Component{

    state = {
        voter : {},
        state : false
    }

    onVerify = async()=>{
        this.setState({loading : true });
        const accounts = await web3.eth.getAccounts();
        await voting.methods.verifyPatient(this.props.address).send({
            from : accounts[0]
        });
        this.setState({loading : false });
    };

    render(){
        voting.methods.patientDetails(this.props.address).call().then( voter => {
            this.setState({voter : voter})
        });
        return(
            <Table.Row disabled= {this.state.voter.isVerified}>
                <Table.Cell>{this.state.voter.name}</Table.Cell>
                <Table.Cell>{this.state.voter.age}</Table.Cell>
                <Table.Cell>{this.state.voter.gender}</Table.Cell>
                <Table.Cell>
                    { this.state.voter.isVerified ? null : (
                        <Button color = "green" basic onClick = {this.onVerify} loading= { this.state.loading }>Verify</Button>
                    )}
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default RequestRow;
