import './App.css';
import React, { Component } from 'react';
import Person from './Components/Person';


export default class App extends Component {
  
  state={
    profil:{
      fullName:"anwer",
      lastName:"abdellaoui",
      bio:"hello i'm a student in gomycode",
      imgSrc:"./anouer.jpg"
    },
    showPerson:false,
    timer:0
  }
  
  show=() =>{
    this.setState({showPerson:!this.state.showPerson})
    this.setState({timer:0})
   
  }
  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
 
  render() {
    return (
      
      <div className='App'>
        {
          this.state.showPerson && <div>
            <Person fullName={this.state.profil.fullName} lastName={this.state.profil.lastName} bio={this.state.profil.bio} imgSrc={this.state.profil.imgSrc}/>
            <h1>{this.state.timer}</h1>
          </div>
        }     
      
      <button onClick={this.show} className="btn">Show</button>

      </div>
      
    )
  }
}
