import React, { Component } from 'react';
import { getImageApi } from '../services/images.js';
import '../components/home.css'
import  Header  from '../components/header.js'
import Body from '../components/body.js'




class Home extends Component{

    constructor(props){
        super()
        this.state ={
            images : [],
            imagesFilter : [],
            page : 2

        }
    }

    componentDidMount(){
        this.getImages(2);
    }

    onChangeSearch =(e)=>{        
        const str = e.target.value
        const imageFilter = this.state.images.filter(res=>res.title.toLowerCase().includes(str.toLowerCase()));
        if(str.length>0){
            this.setState({imagesFilter : imageFilter})
        }else{
            this.setState({imagesFilter : this.state.images})
        }
    }

    getImages = (val)=>{
        getImageApi().then(res=>{
            //sending number of items for showing them
            const images = res.data.filter((res,index)=>index<val);
            this.setState({
                images : images,
                imagesFilter : images
            });             
        })
        
    }

    loadMore = ()=>{
        this.getImages(this.state.page)
        this.setState(prevState=>{
            return {page : prevState.page+2}
        }, this.getImages(this.state.page))
       
    }

    render(){
        const  imagesFilter  = this.state.imagesFilter;
        return(
            //--header
            <div className = "container">
                <div className="header">
            <div className="header-container">
                <div className="logo">
                    <img src ="assets/logo.png"/>
                </div>
            </div>
            <div className="header-container">
                <div className="search">
                    <input type ="search" onChange={this.onChangeSearch}   placeholder="You're looking for something?"/>
                </div>
            </div>                
        </div>  
              
                <div className="body">
                    <div className="body-container">
                {
                    imagesFilter.map((res,id)=>{                        
                        return <Body item={res} key={id} />
                    })
                }
                    </div>
                </div>
                <div><a class="loadmore" onClick={this.loadMore}>Load more</a></div>
        </div>
        )}
}

export default Home