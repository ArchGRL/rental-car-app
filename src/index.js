// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";
// import { App } from 'components/App/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/rental-car-app">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App/App';
import './index.css';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/rental-car-app">
          <App />
        </BrowserRouter>
      </PersistGate>
    </React.StrictMode>
  </Provider>
);