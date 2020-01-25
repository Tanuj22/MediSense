import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Button,Table } from 'semantic-ui-react'
import voting from '../../ethereum/voting';
import { Link } from '../../routes.js';
import RequestRow from '../../components/requestCandidateRow'; 


class VoterAdmin extends Component{
    static async getInitialProps(){
            const registeredDoctors = await voting.methods.getDocters().call();
            return {registeredDoctors};
    }

    DoctorList(){
        return this.props.registeredDoctors.map((address,index) =>{
            return <RequestRow
                key={index}
                address = {address} 
            />;
        });
    }

    render(){
        return(
            <Layout>
                <Link route = '/admin/voters'>
                    <Button>Show Patients</Button>
                </Link>
                <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Previous Record</Table.HeaderCell>
                        <Table.HeaderCell>Vertified</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.DoctorList()}
                </Table.Body>
                </Table>
            </Layout>
        );
    }
}

export default VoterAdmin;
