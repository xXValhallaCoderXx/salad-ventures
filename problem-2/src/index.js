import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SendTxPage } from "./pages";
import Layout from "./shared/components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <SendTxPage />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
