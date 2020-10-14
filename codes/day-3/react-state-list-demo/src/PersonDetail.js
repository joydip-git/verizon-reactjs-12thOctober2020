import React, { Component, PureComponent } from 'react'
import { people } from './peopleModel'

/*{ pid:1}
*/
export default class PersonDetail extends PureComponent {
    constructor() {
        super()
        console.log('[PD] created')
        this.state = {
            person: null,
            message: ''
        }
        //this.props.pid=1;
        //this.state.person = null;
    }
    static getDerivedStateFromProps(newProps, lastState) {
        return null;
    }
    // static getDerivedStateFromError(error){

    // }
    // shouldComponentUpdate(newProps, newState) {
    //     console.log(this.props.pid)
    //     console.log(newProps.pid)
    //     console.log(newProps)
    //     console.log(this.state.person)
    //     console.log(newState)
    //     console.log('[PD] should component update')
    //     if (this.state.person === null | this.props.pid !== newProps.pid) {
    //         return true;
    //     }
    //     return false;
    // }
    render() {
        console.log('[PD] rendered')
        console.log(this.props.pid)
        let design = null;
        if (this.state.person === null) {
            design = <span>loading....</span>;
        } else if (this.state.message !== '') {
            design = <span>{this.state.message}</span>
        } else {
            design = (
                <div>
                    Name:&nbsp;
                    <span>{this.state.person.name}</span>
                    <br />
                    Age:&nbsp;
                    <span>{this.state.person.age}</span>
                </div>
            )
        }
        return design;
    }
    getSnapshotBeforeUpdate(oldProps, oldState) {
        console.log('[PD] getSnapshotBeforeUpdate')
        return 200;
    }
    componentDidUpdate(oldProps, oldState,snapshot) {
        // console.log(oldProps)
        // console.log(this.props)

        console.log(snapshot)
        console.log('[PD] componentDidUpdate')
        if (this.state.person === null | this.props.pid != oldProps.pid)
            this.fetchData()
    }
    componentDidMount() {
        // setTimeout(() => {
        //     people.find()
        // }, 1000);
        this.fetchData()
        console.log('[PD] mounted')
    }
    fetchData = () => {
        let found = people.find(p => p.id === this.props.pid);
        if (found !== null) {
            this.setState({
                person: found
            }, () => console.log(this.state.person))
        } else {
            this.setState({
                message: 'product not found'
            })
        }
    }
    //componentWillMount
    //componentWillReceiveProps
    //componentWillUpdate
    componentWillUnmount() {
        console.log('[PD] dismounted')
    }
    // componentDidCatch(){

    // }
}