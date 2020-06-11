import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { HelloWorld } from './components/HelloWorld';
import { Invoice } from './components/Invoice';
import { InvoiceProduct } from './components/InvoiceProduct';
import { Invoices } from './components/Invoices';
import { Storehouse } from './components/Storehouse';

import './custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
            <Route path='/hello-world' component={HelloWorld} />
            <Route path='/invoice' component={Invoice}/>
            <Route path='/invoiceProduct' component={InvoiceProduct} />
            <Route path='/invoices' component={Invoices} />
            <Route path='/storehouse' component={Storehouse} />
      </Layout>
    );
  }
}
