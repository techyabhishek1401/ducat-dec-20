import React, { Component } from 'react'
import Squares from '../Components/Squares'
export default  class CodeReUse extends Component{         
           
    state={
        squares:Array(9).fill(null),
        isXNext:false
    }
    findWinner=()=>{          
     const {squares}=this.state;
     let winner;
     let square_arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
     for(let i=0;i<square_arr.length;i++){
          let [a,b,c]=square_arr[i];
          if(squares[a] && squares[b] && squares[c])
          if(squares[a]==squares[b] && squares[b]==squares[c] && squares[a]==squares[c] ){
                winner=squares[a]
              alert(`${winner} is a winner`)
          }
     }
 
 }
   
     parentClickHandle=(index,event)=>{       
         console.log("index:",index)                 
             let squares_copy=this.state.squares;
             squares_copy[index]=this.state.isXNext?"O":"X";
             this.setState({squares:squares_copy,isXNext:!this.state.isXNext});
             setTimeout(()=>{
                this.findWinner();
             },30)
     }



      render(){
         
          const {squares}=this.state;

        return <div>
                 <h1>Code Reuse</h1>
                 
                 <table className="center-table">
                     <tbody>                               
                         <tr>
                        <td><Squares num={squares[0]} childClick={this.parentClickHandle.bind(this,0)}/> </td>    
                        <td><Squares num={squares[1]} childClick={this.parentClickHandle.bind(this,1)}/> </td>    
                        <td><Squares num={squares[2]} childClick={this.parentClickHandle.bind(this,2)}/> </td>      
                     </tr>
                     <tr>
                         <td><Squares num={squares[3]} childClick={this.parentClickHandle.bind(this,3)}/> </td>      
                         <td><Squares num={squares[4]} childClick={this.parentClickHandle.bind(this,4)}/> </td>      
                         <td><Squares num={squares[5]} childClick={this.parentClickHandle.bind(this,5)}/> </td>      
                     </tr>
                     <tr>
                         <td><Squares num={squares[6]} childClick={this.parentClickHandle.bind(this,6)}/> </td>      
                         <td><Squares num={squares[7]} childClick={this.parentClickHandle.bind(this,7)}/> </td>      
                         <td><Squares num={squares[8]} childClick={this.parentClickHandle.bind(this,8)}/> </td>    
                     </tr>   
                      </tbody>
                 </table>   
               
               </div>
      }
 }
