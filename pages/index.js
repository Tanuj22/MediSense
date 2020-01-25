import React, {Component} from 'react';
import Layout from '../components/Layout.js';
import {Button} from 'semantic-ui-react';
import voting from '../ethereum/voting';
import {Link } from '../routes';

class VotingIndex extends Component{
    render(){
        return(
            <Layout>
                <center><h1 style={{paddingTop :'25px'}}>It is health that is real wealth and not pieces of gold and silver</h1>
                <div style  = {{paddingTop : '40px'}}>
                <Link route ='/register'><Button size = "massive">Register</Button></Link> <Link route ='/vote/details'><Button size = "massive">Patient Login</Button></Link>
                    <Link route ='/docter/doctor-details'><Button size = "massive">Doctor Login</Button></Link>
                </div>
                </center>
            </Layout>
        );
    }
}

export default VotingIndex;
