//passes in te props object
const Pet = ({ name, animal, breed }) => {
  return React.createElement(
    "div",
    {
      id: "pet",
    },
    [
      React.createElement("h1", {}, name),
      React.createElement("h2", {}, animal),
      React.createElement("h2", {}, breed),
    ]
  );
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
