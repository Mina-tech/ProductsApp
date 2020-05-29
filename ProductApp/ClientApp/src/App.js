import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { HelloWorld } from './components/HelloWorld';
import { Invoices } from './components/Invoices';
import { InvoiceProduct } from './components/InvoiceProduct';

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
            <Route path='/invoices' component={Invoices} />
            <Route path='/invoiceProduct' component={InvoiceProduct} />
      </Layout>
    );
  }
}
