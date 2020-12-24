//passes in te props object
import React from 'react'; 
import {render} from 'react-dom'; 
import  Pet  from './Pet';
const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      {
        id: "ishaq",
      },
      "Adopt Me"
    ),
    React.createElement(Pet, {
      name: "Paz",
      animal: "Dog",
      breed: "Malamute",
    }),
    React.createElement(Pet, {
      name: "Mylow",
      animal: "Dog",
      breed: "Jack russel",
    }),
    React.createElement(Pet, {
      name: "DeeDee",
      animal: "Dog",
      breed: "Staffy",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
