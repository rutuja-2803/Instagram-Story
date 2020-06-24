import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Stories from 'react-insta-stories';

class App extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      Hastrue: 'false',
      Hastrue1: 'false',
      Hastrue2: 'false',
      Hastrue3: 'false'
    }
  }
  clickHandler = () => {
    this.setState({
      Hastrue: 'true',
      Hastrue1: 'false',
      Hastrue2: 'false',
      Hastrue3: 'false'

        })
  }
  clickHandler1 = () => {
    this.setState({
      Hastrue1: 'true',
      Hastrue2: 'false',
      Hastrue3: 'false',
      Hastrue: 'false'

    })
  }
  clickHandler2 = () => {
    this.setState({
      Hastrue2: 'true',
      Hastrue3: 'false',
      Hastrue1: 'false',
      Hastrue: 'false'

    })
  }
  clickHandler3 = () => {
    this.setState({
      Hastrue3: 'true',
      Hastrue2: 'false',
      Hastrue1: 'false',
      Hastrue: 'false'

    })
  }

  
  render() {
    let h=''
    let i=''
    let j=''
    let k=''
    if (this.state.Hastrue === 'true'){
      h = <div class="edit"><img src={process.env.PUBLIC_URL + "/img5.jpg"}  width = "250px" height = "300px"/> </div>
    }
    if (this.state.Hastrue1 === 'true'){
       i = <div class="edit"><img src={process.env.PUBLIC_URL + "/img6.jpeg"}  width = "250px" height = "300px"/> </div>
    }
    if (this.state.Hastrue2 === 'true'){
     j = <div class="edit"><img src={process.env.PUBLIC_URL + "/img7.jpeg"}  width = "250px" height = "300px"/> </div>
    }
    if (this.state.Hastrue3 === 'true'){
       k = <div class="edit"><img src={process.env.PUBLIC_URL + "/img8.jpeg"}  width = "250px" height = "300px"/> </div>
    }
    return (
 <div>
    <div className="content-details">
        <div className="imagebox">&nbsp;&nbsp;
      <a href="#" onClick = {this.clickHandler}> <img src={process.env.PUBLIC_URL + "/img1.jpg"} onTimeUpdate="300" className="rounded"  alt = "pic" width = "100px" height = "100px"/></a>&nbsp;&nbsp;
        <a href="#" onClick = {this.clickHandler1}> <img src={process.env.PUBLIC_URL + "/img2.jpeg"} className="rounded" alt = "pic" width = "100px" height = "100px"/></a>&nbsp;&nbsp;
        <a href="#" onClick = {this.clickHandler2}> <img src={process.env.PUBLIC_URL + "/img3.jpeg"} className="rounded" alt = "pic" width = "100px" height = "100px"/></a>&nbsp;&nbsp;
        <a href="#" onClick = {this.clickHandler3}> <img src={process.env.PUBLIC_URL + "/img4.jpeg"} className="rounded" alt = "pic" width = "100px" height = "100px"/></a>&nbsp;&nbsp;
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="user-1">rutuja_2803</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="user-2">pratik08_</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="user-3">pratii_s05</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="user-4">nilu_2710</span>
        </div>
    </div>
     <div>{h}</div>
     <div>{i}</div>
     <div>{j}</div>
     <div>{k}</div>
  </div>
    );
  }   
}
export default App;