import React, { Component } from 'react';
import './SignIn.css';
import * as firebase from 'firebase';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      userName: '',
      email: '',
      password: '',
      signin: false
    };
    this.changeOption = this.changeOption.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    // .then((u)=>{console.log(u)})
    .then(
      (userCredentials)=>{
        if(userCredentials.user){
          userCredentials.user.updateProfile({
             displayName: this.state.userName
          })
        }
    })
    
    .catch((error) => {
        console.log(error);
    })
    console.log(this.state.userName)
  }

  changeOption() {
    this.props.updateData(!this.state.signin);
  }

  render() {
    return (
       <div className="loginForm-mob">

          <div className="card-title-mob">
            <h1 className="reg-header"><span>p</span>егистрация</h1>
          </div>
          <div className="card-content-mob">
            <form className="form-mob">
            <input 
                value={this.state.userName}  
                onChange={this.handleChange} 
                type="text" 
                name="userName" 
                className="field-mob" 
                id="firstnameField" 
                placeholder="Фамилия Имя" 
                title="firstname"
                required
              /> 
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
               
              
                
                <button onClick={this.signup} className="btnLogin-mob">Зарегистрироваться</button>
                <div className="hr-mob"></div>
                <button 
                  onClick={() => {  
                    this.changeOption() 
                  }}
                  className="btnOption-mob"
                >Вход</button>
                
            </form>
          </div>
        </div>
    );
  }
}
export default Signup;