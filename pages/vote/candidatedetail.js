import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Grid , Button } from 'semantic-ui-react'
import voting from '../../ethereum/voting';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes.js';

class CandidateDetail extends Component{
    static async getInitialProps(props) {
        const {address} = props.query;
        const details = await voting.methods.docterDetails(address).call();
        const adminDetails = await voting.methods.adminDocterDetails(address).call();
        const accounts = await web3.eth.getAccounts();
        const voter = await voting.methods.patientDetails(accounts[0]).call();
        return{address,details,adminDetails};
    }

    state = {
        errrorMessage : '',
        loading : false,
    }

    onVote= async()=>{
        this.setState({loading : true , errorMessage : ''});
        try{
            const accounts = await web3.eth.getAccounts();
            await voting.methods.vote().send({
                from : accounts[0]
            })
            Router.pushRoute('/');
        }catch(err){
            this.setState({ errorMessage : err.message });
        }

        this.setState({loading : false});

    }

    render(){
        return(
            <Layout>
                <div style = {{paddingTop : '25px'}}>
                <Grid columns = {2}>
                    <Grid.Row>
                        <Grid.Column>
                            Name : <br/>
                            {this.props.details.name}
                        </Grid.Column>
                        <Grid.Column>
                            Age: <br/>
                            {this.props.details.age}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                        Gender: <br/>
                        {this.props.details.gender}
                    </Grid.Column>
                    <Grid.Column>
                        PreviousRecord : <br/>
                        {this.props.details.previousRecord}
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                        Other Details : <br/>
                        {this.props.adminDetails.otherDetails}
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick = {this.onVote} loading= { this.state.loading }>Send Reports</Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
            </Layout>
        );
    }
}

export default CandidateDetail;
