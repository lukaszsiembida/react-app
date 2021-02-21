import './App.css';
import React from 'react';
// import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList"
import {BrowserRouter, Link, Route} from "react-router-dom";
import Route from "react-router-dom/Route";
import Product from "../Product/Product";
import Message from "../Message/Message";

class App extends React.Component {

    initialState = {
        message: {
            isError: null,
            visible: false,
            content: null,
        }
    }

    constructor(props) {
        super(props);

        this.state = {...this.initialState} // kopiowanie pól initialState

        this.onProductSaveOrUpdate = this.onProductSaveOrUpdate.bind(this);
    }

    onProductSaveOrUpdate(data) {
        this.setState({
            message: {
                isError: data.isError,
                visible: true,
                content: data.message,
            }
        })
        console.log(data);
    }

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
                    <Message
                        color={this.state.message.isError === true ? 'danger' : 'success'}
                        visible={this.state.message.visible}
                        onDismiss={() => this.setState({
                            ...this.initialState
                        })}
                        content={this.state.message.content}
                        />
                    <Route exact path={'/products'} component={ProductList}/>
                    <Route exact
                           path={['/products/add', '/products/:productId']}
                           render={
                               () => <Product onSave={this.onProductSaveOrUpdate}/>
                           }/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

