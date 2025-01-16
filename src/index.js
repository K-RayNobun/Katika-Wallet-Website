//**React import */
import React from "react";
import ReactDOM from "react-dom/client";

//**Bootstrap import */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//**Font import */
import "@fontsource/poppins";

//**i18n */
import i18n from "./Helpers/i18n";

//**scss import */
import "./Assets/Styles/index.scss";
import Spinner from "./Components/Spinner/Spinner";
const LazyApp = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <LazyApp />
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
