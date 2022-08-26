import React, { Component } from 'react';
import './SignIn.css';
import * as firebase from 'firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      signin: true
    };
    this.changeOption = this.changeOption.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  changeOption() {
    this.props.updateData(!this.state.signin);
  }

  render() {
    return (
       <div className="loginForm-mob">

          <div className="card-title-mob">
            <h1 className="here-header"><span >я</span>здесь</h1>
          </div>
          <div className="card-content-mob">
            <form className="form-mob">
              <input 
                value={this.state.email} 
                onChange={this.handleChange} 
                type="email" 
                name="email" 
                className="field-mob" 
                id="emailField" 
                placeholder="Email" 
                title="email"
                required
              />                    
              <input 
                  value={this.state.password} 
                  onChange={this.handleChange} 
                  type="password" 
                  name="password"
                  className="field-mob" 
                  id="passwordField" 
                  placeholder="Пароль"
                  title="password"
                  required
              />
               
              
                <button type="submit" onClick={this.login} className="btnLogin-mob">Войти</button>
                <div className="hr-mob"></div>
                <button 
                  onClick={() => {  
                    this.changeOption() 
                  }}
                  className="btnOption-mob"
                >Регистрация</button>
            </form>
          </div>
        </div>
    );
  }
}
export default SignIn;