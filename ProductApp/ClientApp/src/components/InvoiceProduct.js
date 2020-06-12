﻿import React, { Component } from 'react';
import './Invoices.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Invoice } from './Invoice';

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
            grossPrice: Number,
            invoiceType:'',
            rows: [],
            filterProductName:''
            
            
        }
    }

 
    handleChange = (e) => {
        let val = e.target.value
        if (e.target.name == 'qty' || e.target.name == 'discount' || e.target.name == 'grossPrice') {
            val = parseInt(e.target.value);
        }
        if (e.target.name == 'productName') {
            this.setState({
                filterProductName: val
            });
            let self = this;
            setTimeout(function () {

                let invoiceProduct = self.state.invoiceProduct.slice();
                invoiceProduct = invoiceProduct.filter(listItem => listItem.productName.toLowerCase() === self.state.filterProductName.toLowerCase());
                console.log(invoiceProduct);
                self.setState({
                    sku : invoiceProduct[0].sku,
                   // qty: invoiceProduct[0].qty,
                    distributorName: invoiceProduct[0].distributorName,
                   // discount: invoiceProduct[0].discount,
                    grossPrice: invoiceProduct[0].grossPrice,
                    currency: invoiceProduct[0].currency
                });
               

            }, 500);
        }
      
    
      
        this.setState({
            [e.target.name]: val
           
        });
    }


    
   handleSubmit = (e) => {
        e.preventDefault();
        const invoiceProduct = {
            Sku: this.state.sku,
            ProductName: this.state.productName,
            DistributorName: this.state.distributorName,
            Qty: this.state.qty,
            GrossPrice: this.state.grossPrice,
            Discount: this.state.discount,
            InvoiceType: this.state.invoiceType
        };
        //console.log(this.state.invoice);
        fetch('/Home/InsertInvoiceView', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoiceProduct)
        })
            .then(res => {
                console.log(res);
                window.alert('Profaktura je uspešno dodata!');
            })
            

            .catch(err => console.log("api Erorr: ", err));
    }

    handleAddRow = ()=> {
        var newData = {
            sku: this.state.sku,
            productName: this.state.productName,
            distributorName: this.state.distributorName,
            qty: this.state.qty,
            grossPrice: this.state.grossPrice,
            discount: this.state.discount,
            currency : this.state.currency
        }
        this.setState({ rows: [...this.state.rows, newData] });
        this.state.sku = '';
        this.state.productName = '';
        this.state.distributorName = '';
        this.state.qty = Number;
        this.state.grossPrice = Number;
        this.state.discount = Number;
        this.state.currency = '';
    }
   

    handleDeleteRow =(index)=> {
        this.setState({
            rows: this.state.rows.slice(index, -1)
        });
    };

    componentDidMount() {
        document.title = 'Unos Profaktura';
        this.GetInvoiceProduct();
    }

    static getInvoiceProduct(invoiceProducts,invoicetype, sku, productName, distributorName, qty, grossPrice, discount, currency, handleChange ) {
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
                        <input list="currency" placeholder="Valuta" value={currency} onChange={handleChange.bind(this)} />
                        <datalist id="currency">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.currency}</option>
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
            : InvoiceProduct.getInvoiceProduct(this.state.invoiceProduct, this.state.invoiceType, this.state.sku, this.state.productName, this.state.distributorName, this.state.qty, this.state.grossPrice, this.state.discount, this.state.currency, this.handleChange);

        return (
            <div>
                <p>Unos profaktura:</p>
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
                        {this.state.rows.map((r, index) =>
                            <tr key={r.index}>
                                <td>{r.sku}</td> 
                                <td>{r.productName}</td> 
                                <td>{r.distributorName}</td>
                                <td>{r.qty}</td>
                                <td>{r.grossPrice} {r.currency}</td>
                                <td>{r.discount}</td>
                                <td><button onClick={(event) =>this.handleDeleteRow(event, r, index)} type="Submit">Obriši artikal</button></td>
                            </tr>
                
                        )}
                        </tbody>
                </table>
               

                <button onClick={this.handleAddRow} type="Submit">Dodaj artikal</button>

                <button onClick={this.handleSubmit} type ="Submit">Dodaj profakturu</button>
                
            </div>
        );
    }

    async GetInvoiceProduct() {
        const response = await fetch('/Home/GetAllInvoiceProducts');
        const data = await response.json();
        console.log(data);
        this.setState({ invoiceProduct: data, loading: false });
        
    }
}