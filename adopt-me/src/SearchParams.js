import React, {useState, useEffect} from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';  
import useDropdown from './useDropdown'; 
import Results from './Results'; 

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([]); //each animal will have a breed, must be pushed to the array
    const [animal, AnimalDropdown] = useDropdown("Animal" , "dog", ANIMALS); 
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds); 
    const [pets, setPets] = useState([]); 

    async function requestPets ()  {
        const {animals} = await pet.animals({
            location,
            breed, 
            type: animal
        })    
    setPets(animals || []) // or operator
    
    }
    useEffect(() => {
        setBreeds([]); 
        setBreed(" "); 
        pet.breeds(animal).then(({breeds}) => {
            const breedStrings = breeds.map(({ name }) => name); 
            console.log(breedStrings)
            setBreeds(breedStrings); 
        }, console.error); 
    }, [animal, setBreed, setBreeds]) //any of these things change, re-run the use effect
    return (
        <div className="search-params" >
            <form onSubmit ={(e) => {
                e.preventDefault(); 
                requestPets(); 
            }}   action="">
                <label htmlFor="location">
                    <h1>{location}</h1>
                    <input
  id="location"
  value={location}
  placeholder="Location"
  onChange={e => setLocation(e.target.value)}
/>
                </label>
                <AnimalDropdown />
                <BreedDropdown />

                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams; 