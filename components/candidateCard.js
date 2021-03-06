import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import voting from '../ethereum/voting';
import { Router , Link} from '../routes'

class CandidateCard extends Component{
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
            Router.push('/');
        }catch(err){
            this.setState({ errorMessage : err.message });
        }

        this.setState({loading : false});

    }

    render(){
        return(
            <Card>
                <Card.Content>
                <Card.Header>{this.props.candidate.name}</Card.Header>
                <Card.Meta>{this.props.candidate.age}</Card.Meta>
                <Card.Description>{this.props.candidate.gender}</Card.Description>
                </Card.Content>
                <Card.Content extra>

                        <Button class="ui green basic button" onClick = {this.onVote} loading= { this.state.loading }>Send Report</Button>

                    <Link route = {`/vote/candidateslist/${this.props.address}`}>
                        <Button class="ui green basic button">More Details</Button>
                    </Link>
                </Card.Content>
            </Card>
        );
    }
}

export default CandidateCard;
