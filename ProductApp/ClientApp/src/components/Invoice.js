import React, { Component } from 'react';
import './Invoices.css';

export class Invoice extends Component {
    static displayName = Invoice.name;

    constructor(props) {
        super(props);
        this.state = {
           // invoice: [],
            singleinvoice: {},
            products:[],
            loading: true,
            invoiceId: this.props.location.state
        }

    }
    

   /* onHandleChange = (value) => {
        var currentInvoice = this.state.invoice;
        currentInvoice.quantity = value;
    } */

    componentDidMount() {
        this.GetSingleInvoice();
    }

    static getSingleInvoice(singleInvoice, products) {
        return (
            <div>
                <ul className="invoice">

                   
                    <li className='field-wrapper'>
                        <div className='label-div'>Tip profakture:</div>
                        <input className='value-div'type="text" defaultValue={singleInvoice.invoiceType}></input>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Datum profakture:</div>
                        <div className='value-div'>{new Date(singleInvoice.invoiceDate).getMonth()}/{new Date(singleInvoice.invoiceDate).getDate()}/{new Date(singleInvoice.invoiceDate).getFullYear()}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Dobavljač:</div>
                        <div className='value-div'>{singleInvoice.distributorId}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Adresa:</div>
                        <div className='value-div'>{singleInvoice.address}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Grad:</div>
                        <div className='value-div'>{singleInvoice.city}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Država:</div>
                        <div className='value-div'>{singleInvoice.country}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Kontakt osoba:</div>
                        <div className='value-div'>{singleInvoice.contactPerson}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Radno mesto kontakt osobe:</div>
                        <div className='value-div'>{singleInvoice.contactPersonJobPosition}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Fiksni telefon:</div>
                        <div className='value-div'>{singleInvoice.contactHomeNumber}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Mobilni telefon:</div>
                        <div className='value-div'>{singleInvoice.contactMobileNumber}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Email:</div>
                        <div className='value-div'>{singleInvoice.email}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Web adresa:</div>
                        <div className='value-div'>{singleInvoice.webAddress}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Datum isporuke:</div>
                        <div className='value-div'>{new Date(singleInvoice.deliveryDate).getMonth()}/{new Date(singleInvoice.deliveryDate).getDate()}/{new Date(singleInvoice.deliveryDate).getFullYear()}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Datum plaćanja:</div>
                        <div className='value-div'>{new Date(singleInvoice.paymentDate).getMonth()}/{new Date(singleInvoice.paymentDate).getDate()}/{new Date(singleInvoice.paymentDate).getFullYear()}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Metoda isporuke:</div>
                        <div className='value-div'>{singleInvoice.methodOfDelivery}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Mesto isporuke:</div>
                        <div className='value-div'>{singleInvoice.placeOfDelivery}</div>
                  </li>
                </ul>
            </div>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Invoice.getSingleInvoice(this.state.singleInvoice, this.state.invoiceId);
        return (
            <div>
                <p>Profaktura:</p>
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
                    {this.state.products.map(r =>
                        <tr key={r.index}>
                            <td>{r.sku}</td>
                            <td>{r.productName}</td>
                            <td>{r.distributorName}</td>
                            <td>{r.qty}</td>
                            <td>{r.grossPrice} {r.currency}</td>
                            <td>{r.discount}</td>
                        </tr>

                    )}
                    </tbody>
                </table>
                    </div>
        );
    }
    async GetSingleInvoice() {
        const response = await fetch('/Invoice/GetInvoice/' + this.state.invoiceId);
        const data = await response.json();
        console.log(data);
        this.setState({ /*invoice : data*/ singleInvoice: data.invoice, products: data.products, loading: false });
    }
}