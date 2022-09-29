import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {

    let {stateShoes} = this.props

    return (
        <div className="col-12 row">
        <div className="col-4">
          <h2 className="mb-4">{stateShoes.name}</h2>
          <img className="img-fluid" style={{width:"100%"}} src={stateShoes.image} />
        </div>
        <div className="col-8">
              <h2 className="mb-4">Detailed information</h2>
          <table className="table text-left">
              <tbody>
                  <tr>
                      <td>Name</td>
                      <td>{stateShoes.name}</td>
                  </tr>
                  <tr>
                      <td>Alias</td>
                      <td>{stateShoes.alias}</td>
                  </tr>
                  <tr>
                      <td>Price</td>
                      <td>{stateShoes.price}$</td>
                  </tr>
                  <tr>
                      <td>Description</td>
                      <td>{stateShoes.description}</td>
                  </tr>
                  <tr>
                      <td>ShortDescription</td>
                      <td>{stateShoes.shortDescription}</td>
                  </tr>
                  <tr>
                      <td>Quantity</td>
                      <td>{stateShoes.quantity}</td>
                  </tr>
              </tbody>
             
          </table>
        </div>
      </div>
    )
  }
}

export default ProductItem