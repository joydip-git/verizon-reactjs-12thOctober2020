import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        counter: 0
    }
    increaseCounter = () => {
        this.setState(ps => {
            return {
                counter: ps.counter + 1
            }
        })
    }
    render() {
        return this.props.render(this.state.counter, this.increaseCounter);
    }
}