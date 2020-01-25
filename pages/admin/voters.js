import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Button, Table } from 'semantic-ui-react'
import voting from '../../ethereum/voting';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes.js';
import RequestRow from '../../components/requestVoterRow'; 


class VoterAdmin extends Component{
    static async getInitialProps(){
        const registeredPatients = await voting.methods.getPatients().call();
        return {registeredPatients};
    }

    state = {
        loading : false,
        loading2 : false
    }

    PatientsList(){
        return this.props.registeredPatients.map((address,index) =>{
            return <RequestRow
                key={index}
                address = {address} 
            />;
        });
    }


    render(){
        return(
            <Layout>
                <Link route = '/admin/candidates'>
                    <Button>Show Candidates</Button>
                </Link>
                <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Vertified</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.PatientsList()}
                </Table.Body>
                </Table>
            </Layout>
        );
    }
}

export default VoterAdmin;
