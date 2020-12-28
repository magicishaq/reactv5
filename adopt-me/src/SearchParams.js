import React, {useState} from 'react';
import {ANIMALS} from '@frontendmasters/pet';  
import useDropdown from './useDropdown'; 

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([]); //each animal will have a breed, must be pushed to the array
    const [animal, AnimalDropdown] = useDropdown("Animal" , "Dog", ANIMALS); 
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds); 
    return (
        <div className="search-params" >
            <form action="">
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
        </div>
    )
}

export default SearchParams; 