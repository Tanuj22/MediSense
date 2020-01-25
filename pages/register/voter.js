import React, {Component} from 'react';
import Layout from '../../components/Layout'
import { Form ,Button , Input, Message} from 'semantic-ui-react';
import voting from '../../ethereum/voting';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes.js'

class RegisterVoter extends Component{
    state = {
        name : '',
        age : '',
        gender : '',
        preMedicalRecord : '',
        doctorComments : '',
        errorMessage : '',
        loading : false,
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading : true , errorMessage : ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await voting.methods.registerPatient(this.state.name, this.state.age, this.state.gender,
                this.state.preMedicalRecord).send({
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
                <h3>Register as Voter</h3>
                <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Name</label>
                        <Input
                            label = "name" 
                            labelPosition = "right"
                            value={this.state.name}
                            onChange={event =>this.setState({name : event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Age</label>
                        <Input
                            label = "age"
                            labelPosition = "right"
                            value={this.state.age}
                            onChange={event =>this.setState({age : event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Gender</label>
                        <Input
                            label = "gender"
                            labelPosition = "right"
                            value={this.state.gender}
                            onChange={event =>this.setState({gender : event.target.value})}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Pre Medical Record</label>
                        <Input
                            label = "preMedicalRecord"
                            labelPosition = "right"
                            value={this.state.preMedicalRecord}
                            onChange={event =>this.setState({preMedicalRecord : event.target.value})}
                        />
                    </Form.Field>

                    <Message error header= "Oops" content = {this.state.errorMessage} />
                    <Button loading= { this.state.loading } primary>Register</Button>
                </Form>
            </Layout>
        );
    }
}

export default RegisterVoter;
