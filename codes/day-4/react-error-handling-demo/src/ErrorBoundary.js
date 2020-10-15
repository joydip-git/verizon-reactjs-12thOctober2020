import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        errorMessage: ''
    }

    static getDerivedStateFromError(error) {
        console.log('[EB] getDerivedStateFromError caught error and set state')
        return {
            errorMessage: error
        }
    }
    componentDidCatch(error, info) {
        console.log('[EB] Component caught error now')
        // this.setState({
        //     errorMessage: error
        // })        
        console.log(error)
        console.log(info)
    }
    render() {
        console.log('[EB] rendered')
        if (this.state.errorMessage !== '')
            return <span>Error Occurred</span>
        else
            return this.props.children;
    }
}