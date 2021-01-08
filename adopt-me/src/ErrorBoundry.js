import React, {Component} from 'react'
import {Link} from '@reach/router'

class ErrorBoundary extends Component {
    constructor() {
        super(props) 

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError () {
        return {hasError: true}
    }
    componentDidCatch (error,info) {
        console.error('Error Boundary caught an error', error, info)
    }

    render () {
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