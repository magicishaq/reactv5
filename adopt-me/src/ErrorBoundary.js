import React, {Component} from 'react'
import {Link, Redirect, navigate} from '@reach/router'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            hasError: false,
            redirect: false
        }
    }
    static getDerivedStateFromError () {
        return {hasError: true}
    }
    //will run every time the render is updated
    //componentWillUpdate will still work
    componentDidUpdate () {
        if(this.state.hasError){
            setTimeout(() => this.setState({redirect: true}), 5000)
            //naviagate('./')
            //setTimeout(() => navigate("/"), 5000)
        }
    }
    componentDidCatch (error,info) {
        console.error('Error Boundary caught an error', error, info)
    }

    render () {
        if(this.state.redirect) {
            return (<Redirect to="/" /> )
        }
        if(this.state.hasError){
        return (
        
            <h1> An error occured, <Link to="./"> Go to homepage </Link> or wait 5 seconds </h1> 
        )
        }else{
            return this.props.children; 
        }
    }
}

export default ErrorBoundary; 