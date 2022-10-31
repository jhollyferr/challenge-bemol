import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return (
    <Fragment>
      <ToastContainer theme="dark" closeButton={false} autoClose={3000}/>
    </Fragment>
  );
};
