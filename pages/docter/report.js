import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Grid, Button } from 'semantic-ui-react'
import web3 from '../../ethereum/web3';
import voting from '../../ethereum/voting';
import { Router, Link } from '../../routes';

class VoterDetails extends Component{
    static async getInitialProps(){
        const accounts = await web3.eth.getAccounts();
        const address = await voting.methods.currentPatient().call();
        const voter = await voting.methods.patientDetails(address).call();
        const docterComments = await voting.methods.docterComments(address).call();
        if(!address)
        {
            Router.pushRoute('/');
        }
        else
        {
            return { voter , docterComments};
        }
    }

    render(){
        return(
            <Layout>
                <div style = {{paddingTop : '25px'}}>
                    <Grid columns = {2}>
                        <Grid.Row>
                            <Grid.Column>
                                Name : <br/>
                                {this.props.voter.name}
                            </Grid.Column>
                            <Grid.Column>
                                Age : <br/>
                                {this.props.voter.age}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                Gender : <br/>
                                {this.props.voter.gender}
                            </Grid.Column>
                            <Grid.Column>
                                <Link route = '/docter/comments'>
                                    <Button >Add comment</Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                Medical Records : <br/>
                                {this.props.voter.preMedicalRecord}
                            </Grid.Column>
                            <Grid.Column>
                                Medical Records : <br/>
                                {this.props.docterComments}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default VoterDetails;
