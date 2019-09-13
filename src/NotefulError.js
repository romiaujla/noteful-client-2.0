import React, { Component } from 'react';

export default class NotefulError extends Component {

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error){
        console.log(error);
        return { hasError: true };
    }

    render(){
        if(this.state.hasError){
            return (
                <div className='main-error'>
                    Something, went wrong !! <br />
                    We are currently fixing the issue and should be up and running shortly !
                </div>
            )
        }
        return this.props.children;
    }
}