import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Invoices.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Invoice } from './Invoice';
import DatePicker from "react-datepicker";

export class Invoices extends Component {
    static displayName = Invoices.name;

    constructor(props) {
        super(props);
        this.state = {
            invoiceList: [], filterType: '', filterDate: null, loading: true
        }
    }

    changeFilterType = (e) => {
        this.setState({ filterType: e.target.value });
    }
    handleChange = (date, name) => {
        this.setState({
            [name]: date
        });
    };
    handleSelect = (date, name) => {
        this.setState({
            [name]: date
        });
    };

    componentDidMount() {
        this.GetInvoiceList();
    }

    render() {
        let invoiceList = this.state.invoiceList.slice();
        if (this.state.filterType) {
            invoiceList = invoiceList.filter(listItem => listItem.invoiceType.toLowerCase() === this.state.filterType.toLowerCase());
        }
        if (this.state.filterDate) {
            let newFilterDate = `${this.state.filterDate.getFullYear()}-${this.state.filterDate.getDate()}-${this.state.filterDate.getMonth()}`;
            console.log(newFilterDate);
            invoiceList = invoiceList.filter(el => `${new Date(el.invoiceDate).getFullYear()}-${new Date(el.invoiceDate).getDate()}-${new Date(el.invoiceDate).getMonth()}` === newFilterDate);
        }
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
                    <li className="datepicker-list-item">
                        <label className="datepicker" for="invoiceDate">Datum profakture:</label>
                        <DatePicker
                            name="invoiceDate"
                            selected={this.state.filterDate}
                            onSelect={this.handleSelect}
                            onChange={(date) => this.handleChange(date, 'filterDate')}
                        />
                    </li>
                    {invoiceList.map(listItem =>
                        <li className="select-option">
                            <div className="chosen-option">{listItem.invoiceId} - {listItem.invoiceType}</div>
                            <Link
                                to={{
                                    pathname: `/Invoice/${listItem.invoiceId}`,
                                    state: listItem.invoiceId,
                                    component: { Invoice }
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