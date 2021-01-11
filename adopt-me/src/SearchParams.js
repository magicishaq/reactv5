import React, {useState, useEffect, useContext} from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';  
import useDropdown from './useDropdown'; 
import Results from './Results'; 
import ThemeContext from './ThemeContext'; 

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([]); //each animal will have a breed, must be pushed to the array
    const [animal, AnimalDropdown] = useDropdown("Animal" , "dog", ANIMALS); 
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds); 
    const [pets, setPets] = useState([]); 
    const [theme, setTheme] = useContext(ThemeContext); 

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
                <label htmlFor="theme" >
                    Theme
                    <select value={theme}
                    onChange ={e => setTheme(e.target.value)}
                    onBlur = {e=> setTheme(e.target.value)}
                    >
<option value="peru">Peru</option> 
<option value="red"> Red </option>
<option value="pink"> Pink</option>
<option value="green"> Green </option>  


                    </select>
                </label>

                <button style={{backgroundColor: theme}}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams; 