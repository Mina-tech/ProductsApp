import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = {
          products: [], singleProduct: {}, loading: true, productId: 1, distributor: { id: 1, name: 'Dobavljac', quantity: 10 } };
  }

  componentDidMount() {
      this.populateWeatherData();
      this.findSingleProduct();
      this.updateSingleDistributor();
  }

  static renderForecastsTable(products) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ProductId</th>
            <th>Name</th>
                    <th>Price</th>
                    <th>Sku</th>
           
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
              <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.sku}</td>
              </tr>
          )}
        </tbody>
      </table>
    );
    }

    static getMeSingleProduct(singleProduct) {
        return (
            <div>
                <p>{singleProduct.productId}</p>
                <p>{singleProduct.productName}</p>
                <p>{singleProduct.price}</p>
                <p>{singleProduct.sku}</p>
            </div>
        );
    }

    static updateDistributor(distributor) {
        return (
            <div>
                <p>{distributor.id}</p>
                <p>{distributor.name}</p>
                <p>{distributor.quantity}</p>
            </div>
        );
    }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
          : FetchData.renderForecastsTable(this.state.products);

      let newcontents = this.state.loading
          ? <p><em>Loading...</em></p>
          : FetchData.getMeSingleProduct(this.state.singleProduct);

      let distributorcontent = this.state.loading
          ? <p><em>Loading...</em></p>
          : FetchData.updateDistributor(this.state.distributor);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
            {contents}
            <p>GetById</p>
            {newcontents}
            <p>Distributor</p>
            {distributorcontent}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('/Home/GetAllProducts');
    const data = await response.json();
    this.setState({ products: data, loading: false });
    }

    async findSingleProduct() {
        const response = await fetch('/Home/GetProduct/'+this.state.productId);
        const data = await response.json();
        this.setState({ singleProduct: data, loading: false });
    }

    async updateSingleDistributor() {
        const response = await fetch('/Home/UpdateDistributor?DistributorId=' + this.state.distributor.id + '&DistributorName=' + this.state.distributor.name + '&Qty=' + this.state.distributor.quantity);
        const data = await response.json();
        this.setState({ distributor: data, loading: false });
    }
}
