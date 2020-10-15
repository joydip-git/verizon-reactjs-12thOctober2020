import React, { Component } from 'react';

const withError = (WrappedComponent) => {
    class WithError extends Component {
        state = {
            errorMessage: ''
        }

        static getDerivedStateFromError(error) {
            console.log('[WithError] getDerivedStateFromError caught error and set state')
            return {
                errorMessage: error
            }
        }
        componentDidCatch(error, info) {
            console.log('[WithError] Component caught error now')
            // this.setState({
            //     errorMessage: error
            // })        
            console.log(error)
            console.log(info)
        }
        render() {
            console.log('[WithError] rendered')
            if (this.state.errorMessage !== '')
                return <span>Error Occurred</span>
            else
                return <WrappedComponent {...this.props} />;
        }
    }
    return WithError;
}
export default withError;