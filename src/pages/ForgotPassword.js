import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/common/CustomInput";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please enter your registered email to reset your password
        </p>
        {/* <div className="error text-center">
          {message.message == "Rejected" ? "You are not an Admin" : ""}
        </div> */}
        <form action="">
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            // onChng={formik.handleChange("email")}
            // onBlr={formik.handleBlur("email")}
            // val={formik.values.email}
          />
          {/* <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div> */}

          <div className="mb-3 text-end">
            <Link to="/" className="">
              Login
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
