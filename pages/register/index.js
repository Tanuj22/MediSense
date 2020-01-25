import React, {Component} from 'react';
import Layout from '../../components/Layout'
import { Button } from 'semantic-ui-react';
import { Link } from '../../routes';
class RegisterIndex extends Component{
    
    render(){
        return(
            <Layout>
                <center>
                    <Link route = '/register/voter'>
                        <Button>Register as a Patient</Button>
                    </Link>
                    
                    <Link route = '/register/candidate'>
                        <Button>Register as a Doctor</Button>
                    </Link>
                </center>
            </Layout>
        );
    }
}

export default RegisterIndex;
