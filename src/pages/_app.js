import React from "react";
import { SheetsRegistryProvider } from "contexts/SheetsContext";

import "styles/index.css";

const outside = 'test'

function MyApp({ Component, pageProps }) {
  return (
    <SheetsRegistryProvider>
      <Component {...pageProps} />
    </SheetsRegistryProvider>
  );
}

export default MyApp;
