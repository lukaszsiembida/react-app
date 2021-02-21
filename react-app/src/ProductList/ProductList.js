import React from "react";
import axios from "axios";
import {Table, Button} from "reactstrap";
import './ProductList.css';
import {withRouter} from "react-router";
import PropTypes from "prop-types";

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.renderRows = this.renderRows.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    async getProducts() {
        const response = axios.get('http://localhost:8080/products/');
        this.setState({
                products: response.data
            }
        )
    }

    componentDidMount() {
        this.getProducts();
    }

    async handleOnDelete(event) {
        const id = event.target.getAttribute('selectedid');
        try {
            const response = await axios.delete('http://localhost:8080/products/' + id);
            this.getProducts();
            this.props.handleOnDelete({
                message: `Produkt o id ${id} został pomyślnie usunięty`,
                isError: false

            })
            console.info(response);

        } catch (error) {
            this.props.onDelete({
                message: `Produkt nie został usunięty ${error}`,
                isError: true
            })
            console.error(error)
        }
    }

    handleAdd() {
        this.props.history.push('/products/add');
    }

    handleOnEdit(event) {
        const id = event.target.getAttribute('selectedid');
        this.props.history.push('/products/' + id);
    }

    renderRows() {
        return (this.state.products.map(element => {
            return (
                <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td>{element.priceNetto}</td>
                    <td>{element.vat}</td>
                    <td>
                        <Button color={'info'} selectedid={element.id} onClick={this.handleOnEdit}>Edycja</Button>
                        <span>&nbsp;&nbsp;</span>
                        <Button color={'danger'} selectedid={element.id} onClick={this.handleOnDelete}>Usuń</Button>
                    </td>
                </tr>
            );
        }));
    }

    render() {
        return (
            <div>
                <Button className={'add-product-button'} color={'success'} onClick={this.handleAdd}>Dodaj
                    produkt</Button>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Cena</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired
}

export default withRouter(ProductList);