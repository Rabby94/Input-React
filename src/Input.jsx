import React from "react";
import logo from "./img/Bootstrap_logo.svg.png";
const Input = () => {
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
          <form action="" className="justify-conten-between">
            <div className="row">
              <div className="col-lg-6">
                <label className="form-label" htmlFor="">
                  First name
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-6">
                <label className="form-label" htmlFor="">
                  Last Name
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <label className="form-label" htmlFor="">
                  User Name
                </label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <label htmlFor="" className="form-label">
                  Email
                  <span className="text-muted">(optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="you@exampal.com"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 main st"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <label htmlFor="" className="form-label">
                  Address
                  <span className="text-muted">(optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment or suite"
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-5">
                <label className="form-label" htmlFor="">
                  country
                </label>
                <select className="form-select">
                  <option value="">Chooss..... </option>
                  <option value="">Bangladesh</option>
                  <option value="">India</option>
                  <option value="">Pakistan</option>
                  <option value="">Cina</option>
                </select>
              </div>
              <div className="col-4">
                <label className="form-label" htmlFor="">
                  State
                </label>
                <select className="form-select">
                  <option value="">Chooss..... </option>
                  <option value="">Dhaka </option>
                  <option value="">Dilly</option>
                  <option value="">Islamabad</option>
                  <option value="">honkong</option>
                </select>
              </div>
              <div className="col-3">
                <label className="form-label" htmlFor="">
                  Zip
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Shipping address is the same as my billing addres
                </label>
              </div>
            </div>
            <div className="row">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Save this information for next time
                </label>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <h4>Payment</h4>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Credit card
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                    Debit card
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  PayPal
                </label>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <label htmlFor="" className="form-label">Name on card</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label">Credit card number</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-3">hellow</div>
      </div>
    </div>
  );
};

export default Input;
