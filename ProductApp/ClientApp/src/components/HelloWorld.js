import React, { Component } from 'react';

export class HelloWorld extends Component {
    static displayName = HelloWorld.name;
    constructor(props) {
        super(props);
        this.state = {
            invoiceProducts: [], invoices : [], loading: true
        };
    }

    componentDidMount() { this.GetJoinedColumns(); }

    render(invoiceProducts) {
       
    return ( 
        <div>
            <p>Lista profaktura</p>
            <ul className="invoice">
                <li>  <input list="invoiceType" name="invoiceType" placeholder="Tip profakture" />
                    <datalist id="invoiceType">
                        {invoiceProducts.map(listItem =>
                            <option>{listItem.distributorName}</option>
                        )}
                    </datalist>
                </li>
            </ul>
        </div>
    );
    }

    async GetJoinedColumns() {
        const response = await fetch('/Home/GetJoined');
        console.log(response);
        const data = await response.json();
        this.setState({ invoiceProducts: data, loading: false });
    }
}
