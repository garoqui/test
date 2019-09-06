import React from 'react'
import '../components/header.css'



const Header=()=>{
    
    return(
        <div className="header">
            <div className="header-container">
                <div className="logo">
                    <img src ="assets/logo.png"/>
                </div>
            </div>
            <div className="header-container">
                <div className="search">
                    <input type ="search"   placeholder="You're looking for something?"/>
                </div>
            </div>                
        </div>
        
        )}
    
 

export default Header