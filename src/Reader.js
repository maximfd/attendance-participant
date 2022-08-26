import React from 'react';
import QrReader from 'react-qr-reader';
import * as firebase from 'firebase';
import successImg from './success.svg';
import './Reader.css';

class Reader extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          result: 'no result',
          rightCode: 'none'
        }
        
    }

    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
    }
    
    handleError = err => {
      console.error(err)
    }

    componentDidMount() {
      const itemsRef = firebase.database().ref('code/confirmCode');
      itemsRef.on('value', (snapshot) => {
        const test = snapshot.val();
        this.setState({
              rightCode: test
            });
      });
    }

    postStudent() {
      const codeRef = firebase.database().ref('students');
      const student = {
        name: this.props.student.displayName,
        email: this.props.student.email
      }
      codeRef.push(student);
    }

    render() {
      if (this.state.result === this.state.rightCode) {
        this.postStudent();
        return <div className='success'>
                  <img className='successImg' src={successImg} alt='' />
                  <div className='successText'>Вы успешно отметились</div>
                </div>;
      }
      return (
        <QrReader
          className='qrReader'
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '95%' }}
        />                             
      );
    }
}
export default Reader;