import React, { Component } from 'react';
import './Invoices.css';

export class Invoice extends Component {
    static displayName = Invoice.name;

    constructor(props) {
        super(props);
        this.state = {
            singleInvoice: {},
            loading: true,
            invoiceId: this.props.location.state
        }
    }

    componentDidMount() {
        this.GetSingleInvoice();
    }

    static getSingleInvoice(singleInvoice) {
        return (
            <div>
                <ul className="invoice">

                    <li className='field-wrapper'>
                        <div className='label-div'>Interna šifra:</div>
                        <div className='value-div'>{singleInvoice.invoiceId}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Tip profakture:</div>
                        <div className='value-div'>{singleInvoice.invoiceType}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Datum profakture:</div>
                        <div className='value-div'>{new Date(singleInvoice.invoiceDate).getMonth()}/{new Date(singleInvoice.invoiceDate).getDate()}/{new Date(singleInvoice.invoiceDate).getFullYear()}</div>
                    </li>
                    <li className='field-wrapper'>
                        <div className='label-div'>Artikli:</div>
                        <div className='value-div'>singleInvoice.products}</div>
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
                <p>Invoice</p>
                {contents}

            </div>
        );
    }
    async GetSingleInvoice() {
        const response = await fetch('/Invoice/GetInvoice/' + this.state.invoiceId);
        const data = await response.json();
        this.setState({ singleInvoice: data, loading: false });
    }
}