// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component{
    state={isSub:false}
    onSubscribe=()=>{
        this.setState(prevState=>({isSub:!prevState.isSub}))
    }
    getButtonText(){
        const {isSub} = this.state
        return isSub?'Subscribed':'Subscribe'
    }
    render(){
        const buttonText=this.getButtonText()
        return(
            <div className='app-container'>
                <h1 className='heading'>Welcome</h1>
                <p className='description'>Happy learning</p>
                <button className='subscribe-button' onClick={this.onSubscribe}>{buttonText}</button>
            </div>
        )
    }
}
export default Welcome