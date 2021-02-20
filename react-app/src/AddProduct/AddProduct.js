import React from "react";
import VAT from "../Constants";
import axios from 'axios';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            priceNetto: 0,
            vat: 'VAT_8',
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.renderVat = this.renderVat(this);
    }

    async handleOnSubmit(event) {
        // console.log("Submit button pressed");
        event.preventDefault();
        try{
            const savedProduct = await axios.post('http://localhost:8080/products', {...this.state});
            alert('saved product' + savedProduct.data);
            console.info('saved product: ', savedProduct.data);
        } catch (error ) {console.error(error)};
    }

    handleOnChange(event) {
        // const newState = {};
        // newState[event.target.name] = event.target.value;
        // this.setState(newState);s
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    renderVat() {
        let options = [];
        for (let element of VAT) {
            options.push(
                <option value={element.name}>
                    {element.value}
                </option>
            )
        }
        return (
            <label>VAT:
                <select name={'vat'} value={this.state.vat} onChange={this.handleOnChange}>
                    {option}
                </select>
            </label>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Nazwa:
                        <input name={'name'} value={this.state.name} onChange={this.handleOnChange}/>
                    </label>
                    <label>Opis:
                        <input name={'description'} value={this.state.description} onChange={this.handleOnChange}/>
                    </label>
                    <label>Cena:
                        <input name={'priceNetto'} value={this.state.priceNetto} onChange={this.handleOnChange}/>
                    </label>
                    <label>VAT:
                        <select name={'vat'} value={this.state.vat} onChange={this.handleOnChange}>
                            <option>

                            </option>
                            <option>

                            </option>
                        </select>
                    </label>
                    <input type='submit' value='Dodaj'/>
                </form>
            </div>
        );
    }
}

export default AddProduct;