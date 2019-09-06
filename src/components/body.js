import React from 'react'
import '../components/body.css'

const fillZero=(val)=>{
    const strLen = val.length
    if(strLen==1){
        return "00" + val
    }

    if(strLen==2){
        return "0" + val
    }

    if(strLen==3){
        return "0" + val
    }
    
}



const Body =(props)=>{
    let strLikes = fillZero(props.item.likes_count.toString())
    let strShares = fillZero(props.item.share_count.toString())
    return(       
                <div className="body-row">
                    <div className="body-card">
                        <div className="body-card-container">
                            <div className="body-card-image">                                
                                <img src={ props.item.main_attachment.big}/>   
                            </div>

                            <div className="body-card-badges">
                                    <div className="body-card-badges-price">
                                        <div id="triangle">
                                            <div className="triangle-price">{props.item.price}</div>
                                        </div>                                    
                                    </div>                                    
                            </div>

                            <div className = "body-card-title">
                                <h3>{props.item.title}</h3>                                
                            </div>

                            <div className = "body-card-title">
                                <p><span>by </span>{props.item.author}</p>                                
                            </div>  

                            <div className="badgets-icons">
                                <div className="badgets-icons-like">
                                            {
                                               props.item.liked ?  <img src='assets/like.png'/> : false
                                               
                                            } 

                                            {
                                                props.item.liked ?  <span>{strLikes}</span> : false      
                                            }                                                                         
                                 </div>  

                                 <div className="badgets-icons-share">
                                            {
                                               props.item.shared ?  <img src='assets/share.png'/> : false
                                               
                                            } 

                                            {
                                                props.item.shared ?  <span>{strShares}</span> : false      
                                            }                                                                         
                                 </div>          
                            </div>
                        </div>                        
                    </div>                   
                </div>          
           
    )
}

export default Body