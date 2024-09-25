import React,{Component} from 'react'
import './index.css'

class Speedometer extends Component{
    state={speed:0}
    onAcclerate=()=>{
        const {speed}=this.state
        if(speed<200){
            this.setState(prevState=>({speed:prevState.speed+10}))
        }
    }
    onApplyBrake=()=>{
        const {speed}=this.state
        if(speed>0){
            this.setState(prevState=>({speed:prevState.speed-10}))
        }
    }
    render(){
        const {speed} = this.state
        return(
            <div>
                <h1>Speedometer</h1>
                <img alt="img" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"/>
                <h1>Speed is {speed} mph</h1>
                <p>Min limit is 0 mph and max limit is 200mph</p>
                <div>
                    <button onClick={this.onAcclerate}>Acclerate</button>
                    <button onClick={this.onApplyBrake}>Apply brake</button>
                </div>
            </div>
        )
    }
}
export default Speedometer