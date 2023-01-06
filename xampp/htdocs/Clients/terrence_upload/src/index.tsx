import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18next from "i18next";
import App from "./App";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { DAppProvider } from "@usedapp/core";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icons.min.css";
// import eventBus from "./eventBus";

// import { Provider } from "react-redux";
// import { store } from "./components/Store";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "zh", "fr", "ja", "ko", "ru", "es", "vi"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

function getLibrary(provider: any) {
  if (provider !== "" && provider !== null && provider !== undefined) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  } else {
    return "";
  }
}

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <DAppProvider config={{}}>
          <App />
        </DAppProvider>
      </Web3ReactProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
