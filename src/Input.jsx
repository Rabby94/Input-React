import React from "react";
import { useState } from "react";
import logo from "./img/Bootstrap_logo.svg.png";

const Input = () => {
  const [fName, setFname] = useState("NA");
  const [lName, setLname] = useState("NA");
  const [userName, setUsername] = useState("NA");
  const [email, setEmail] = useState("NA");
  const [address, setAddress] = useState("NA");
  const [address2, setAddress2] = useState("NA");
  const [country, setCountry] = useState("NA");
  const [state, setState] = useState("NA");
  const [zip, setZip] = useState("NA");
  const [checkbox, setCheckbox] = useState([]);
  const [pyament, setPyament] = useState("Credit card");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handelFirstName = (e) => {
    setFname(e.target.value);
  };

  const handelLastName = (e) => {
    setLname(e.target.value);
  };
  const handelUserName = (e) => {
    setUsername(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelAddress = (e) => {
    setAddress(e.target.value);
  };
  const handelAddress2 = (e) => {
    setAddress2(e.target.value);
  };
  const handelCountry = (e) => {
    setCountry(e.target.value);
  };
  const handelState = (e) => {
    setState(e.target.value);
  };
  const handelZip = (e) => {
    setZip(e.target.value);
  };
  const handelCheckbox = (e) => {
    let newcheck;
    e.target.checked == true
      ? (newcheck = [...checkbox, e.target.value])
      : (newcheck = checkbox.filter((item) => item !== e.target.value));
    setCheckbox(newcheck);
  };

  const handalPyament = (e) => {
    console.log(e);
    e.target.checked == true && setPyament(e.target.value);
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
            {" "}
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
      </div>

      <div className="row justify-content-between my-3">
        <div className="col-md-8">
          <h5>Billing Address</h5>
          <form className="justify-conten-between" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  onChange={handelFirstName}
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
                  onChange={handelLastName}
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
                    onChange={handelUserName}
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
                  onChange={handelEmail}
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
                  onChange={handelAddress}
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
                  onChange={handelAddress2}
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-5">
                <label className="form-label" htmlFor="">
                  country
                </label>
                <select className="form-select" onChange={handelCountry}>
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
                  onChange={handelState}
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
                  onChange={handelZip}
                />
              </div>
            </div>
            <hr className="my-4" />
            <div className="row m-0 ">
              <div className="form-check " onChange={handelCheckbox}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Shipping"
                  id="Shipping"
                />
                <label className="form-check-label" htmlFor="Shipping">
                  Shipping address is the same as my billing addres
                </label>
              </div>
              <div className="form-check" onChange={handelCheckbox}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Saved"
                  id="Save"
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
                  id="Credit"
                  value="Credit card"
                  name="pyament"
                  checked="checked"
                  onChange={handalPyament}
                />
                <label className="form-check-label" htmlFor="Credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="Debit"
                  value="Debit"
                  name="pyament"
                  onChange={handalPyament}
                />
                <label className="form-check-label" htmlFor="Debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="PayPal"
                  value="PayPal"
                  name="pyament"
                  onChange={handalPyament}
                />
                <label className="form-check-label" htmlFor="PayPal">
                  PayPal
                </label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Name on card
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6">
                <label htmlFor="" className="form-label">
                  Credit card number
                </label>
                <input type="text" className="form-control" />
              </div>
              <p className="fs-10">Full name as displayed on card</p>
              <div className="row">
                <div className="col-3">
                  <label className="form-label" htmlFor="">
                    Expiration
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-3">
                  <label className="form-label" htmlFor="">
                    CVV
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <hr className="p-0 mt-5" />
              </div>
              <div className="row">
                <button className="btn btn-primary">Submite</button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-3">Card </div>
      </div>
    </div>
  );
};

export default Input;
