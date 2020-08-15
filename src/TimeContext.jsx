import React from 'react';
import { createContext } from 'react';

export const  TimeProvider=createContext();


export class Time extends  React.Component
{
    constructor(props){
        super(props);
        this.state={
            hour_hand:0,min_hand:0,sec_hand:0
        }
         this.updateTime=this.updateTime.bind(this);
     }

     updateTime()
     {
         const d=new Date();
         let hour=d.getHours();
         if(hour>12)
         {
             hour=hour-12;
         }

         this.setState({
         hour_hand:hour,
         min_hand:d.getMinutes(),
         sec_hand:d.getSeconds() 
         });
     }

     componentDidMount()
     {
        setInterval(()=>{
        this.updateTime();
        },1000);
     }

     render(){
         return(
             <TimeProvider.Provider value={this.state}>
                 {this.props.children}
             </TimeProvider.Provider>
         )
     }
}