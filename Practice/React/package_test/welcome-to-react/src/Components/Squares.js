import React,{Component} from 'react';
import './squares.css'
import { MDBBtn } from "mdbreact";
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
   render()
    {  
        const {num}=this.props;
       return  <MDBBtn color={num =="X"?"success":"warning"} onClick={this.clickHandle}>{num}</MDBBtn>                 
    //   return <button className="square" onClick={this.clickHandle}>{this.props.num}</button>
    
   }
}