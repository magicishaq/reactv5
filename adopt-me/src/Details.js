import React from 'react'
import pet from '@frontendmasters/pet'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import ThemeContext from './ThemeContext'
class Details extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            loading: true
        }


    }

 
    //cant use hooks with classes
    componentDidMount (){
        //throw new Error('lol')
        // will show the errorBoundary component
        pet.animal(this.props.id)
        .then( ({animal})=> {
                this.setState(
                    {
                        name: animal.name, 
                        animal: animal.type, 
                        location: `${animal.contact.address.city} - ${animal.contact.address.state}`, 
                        descripton: animal.description, 
                        media: animal.photos,
                        breed: animal.breeds.primary, 
                        loading: false

                    }
                )
        }, console.error)
    }
    render () {
        if(this.state.loading){
            return (<h1>loading </h1>)
        }else{
            const {animal, breed, location, description, name, media } = this.state; 

            return (<div className="details">
                <Carousel media={media} /> 
                <div>
                    <h1> {name} </h1>
                    <h2> {`${animal} - ${breed} - ${location} `}</h2>
                    <ThemeContext.Consumer>
                        {(themeHook) => (
                    <button style={{backgroundColor: themeHook[0]}}> Adopt {name} </button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    <img src={this.state.media[0].large} alt={name} ></img> 
                    </div> 
                </div> )
        }

    }
}

export default function ErrorBoundaryFromDetails (props) {
    return (
        <ErrorBoundary>
            <Details {...props} /> 
        </ErrorBoundary>
    )
}