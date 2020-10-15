import React, { Component, forwardRef } from "react";

const withCounter = (WrappedComponent, intialCounter) => {

    class WithCounter extends Component {
        state = {
            counter: intialCounter
        }
        increaseCounter = () => {
            this.setState(ps => {
                return {
                    counter: ps.counter + 1
                }
            })
        }
        render() {

            // if (this.props.name)
            //     console.log(this.props.name)

            // if (this.props.data)
            //     console.log(this.props.data)
            return (
                //forwardRef((props, ref) => <WrappedComponent {...props} ref={ref} />)
                <WrappedComponent
                    {...this.props}
                    counter={this.state.counter}
                    changeCounter={this.increaseCounter} />
            )
        }
    }
    return WithCounter;
}
export default withCounter;