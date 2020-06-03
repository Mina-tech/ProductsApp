import React, { Component } from 'react';
import './Invoices.css';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";

export class Invoices extends Component {
    static displayName = Invoices.name;

    constructor(props) {
        super(props);
        this.state = {
            invoice: [],
            loading: true,
            invoiceDate: new Date(),
            invoiceDeliveryDate: new Date(),
            invoicePaymentDate: new Date(),
        }
    }

    componentDidMount() {
        this.GetInvoice();
    }

    handleChange = (date, name) => {
        this.setState({
            [name]: date
        });
    };
    handleSelect= (date, name)=> {
        this.setState({
            [name]:date
        });
    };

        
    static getInvoice(invoices, invoiceDate, invoiceDeliveryDate, invoicePaymentDate, handleChange) {
        return (
            <div className="container">
                <ul className="invoice">
                    <li>
                        <input list="invoiceType" placeholder="Tip profakture" />
                        <datalist id="invoiceType">
                            {invoices.map(invoice =>
                                <option>{invoice.invoiceType}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceId" placeholder="Broj profakture" />
                        <datalist id="invoiceId">
                            {invoices.map(invoice =>
                                <option>{invoice.invoiceId}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="distributorId" placeholder="Naziv firme" />
                        <datalist id="distributorId">
                            {invoices.map(invoice =>
                                <option>{invoice.distributorId}</option>
                            )}
                        </datalist>
                    </li>
                    <li className="datepicker-list-item">
                        <label className="datepicker" for="invoiceDate">Datum profakture:</label>
                        <DatePicker
                            name="invoiceDate"
                            selected={invoiceDate}
                            onSelect={this.handleSelect}
                            onChange={(date) => handleChange(date, 'invoiceDate')}
                        />
                    </li>
                    <li>
                        <input list="invoiceAddress" placeholder="Adresa firme" />
                        <datalist id="invoiceAddress">
                            {invoices.map(invoice =>
                                <option>{invoice.address}</option>
                            )}
                        </datalist>
                    </li>
                    <li className="datepicker-list-item">
                        <label className = "datepicker" for="invoiceDeliveryDate">Datum isporuke:</label>
                        <DatePicker
                            name="invoiceDeliveryDate"
                            selected={invoiceDeliveryDate}
                            onSelect={this.handleSelect}
                            onChange={(date) => handleChange(date, 'invoiceDeliveryDate')}
                        />
                    </li>
                    <li>
                        <input list="invoiceCity" placeholder="Grad" />
                        <datalist id="invoiceCity">
                            {invoices.map(invoice =>
                                <option>{invoice.city}</option>
                            )}
                        </datalist>
                    </li>
                    <li className="datepicker-list-item">
                        <label className = "datepicker" for="invoicePaymentDate">Datum plaćanja:</label>
                        <DatePicker
                            name="invoicePaymentDate"
                            selected={invoicePaymentDate}
                            onSelect={this.handleSelect}
                            onChange={(date) => handleChange(date, 'invoicePaymentDate')}
                    />
                    
                    </li>
                    <li>
                        <input list="invoiceCountry" placeholder="Država" />
                        <datalist id="invoiceCountry">
                            {invoices.map(invoice =>
                                <option>{invoice.country}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceMethodOfDelivery" placeholder="Način isporuke" />
                        <datalist id="invoiceMethodOfDelivery">
                            {invoices.map(invoice =>
                                <option>{invoice.methodOfDelivery}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceContactPerson" placeholder="Kontakt osoba" />
                        <datalist id="invoiceContactPerson">
                            {invoices.map(invoice =>
                                <option>{invoice.contactPerson}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoicePlaceOfDelivery" placeholder="Mesto isporuke" />
                        <datalist id="invoicePlaceOfDelivery">
                            {invoices.map(invoice =>
                                <option>{invoice.placeOfDelivery}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceContactHomeNumber" placeholder="Kontakt telefon - fiksni" />
                        <datalist id="invoiceContactHomeNumber">
                            {invoices.map(invoice =>
                                <option>{invoice.contactHomeNumber}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceEmail" placeholder="Email adresa" />
                        <datalist id="invoiceEmail">
                            {invoices.map(invoice =>
                                <option>{invoice.email}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceContactMobileNumber" placeholder="Kontakt telefon - mobilni" />
                        <datalist id="invoiceContactMobileNumber">
                            {invoices.map(invoice =>
                                <option>{invoice.contactMobileNumber}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceWebAddress" placeholder="Web adresa" />
                        <datalist id="invoiceWebAddress">
                            {invoices.map(invoice =>
                                <option>{invoice.webAddress}</option>
                            )}
                        </datalist>
                    </li>

                    <li class="textarea-list-item">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Tekst polje za komentar</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                    </li>
                    <li class="textarea-list-item">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Tekst polje za komentar</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                    </li>
                   
                </ul>
            </div>
        );
}
     
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Invoices.getInvoice(this.state.invoice, this.state.invoiceDate, this.state.invoiceDeliveryDate, this.state.invoicePaymentDate, this.handleChange);
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
