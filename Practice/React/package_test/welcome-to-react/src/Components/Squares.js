import React,{Component} from 'react';
import './squares.css'

export default class Squares extends Component {
constructor(props){
    super(props);
    this.state={
        value:null
    }
}

clickHandle=()=>{      
    this.props.childClick();
}
   render() {                   
       return <button className="square" onClick={this.clickHandle}>{this.props.num}</button>
    
   }
}