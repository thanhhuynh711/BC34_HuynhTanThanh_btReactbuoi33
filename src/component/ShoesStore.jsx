import React, { Component } from "react";
import data from "./data.json";
import Modal from "./Modal";
import ProductList from "./ProductList";

export class ShoesStore extends Component {

    state = {
        stateShoes: {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
          }
    }

    henldeChiTiet = (item) => {
        this.setState({
            stateShoes: item
        })
    }

  render() {

    let {stateShoes} = this.state

    return (
      <div className="container">
        <h1>Shoes shop</h1>
    
        <div>
            <ProductList data={data} henldeChiTiet={this.henldeChiTiet} />
        </div>

          <Modal stateShoes={stateShoes} />

      </div>
    );
  }
}

export default ShoesStore;
