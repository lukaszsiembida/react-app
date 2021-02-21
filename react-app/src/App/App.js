import './App.css';
import React from 'react';
// import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList"
import {BrowserRouter, Link, Route} from "react-router-dom";
import Route from "react-router-dom/Route";
import AddProduct from "../AddProduct/AddProduct";

class App extends React.Component {
    render() {
        return (
            // <div> Hello {this.props.name + ' ' + this.props.surname}!</div>
            // <div><ProductList/></div>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to={'/'}>Strona główna</Link>
                        </li>
                        <li>
                            <Link to={'/products'}>Produkty</Link>
                        </li>
                    </ul>
                    <Route exact path={'/products'} component={ProductList}/>
                    <Route exact path={'/products/add'} component={AddProduct}/>
                    <Route path={'/products/:productId'} component={AddProduct}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

