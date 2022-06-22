import React from "react";
import { useState } from "react";
import logo from "./img/Bootstrap_logo.svg.png";

const Input = () => {
  const [data, setData] = useState({});

  const handalChange = ({ target }) => {
    const newData = { ...data, [target.id]:target.value }

console.log("ddd", target.id);
console.log("data",data);

    if(target.id==="shipping"){
      newData.shipping = newData.Address;
    }

    if(target.checked === false){
     delete newData.shipping
    }
 
   

    setData(newData);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
 

  return (
    <div className="container">
      <div className="row d-flex justify-content-center ">
        <div className="col-10 text-center">
          <img
            src={logo}
            alt="bootstrap_img"
            className="img-fluid my-3"
            style={{ width: "100px" }}
          />
          <h2>Checkout from</h2>
          <p className="fs-5 font-italic">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
      </div>

      <div className="row justify-content-between my-3">
        <div className="col-md-8">
          <h5>Billing Address</h5>
          <form className="justify-conten-between" onChange={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  onChange={handalChange}
                />
              </div>

              <div className="col-lg-6">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  onChange={handalChange}
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col">
                <label className="form-label" htmlFor="userName">
                  User Name
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="userName"
                    onChange={handalChange}
                  />
                </div>
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                  <span className="text-muted">(optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="you@exampal.com"
                  id="email"
                  onChange={handalChange}
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12">
                <label htmlFor="Address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="1234 main st"
                  onChange={handalChange}
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address
                  <span className="text-muted">(optional)</span>
                </label>
                <input
                  id="address2"
                  type="text"
                  className="form-control"
                  placeholder="Apartment or suite"
                  onChange={handalChange}
                />
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-5">
                <label className="form-label" htmlFor="">
                  country
                </label>
                <select 
                  className="form-select" 
                  id="country"
                  onChange={handalChange}>
                    <option value="NA">Chooss..... </option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Cina">Cina</option>
                </select>
              </div>

              <div className="col-4">
                <label className="form-label" htmlFor="State">
                  State
                </label>
                <select
                  className="form-select"
                  id="State"
                  onChange={handalChange}
                >
                  <option value="NA">Chooss..... </option>
                  <option value="Dhaka">Dhaka </option>
                  <option value="Dilly">Dilly</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Beijing">Beijing</option>
                </select>
              </div>

              <div className="col-3">
                <label className="form-label" htmlFor="zip">
                  Zip
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="zip"
                  onChange={handalChange}
                />
              </div>
            </div>

            <hr className="my-4" />

            <div className="row m-0 ">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="shipping"
                  onClick={handalChange}
                />
                <label className="form-check-label" htmlFor="shipping">
                  Shipping address is the same as my billing addres
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Saved"
                  id="Save"
                  onChange={handalChange}
                />
                <label className="form-check-label" htmlFor="Save">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />
              <h4 className="p-0">Payment</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="credit"
                  value="Credit card"
                  name="pyament"
                  checked="checked"
                  onChange={handalChange}
                />
                <label className="form-check-label" htmlFor="cridet">
                  Credit card
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="debit"
                  value="Debit"
                  name="pyament"
                  onChange={handalChange}
                />
                <label className="form-check-label" htmlFor="debit">
                  Debit card
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="paypal"
                  value="PayPal"
                  name="pyament"
                  onChange={handalChange}
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-6">
                <label htmlFor="cardName" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  id="cardName"
                  className="form-control"
                  onChange={handalChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Credit card number
                </label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handalChange}
                />
              </div>
              <p className="fs-10">Full name as displayed on card</p>
              <div className="row">
                <button
                  className="btn btn-primary"
                >
                  Submite
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-3">
          <div className="card mt-5">
            <ul className="list-group list-group-flush mt-">
              <li className="list-group-item m-2">An item</li>
              <li className="list-group-item m-2">A second item</li>
              <li className="list-group-item m-2">A third item</li>
              <li className="list-group-item m-2">A third item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
