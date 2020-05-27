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
                    {
                        invoices.map(invoice =>
                            <li key={invoice.invoiceId}>

                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label><input list="invoices" id="invoiceId" name="invoiceNumber" placeholder="Tip profakture" /></Form.Label>
                                            <datalist id="invoices">

                                                <option>{invoice.id}</option>

                                            </datalist>
                                      
                                      
                                    </Form.Group>
                                </Form>


                               
                              
                            
                                
                                <p>{invoice.city}</p>
                                <p>{invoice.country}</p>
                                <p>{invoice.contactPerson}</p>
                                <p>{invoice.contactPersonJobPosition}</p>
                                <p>{invoice.contactHomeNumber}</p>
                                <p>{invoice.contactMobileNumber}</p>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={invoice.email} />
                                    </div>
                                </form>
                                <p>{invoice.webAddress}</p>

                                

                                <p>{invoice.invoiceId}</p>
                                <p>{invoice.invoiceDate}</p>
                                <p>{invoice.products}</p>
                                <p>{invoice.distributorId}</p>
                                <p>{invoice.invoiceNumber}</p>
                                <p>{invoice.deliveryDate}</p>
                                <p>{invoice.paymentDate}</p>
                                <p>{invoice.methodOfDelivery}</p>
                                <p>{invoice.placeOfDelivery}</p>
                               
                                  
                            </li>
                        )
                    }
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
