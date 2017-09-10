import React from 'react';
import ReactDOM from "react-dom";
require("../assets/css/style.css");
//require("../assets/css/style1.css");
import App from "../components/App.jsx";
import { Provider } from 'mobx-react';
import EventsFbStore from '../store/EventsFbStore';
import GallaryImageFbStore from '../store/GallaryImageFbStore';


const stores = {
  EventsFbStore,
  GallaryImageFbStore
};

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById("app"));

if (module.hot) {
    module.hot.accept();
}
