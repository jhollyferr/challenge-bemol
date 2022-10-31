import { Fragment } from "react";
import { FormProvider } from "./contexts/FormContext";
import { GlobalStyle } from "./globalStyles";
import { Router } from "./router";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <FormProvider>
        <Router />
      </FormProvider>
    </Fragment>
  );
};
