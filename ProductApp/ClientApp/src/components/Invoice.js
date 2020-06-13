import React, { Component } from 'react';

import InvoiceProduct from "./InvoiceProduct"
import './Invoices.css';

export class Invoice extends Component {
    static displayName = Invoice.name;

    constructor(props) {
        super(props);
        this.state = {
            invoice: [],
            products: [],
            loading: true,
            invoiceId: this.props.location.state
        }
    }

    /* onHandleChange = (value) => {
         var currentInvoice = this.state.invoice;
         currentInvoice.quantity = value;
     } */

    componentDidMount() {
        this.GetInvoice();
    }

    async GetInvoice() {
        const response = await fetch(`/Invoice/GetInvoice/${this.state.invoiceId}`);
        const data = await response.json();
        this.setState({ invoice: data.invoice, products: data.products, loading: false });
    }

    static getSingleInvoice(invoice) {
        return (
            <div>
                <ul className="invoice">
                    <li className='field-wrapper'>
                        <div className='label-div'>Tip profakture:</div>
                        <input className='value-div' type="text" defaultValue={invoice.invoiceType}></input>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Datum profakture:</div>
                        <div className='value-div'>{new Date(invoice.invoiceDate).getMonth()}/{new Date(invoice.invoiceDate).getDate()}/{new Date(invoice.invoiceDate).getFullYear()}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Dobavljač:</div>
                        <div className='value-div'>{invoice.distributorId}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Adresa:</div>
                        <div className='value-div'>{invoice.address}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Grad:</div>
                        <div className='value-div'>{invoice.city}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Država:</div>
                        <div className='value-div'>{invoice.country}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Kontakt osoba:</div>
                        <div className='value-div'>{invoice.contactPerson}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Radno mesto kontakt osobe:</div>
                        <div className='value-div'>{invoice.contactPersonJobPosition}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Fiksni telefon:</div>
                        <div className='value-div'>{invoice.contactHomeNumber}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Mobilni telefon:</div>
                        <div className='value-div'>{invoice.contactMobileNumber}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Email:</div>
                        <div className='value-div'>{invoice.email}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Web adresa:</div>
                        <div className='value-div'>{invoice.webAddress}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Datum isporuke:</div>
                        <div className='value-div'>{new Date(invoice.deliveryDate).getMonth()}/{new Date(invoice.deliveryDate).getDate()}/{new Date(invoice.deliveryDate).getFullYear()}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Datum plaćanja:</div>
                        <div className='value-div'>{new Date(invoice.paymentDate).getMonth()}/{new Date(invoice.paymentDate).getDate()}/{new Date(invoice.paymentDate).getFullYear()}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Metoda isporuke:</div>
                        <div className='value-div'>{invoice.methodOfDelivery}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Mesto isporuke:</div>
                        <div className='value-div'>{invoice.placeOfDelivery}</div>
                    </li>
                </ul>
            </div>

        );
    }

    renderProducts = () => {
        if (this.state.products.length > 0) {
            {
                return <InvoiceProduct products={this.state.products} />;
            }
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Invoice.getSingleInvoice(this.state.invoice);
        return (
            <div>
                <p>Profaktura:</p>
                {contents}
                {this.renderProducts()}
            </div>
        );
    }

}