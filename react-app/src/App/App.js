import './App.css';
import React from 'react';
import AddProduct from "../AddProduct/AddProduct";

class App extends React.Component {
    render() {
        return (
            // <div> Hello {this.props.name + ' ' + this.props.surname}!</div>
            <div><AddProduct/></div>
        );
    }
}

export default App;

