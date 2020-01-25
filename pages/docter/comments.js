import React, {Component} from 'react';
import Layout from '../../components/Layout'
import { Form ,Button , Input, Message} from 'semantic-ui-react';
import voting from '../../ethereum/voting';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes.js'

class RegisterVoter extends Component{
    static async getInitialProps(){
        const accounts = await web3.eth.getAccounts();
        const address = await voting.methods.currentPatient().call();
        if(!address)
        {
            Router.pushRoute('/');
        }
        else
        {
            return { address };
        }
    }
    state = {
        doctorComments : '',
        errorMessage : '',
        loading : false,
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading : true , errorMessage : ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await voting.methods.addComments(this.props.address, this.state.doctorComments).send({
                from : accounts[0]
            });
            Router.pushRoute('/');
        } catch(err){
            this.setState({ errorMessage : err.message })
        }

        this.setState({loading : false})
    };

    render(){
        return(
            <Layout>
                <h3>Add Comments</h3>
                <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Comments</label>
                        <Input
                            label = "comments"
                            labelPosition = "right"
                            value={this.state.doctorComments}
                            onChange={event =>this.setState({doctorComments : event.target.value})}
                        />
                    </Form.Field>
                    <Message error header= "Oops" content = {this.state.errorMessage} />
                    <Button loading= { this.state.loading } primary>Add Comments</Button>
                </Form>
            </Layout>
        );
    }
}

export default RegisterVoter;
