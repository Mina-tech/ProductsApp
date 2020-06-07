﻿import React, { Component } from 'react';
import './Invoices.css';

export class InvoiceProduct extends Component {
    static displayName = InvoiceProduct.name;

    constructor(props) {
        super(props);
        this.state = {
            invoiceProduct: [],
            sku: '',
            productName: '',
            distributorName: '',
            qty: Number,
            discount: Number,
            grossPrice: Number
        }
      
    }

    

    handleChange = (e) => {
        let val = e.target.value
        if (e.target.name == 'qty' || e.target.name == 'discount' || e.target.name == 'grossPrice') {
            val = parseInt(e.target.value);
        }
        console.log(typeof val);
        this.setState({
            [e.target.name]: val
        });

    }
    
    handleSubmit=(e)=> {
        e.preventDefault();
        const invoiceProduct = {
            Sku: this.state.sku,
            ProductName: this.state.productName,
            DistributorName: this.state.distributorName,
            Qty: this.state.qty,
            GrossPrice: this.state.grossPrice,
            Discount: this.state.discount
        };
        console.log(invoiceProduct);
       fetch('/Home/InsertInvoiceProduct', {
            method: 'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(invoiceProduct)
           
       })
        .then(res => {
            console.log(res);
          
       })
       .catch(err => console.log("api Erorr: ", err));

       
         
    }

    componentDidMount() {
        this.GetInvoiceProduct();
    }

    static getInvoiceProduct(invoiceProducts, sku, productName, distributorName, qty, grossPrice, discount, handleChange) {
        return (
            <div className="container">
                <ul className="invoice">
                    <li>
                        <input list="productName" placeholder="Naziv artikla" name="productName" value={productName} onChange={handleChange.bind(this)} />
                        <datalist id="productName">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.productName}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="distributorName" placeholder="Naziv dobavljača" name="distributorName" value={distributorName} onChange={handleChange.bind(this)} />
                        <datalist id="distributorName">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.distributorName}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="sku" placeholder="Interna šifra" name="sku" value={sku} onChange={handleChange.bind(this)} />
                        <datalist id="sku">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.sku}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="distributorId" placeholder="Interna šifra dobavljača" />
                        <datalist id="distributorId">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.distributorId}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="qty" placeholder="Količina" name="qty" value={qty} onChange={handleChange.bind(this)} />
                        <datalist id="qty">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.qty}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="grossPrice" placeholder="Cena artikla bruto" name="grossPrice" value={grossPrice} onChange={handleChange.bind(this)} />
                        <datalist id="grossPrice">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.grossPrice}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="discount" placeholder="Rabat" name="discount" value={discount} onChange={handleChange.bind(this)} />
                        <datalist id="discount">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.discount}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="netPrice" placeholder="Neto cena" />
                        <datalist id="netPrice">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.netPrice}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="currency" placeholder="Valuta" />
                        <datalist id="currency">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.currency}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="unitOfMeasure" placeholder="Jedinica mere" />
                        <datalist id="unitOfMeasure">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.unitOfMeasure}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="grossWeight" placeholder="Bruto težina" />
                        <datalist id="grossWeight">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.grossWeight}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="netWeight" placeholder="Neto težina" />
                        <datalist id="netWeight">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.netWeight}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="warehouseId" placeholder="Magacin" />
                        <datalist id="warehouseId">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.warehouseId}</option>
                            )}
                        </datalist>
                    </li>
                    </ul>
                        </div>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : InvoiceProduct.getInvoiceProduct(this.state.invoiceProduct, this.state.sku, this.state.productName, this.state.distributorName, this.state.qty, this.state.grossPrice, this.state.discount, this.handleChange, this.handleSubmit);

        return (
            <div>
                <p>InvoiceProduct</p>
                {contents}
                <table className='table table-striped' aria-labelledby="tabelLabel" >
                    <thead>
                        <tr>
                            <th>Interna šifra</th>
                            <th>Naziv artikla</th>
                            <th>Proizvođač</th>
                            <th>Količina</th>
                            <th>Bruto cena artikla</th>
                            <th>Rabat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.sku}</td>
                            <td>{this.state.productName}</td>
                            <td>{this.state.distributorName}</td>
                            <td>{this.state.qty}</td>
                            <td>{this.state.grossPrice}</td>
                            <td>{this.state.discount}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.handleSubmit} type ="Submit">Dodaj Profakturu</button>
            </div>
        );
        
    }

    async GetInvoiceProduct() {
        const response = await fetch('/Home/GetAllInvoiceProducts');
        const data = await response.json();
        this.setState({ invoiceProduct: data, loading: false });
    }
}