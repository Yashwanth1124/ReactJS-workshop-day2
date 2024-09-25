import React, { Component } from 'react'
import './index.css'

class EvenOddApp extends Component {
    state={count:0}
    onIncrement=()=>{
        this.setState(prevState=>({
            count:prevState.count+Math.floor(Math.random()*100)
        }))
    }
    render() {
        const {count} = this.state
        let evenOdd
        if(count%2===0){
            evenOdd='Even'
        }else{
            evenOdd='Odd'
        }
        return (
            <div>
                <h1>count {count}</h1>
                <p>Count is {evenOdd}</p>
                <div>
                    <button className="knob" type="button" onClick={this.onIncrement}>
                        Increment
                    </button>
                </div>
                <p className="instruction">
                    *Increase By Random Number Between 0 to 100
                </p>
            </div>
        )
    }
}
export default EvenOddApp