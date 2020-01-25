import React, {Component} from 'react';
import Layout from '../components/Layout.js';
import {Button} from 'semantic-ui-react';
import voting from '../ethereum/voting';
import {Link } from '../routes';
import {Tab} from 'semantic-ui-react';
import { Header, Image, Modal } from 'semantic-ui-react';

const ButtonExampleConditionalsCustom = () => (
  <Button.Group>
    <Button>un</Button>
    <Button.Or text='ou' />
    <Button positive>deux</Button>
  </Button.Group>
)

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)



class VotingIndex extends Component{
    render(){
        return(
            <Layout /*as='h1'
        inverted
        style={{
            width: 1024,
            height: 320,
            display: 'inline-block',
            opacity: 0.5,
            backgroundImage: /!*`url(${"a.jpeg"})`*!/ 'url(${"a.jpeg"})',
            backgroundSize: 'cover',
            /!*fontSize: mobile ? '2em' : '4em',*!/
            fontWeight: 'normal',
            marginBottom: 0,
            /!*marginTop: mobile ? '1.5em' : '3em',*!/
        }}*/>
                <center><h1 style={{paddingTop :'25px',color :'#21618C'}}>MediSense Transit</h1><h2 style  = {{color:'#3498DB'}}> Safe Report exchange a Click Away</h2>
                <div style  = {{paddingTop : '40px', color:'#3498DB'}}>

            <div class="ui buttons">
  <Link route ='/vote/details'><button class="ui green inverted massive button">Patient Login</button></Link>
  <div className="or" data-text="OR"></div>
  <Link route ='/docter/doctor-details'><button class="ui green inverted massive button">Doctor Login</button></Link>
</div>



                    <br/><br/>
                <Link route ='/register'><Button class="ui red inverted massive button">Register</Button></Link>





                </div>
                </center>
            </Layout>
        );
    }
}

export default VotingIndex;
