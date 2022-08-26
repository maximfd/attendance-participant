import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './Auth.css';

class Auth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signin: true
      };
      
    }

    updateData = (value) => {
        this.setState({ signin: value })
    }

    

    render() {
        return(
            <div className="auth-card">
                {(this.state.signin) ?
                <SignIn updateData={this.updateData}/>
                : <SignUp updateData={this.updateData}/>
                }                         
            </div>
        );
    }
}

export default Auth;