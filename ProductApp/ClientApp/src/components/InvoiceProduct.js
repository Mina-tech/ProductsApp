import React, { Component } from 'react';
import './Invoices.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export class InvoiceProduct extends React.Component {
    static displayName = InvoiceProduct.name;



    constructor(props) {
        super(props);
        const product = {
            sku: "",
            productName: "",
            manufacturer: "",
            currency:"",
            qty: Number,
            grossPrice: Number,
            discount: Number
        }
        this.state = {
            invoiceProducts:[], //props.products,
            product: product,
            rows: [],
            filterProductName:''
        }
    }

    onInputChange = (e) => {
        console.log(e);
        var value = e.target.value;

        switch (e.target.id) {
            case "txtSku":
                this.state.product.sku = value;
            case "txtProductName":
                this.state.product.productName = value;
            case "txtManufacturer":
                this.state.product.manufacturer = value;
            case "numDistributorId":
                this.state.distributorId = value;
            case "numQty":
                this.state.product.qty = value;
            case "numGrossPrice":
                this.state.product.grossPrice = value;
            case "numNetPrice":
                this.state.netPrice = value;
            case "txtCurrency":
                this.state.product.currency = value;
            case "txtUnitOfMeasure":
                this.state.unitOfMeasure = value;
            case "numGrossWeight":
                this.state.grossWeight = value;
            case "numNetWeight":
                this.state.netWeight = value;
            case "numWarehouseId":
                this.state.warehouseId = value;

                
        }

    }

    handleChange = (e) => {
        console.log(e);
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

                let invoiceProduct = self.state.invoiceProducts.slice();
                invoiceProduct = invoiceProduct.filter(listItem => listItem.productName.toLowerCase() === self.state.filterProductName.toLowerCase());
                console.log(invoiceProduct);
                self.setState({
                    product: {
                        sku: invoiceProduct[0].sku,
                        // qty: invoiceProduct[0].qty,
                        distributorName: invoiceProduct[0].distributorName,
                        // discount: invoiceProduct[0].discount,
                        grossPrice: invoiceProduct[0].grossPrice,
                        currency: invoiceProduct[0].currency
                    }
                 
                });


            }, 500);
        }



    this.setState({
       [e.target.name]: val

    });
    }



    handleSubmit = (e) => {
         e.preventDefault();
         const invoiceProducts = {
             Sku: this.state.product.sku,
             ProductName: this.state.product.productName,
             Manufacturer: this.state.product.manufacturer,
             Qty: this.state.product.qty,
             GrossPrice: this.state.product.grossPrice,
             Discount: this.state.product.discount,
             DistributorId: this.state.distributorId,
             NetPrice: this.state.NetPrice,
             Currency: this.state.product.currency,
             UnitOfMeasure: this.state.unitOfMeasure,
             GrossWeight: this.state.grossWeight,
             NetWeight: this.state.netWeight,
             WarehouseId: this.state.warehouseId

             
         };
         //console.log(this.state.invoice);
         fetch('/Home/InsertInvoiceProduct', {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(invoiceProducts)
         })
             .then(res => {
                 console.log(res);
                 window.alert('Profaktura je uspešno dodata!');
             })


             .catch(err => console.log("api Erorr: ", err));
     }

    handleAddRow = () => {
        var newData = {
            sku: this.state.sku,
            productName: this.state.productName,
            manufacuturer: this.state.manufacturer,
            qty: this.state.qty,
            grossPrice: this.state.grossPrice,
            discount: this.state.discount,
            currency: this.state.currency
        }
        this.setState({ rows: [...this.state.rows, newData] });
        this.state.sku = '';
        this.state.productName = '';
        this.state.manufacturer = '';
        this.state.qty = Number;
        this.state.grossPrice = Number;
        this.state.discount = Number;
        this.state.currency = '';
    }


    handleDeleteRow = (index) => {
        this.setState({
            rows: this.state.rows.slice(index, -1)
        });
    };

    componentDidMount() {
        document.title = 'Unos artikala';
        this.GetInvoiceProduct();
    }

    //productsList = (products) => {
    //    return
    //    (
    //        <table className='table table-striped' aria-labelledby="tabelLabel" >
    //            <thead>
    //                <tr>
    //                    <th>Interna šifra</th>
    //                    <th>Naziv artikla</th>
    //                    <th>Proizvođač</th>
    //                    <th>Količina</th>
    //                    <th>Bruto cena artikla</th>
    //                    <th>Rabat</th>
    //                </tr>
    //            </thead>

    //            <tbody>
    //                {products.map(r =>
    //                    <tr key={r.index}>
    //                        <td>{r.sku}</td>
    //                        <td>{r.productName}</td>
    //                        <td>{r.manufacturer}</td>
    //                        <td>{r.qty}</td>
    //                        <td>{r.grossPrice} {r.currency}</td>
    //                        <td>{r.discount}</td>
    //                    </tr>

    //                )}
    //            </tbody>
    //        </table>
    //    );
    //}

    //renderProducts = () => {
    //    this.state.invoiceProducts.map((item, index) => {
    //        return
    //    });
    //}

    static getInvoiceProduct(invoiceProducts, product, rows) {
        let newList = [];
        let rowsList = [];
        invoiceProducts.map(listItem => newList.push(listItem.productName));
        rows.map(el => rowsList.push(el.productName));
        console.log(rows);
        let filteredList = newList.filter(el => rowsList.indexOf(el) < 0);

        return (
            <div className="container">
                <ul className="invoice">
                    <li>

                        <input list="productName" id="txtProductName" placeholder="Naziv artikla" name="productName" value={product.productName} onKeyUp={this.onInputChange} onChange={this.handleChange} />
                        <datalist id="productName">
                            {filteredList.map(el =>
                                <option>{el}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="netPrice" id="numNetPrice" placeholder="Neto cena" onKeyUp={this.onInputChange} />
                        <datalist id="netPrice">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.netPrice}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="manufacturer" id="txtManufacturer" placeholder="Proizvođač" name="manufacturer" value={product.manufacturer} onKeyUp={this.onInputChange} onChange={this.handleChange} />
                        <datalist id="manufacturer">
                            {invoiceProducts.map(el =>
                                <option>{el.manufacturer}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="sku" id="txtSku" placeholder="Interna šifra" name="sku" value={product.sku} onKeyUp={this.onInputChange} onChange={this.handleChange} />
                        <datalist id="sku">
                            {invoiceProducts.map(el =>
                                <option>{el.sku}</option>
                            )}
                        </datalist>
                    </li>

                    <li>
                        <input list="distributorId" id="numDistributorId" placeholder="Interna šifra dobavljača" onKeyUp={this.onInputChange}/>
                        <datalist id="distributorId">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.distributorId}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="qty" id="numQty" placeholder="Količina" name="qty" value={product.qty} onKeyUp={this.onInputChange} onChange={this.handleChange} />
                        <datalist id="qty">
                            {invoiceProducts.map(el =>
                                <option>{el.qty}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="grossPrice" id="numGrossPrice" placeholder="Cena artikla bruto" name="grossPrice" value={product.grossPrice} onKeyUp={this.onInputChange} onChange={this.handleChange} />
                        <datalist id="grossPrice">
                            {invoiceProducts.map(el =>
                                <option>{el.grossPrice}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="discount" id="numDiscount" placeholder="Rabat" name="discount" value={product.discount} onKeyUp={this.onInputChange} onChange={this.handleChange} />
                        <datalist id="discount">
                            {invoiceProducts.map(el =>
                                <option>{el.discount}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="currency" id="txtCurrency" placeholder="Valuta" value={product.currency} onKeyUp={this.onInputChange} onChange={this.handleChange} />
                        <datalist id="currency">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.currency}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="netPrice" id="numNetPrice" placeholder="Neto cena" onKeyUp={this.onInputChange} />
                        <datalist id="netPrice">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.netPrice}</option>
                            )}
                        </datalist>
                    </li>

                    <li>
                        <input list="unitOfMeasure" id="txtUnitOfMeasure" placeholder="Jedinica mere" onKeyUp={this.onInputChange} />
                        <datalist id="unitOfMeasure">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.unitOfMeasure}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="grossWeight" id="numGrossWeight" placeholder="Bruto težina" onKeyUp={this.onInputChange}/>
                        <datalist id="grossWeight">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.grossWeight}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="netWeight" id="numNetWeight"placeholder="Neto težina" onKeyUp={this.onInputChange}/>
                        <datalist id="netWeight">
                            {invoiceProducts.map(invoiceProduct =>
                                <option>{invoiceProduct.netWeight}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="warehouseId" id="numWarehouseId" placeholder="Magacin" onKeyUp={this.onInputChange} />
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
            : InvoiceProduct.getInvoiceProduct(this.state.invoiceProducts, this.state.product, this.state.rows);
        return (
            <div>
                <p>Unos artikala:</p>
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
                                <td><button onClick={(event) => this.handleDeleteRow(event, r, index)} type="Submit">Obriši artikal</button></td>
                            </tr>

                        )}
                    </tbody>
                </table>


                <button onClick={this.handleAddRow} type="Submit">Dodaj artikal</button>

                <button onClick={this.handleSubmit} type="Submit">Dodaj profakturu</button>

            </div>
        );
    }

    async GetInvoiceProduct() {
        const response = await fetch('/Home/GetAllInvoiceProducts');
        const data = await response.json();
        this.setState({ invoiceProducts: data, loading: false });
    }
}

export default InvoiceProduct;