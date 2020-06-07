import React, { Component } from 'react';
import './Invoices.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Invoice extends Component {
    static displayName = Invoice.name;

    constructor(props) {
        super(props);
        this.state = {
            singleInvoice: {}, 
            loading: true,
            invoiceId: this.props.location.state,
           
        }
    }
    
    componentDidMount() {
        this.GetSingleInvoice();
        
    }



    static getSingleInvoice(singleInvoice) {
       
        return (
            <div>
                <ul className="invoice">
                  
                   <li>
                        <div>Interna šifra:</div>
                        {singleInvoice.invoiceId} 
                    </li> 
                    <li>
                        {singleInvoice.invoiceType} </li>
                    <li>{new Date(singleInvoice.invoiceDate).getMonth()}/{new Date(singleInvoice.invoiceDeliveryDate).getDate()}/{new Date(singleInvoice.invoiceDeliveryDate).getFullYear()}</li>
                    <li>{singleInvoice.products} </li>
                    <li>{singleInvoice.distributorId} </li>
                    <li>{singleInvoice.address} </li>
                    <li>{singleInvoice.city}</li>
                    <li>{singleInvoice.country}</li>
                    <li>{singleInvoice.contactPerson}</li>
                    <li>{singleInvoice.contactPersonJobPosition}</li>
                    <li>{singleInvoice.contactHomeNumber}</li>
                    <li>{singleInvoice.contactMobileNumber}</li>
                    <li>{singleInvoice.email}</li>
                    <li>{singleInvoice.webAddress}</li>
                    <li>{singleInvoice.deliveryDate}</li>
                    <li>{singleInvoice.paymentDate}</li>
                    <li>{singleInvoice.methodOfDelivery}</li>
                    <li>{singleInvoice.placeOfDelivery}</li> 
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