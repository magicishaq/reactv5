 //code goes here
const Pet = () => {
    return React.createElement('div', {id: 'pet'},[
        React.createElement('h1', {} , 'Paz'), 
        React.createElement('h2', {} , 'Mylow'), 
        React.createElement('h2', {} , 'DeeDee')
    ])
}

 const App = () => {
    return React.createElement('div', {}, React.createElement('h1', {id: 'ishaq'}, 'Adopt Me')) 

}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
