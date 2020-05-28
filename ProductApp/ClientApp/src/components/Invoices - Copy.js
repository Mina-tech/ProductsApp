import React, { Component } from 'react';
import { Form } from 'react-bootstrap';






export class Invoices extends Component {
    static displayName = Invoices.name;

    constructor(props) {
        super(props);
        this.state = {
            invoice: [], loading: true
        }
    }

        componentDidMount() {
            this.GetInvoice();
        }

        
    static getInvoices(invoices) {
        return (
            <div class="container">
                
                
                <ul>
                    <li>
                        <input list="invoiceType" placeholder="Tip profakture" />
                        <datalist id="invoiceType">
                            {invoices.map(invoice =>
                                <option>{invoice.invoiceType}</option>
                            )}
                        </datalist>
                        <p>----------------------------------------------</p>
                    </li>
                    <li>
                        <input list="invoiceAddress" placeholder="Adresa firme" />
                        <datalist id="invoiceAddress">
                            {invoices.map(invoice =>
                                <option>{invoice.address}</option>
                            )}
                        </datalist>
                        <p>----------------------------------------------</p>
                    </li>
                </ul>
            </div>

          
            
           
        );
    }
        render() {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : Invoices.getInvoices(this.state.invoice);
            return (
                <div>
                    <p>Invoices</p>
                    {contents}
                </div>
            );
        }

        async GetInvoice() {
            const response = await fetch('/Home/GetAllInvoices');
            const data = await response.json();
            this.setState({ invoice: data, loading: false });
        }

    }
