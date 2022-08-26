import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Reader from './Reader';
import defaultImg from './camera.svg';
import * as firebase from 'firebase';
import Auth from './Auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showPopup: false,
      user: null
    };
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  

  render() {
    return (
      <div >
        {this.state.user ?
        <div className='scanner'>
        <Navbar logout={this.logout}/>
          {this.state.showPopup ?  
            <Reader student={this.state.user} />
            : <div className='placeHolder'>
                <img className='defaultImg' src={defaultImg} alt='' />
                <div className='defaultText'>Нажмите на кнопку и отсканируйте qr-код</div>
              </div>  
          }  
          
          <button
            className='btnShow'
            onClick={this.togglePopup.bind(this)}
          >Отметиться
          </button> 
          </div>
          : (<Auth />)}       
      </div>
    );
  }
}

export default App;
