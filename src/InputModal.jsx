import React from "react";

const InputModal = ({ data , toogle, setToggle}) => {

  const modalShow = {
    display: `${toogle ? "block" : "none"}`
  }
  console.log(toogle);
  return (
    <div>
      <div className="modal fade  bd-example-modal-lg show" style={modalShow}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="text-center col-11">
                <h5 className="modal-title">Data Shit</h5>
              </div>

              <button
                type="button"
                className="btn-close"
               onClick={()=>setToggle(false)}
              ></button>
            </div>
            <div className="modal-body px-4">
              <div>
                <h3 className="fs-6 d-inline">Name :</h3>
                <span
                 className="text-muted ms-2">
                  {data.firstName
                    ? data.firstName.concat(" ", data.lastName)
                    : " N/A"}
                </span>
              </div>
              <hr />

              <div>
                <h3 className="fs-6 d-inline">User Name : </h3>
                <span
                 className="text-muted ms-2">
                  {data.userName ? data.userName : " N/A"}
                </span>
              </div>
              <hr />

              <div>
                <h3 className="fs-6 d-inline">E-mail :</h3>
                <span
                 className="text-muted ms-2">
                  {data.email ? data.email : " N/A"}
                </span>
              </div>
              <hr />

              <div>
                <h3 
                className="fs-6 d-inline">
                    Address:
                </h3>
                <span
                 className="text-muted ms-2">
                   {data.Address ? data.Address : " N/A"}
                </span>
              </div>
              <hr />

              <div>
                <h3 className="fs-6 d-inline">Country:</h3>
                <span
                 className="text-muted">
                  {data.country ? data.country : " N/A"}
                </span>
              </div>
              <hr />

              <div>
                <h3 className="fs-6 d-inline">State:</h3>
                <span className="text-muted ms-2">
                  {data.State ? data.State : " N/A"}
                </span>
              </div>
              <hr />

              <div>
                <h3 className="fs-6 d-inline">Zip Code :</h3>
                <span className="text-muted ms-2">
                  {data.zip ? data.zip : " N/A"}
                </span>
              </div>
              <hr />

              <div>
                <h3 className="fs-6 d-inline">Shipping Address :</h3>
                <span
                 className="text-muted ms-2">
                  {data.shipping
                    ? data.shipping
                    : " Not Found Shipping Address"}
                </span>
              </div>
              <hr />

              <div>
                <h3 className="fs-6 d-inline">Payment Methods :</h3>
                <span className="text-muted ms-2">
                  {data.payment ? data.payment : "Cash"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
