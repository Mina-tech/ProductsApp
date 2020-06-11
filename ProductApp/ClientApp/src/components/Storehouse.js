import React, { Component } from 'react';
import './Invoices.css';

export class Storehouse extends Component {
    static displayName = Storehouse.name;

    constructor(props) {
        super(props);
        this.state = {
            products: [], loading: true
        };
    }

   

    componentDidMount() {
       this.GetProducts();
    }

    static renderProductsTable(products) {
        return (
            <div className="invoice">
                <input type="search"   name = "searchField"/>
                
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        
                        <th>Interna šifra</th>
                        <th>Naziv proizvoda</th>
                        <th>Cena</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.productId}>
                            <td>{product.sku}</td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        );
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Storehouse.renderProductsTable(this.state.products);
        return (<div>
            <h4 id="tabelLabel" >Tabela proizvoda</h4>
            {contents}
        </div>
        );
    }

    async GetProducts() {
        const response = await fetch('/Home/GetAllProducts');
        console.log(response);
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}