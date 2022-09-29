import React, { Component } from "react";

export class ProductList extends Component {
  render() {
    let { data, henldeChiTiet } = this.props;

    return (
      <div className="row">
        {data.map((item, index) => {
          return (
            <div key={index} className="col-4 mt-4">
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}$</p>
                  <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => {
                      henldeChiTiet(item);
                    }}
                  >
                    Product information
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
