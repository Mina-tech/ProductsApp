import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Invoices.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom";

export class Invoices extends Component {
    static displayName = Invoices.name;

    constructor(props) {
        super(props);
        this.state = {
            invoiceList: [], filterType: '', filterId: '', loading: true

        }

    }
    changeFilterType = (e) => {
        this.setState({ filterType: e.target.value });
    }

    changeFilterId = (e) => {
        this.setState({ filterId: e.target.value });
    }
    
    componentDidMount() {
        this.GetInvoiceList();
    }

    
   /* static InvoiceList(invoiceList) {
        return (
            <div className="container">

                <ul className="invoice">
                   
                    <li>  <input list="invoiceType" placeholder="Tip profakture" onChange = { this.changeFilterType } value={this.state.filterType}/>
                        <datalist id="invoiceType">
                            {invoiceList.map(listItem =>
                                <option>{listItem.invoiceType}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceId" placeholder="Broj profakture" onChange={this.changeFilterId} value={this.state.filterId}/>
                        <datalist id="invoiceId">
                            {invoiceList.map(listItem =>
                                <option>{listItem.invoiceId}</option>
                            )}
                        </datalist>
                    </li>
                    {invoiceList.map(listItem => 
                    <li>{listItem.invoiceType}<Button href="https://localhost:44368/invoice">Select</Button></li>
                )}
                 
                    
                </ul>
            </div>
        )
    }*/


    render() {
        let invoiceList = this.state.invoiceList.slice();
        if (this.state.filterType) {
            invoiceList = invoiceList.filter(listItem => listItem.invoiceType.toLowerCase() == this.state.filterType.toLowerCase());
        }
        if (this.state.filterId) {
            invoiceList = invoiceList.filter(listItem => listItem.invoiceId.toString().toLowerCase() == this.state.filterId.toLowerCase());
        }
        /*let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Invoices.InvoiceList(this.state.invoiceList, this.state);*/
        return (
            
            <div>
              <p>Lista profaktura</p>
               
            
            

                <ul className="invoice">

                    <li>  <input list="invoiceType" placeholder="Tip profakture" onChange={this.changeFilterType} value={this.state.filterType} />
                        <datalist id="invoiceType">
                            {invoiceList.map(listItem =>
                                <option>{listItem.invoiceType}</option>
                            )}
                        </datalist>
                    </li>
                    <li>
                        <input list="invoiceId" placeholder="Broj profakture" onChange={this.changeFilterId} value={this.state.filterId} />
                        <datalist id="invoiceId">
                            {invoiceList.map(listItem =>
                                <option>{listItem.invoiceId}</option>
                            )}
                        </datalist>
                    </li>
                    {invoiceList.map(listItem =>
                        <li>{listItem.invoiceId}{listItem.invoiceType}
                            <Link
                                to={{
                                    pathname: `/Invoice/GetInvoice/`+ listItem.invoiceId,
                                    state: listItem.invoiceId 
                                }}
                                >
                                <Button>Select</Button>
                                </Link>
                                </li>
                    )}


                </ul>
            </div>
        );
    }


    async GetInvoiceList() {
        const response = await fetch('/Invoice/GetInvoices');
        const data = await response.json();
        this.setState({ invoiceList: data, loading: false });
    }

   
}