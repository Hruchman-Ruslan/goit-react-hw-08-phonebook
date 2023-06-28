//=============== Before ========================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Global } from '@emotion/react';
// import { App } from 'components/App/App';

// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';

// import 'modern-normalize';
// import { GlobalStyles } from './styles/GlobalStyles.styled';
// import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <Global styles={GlobalStyles} />
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

//=============== After ========================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Global } from '@emotion/react';
// import { App } from 'components/App/App';

// import { Provider } from 'react-redux';
// import { store } from 'redux/store';

// import 'modern-normalize';
// import { GlobalStyles } from './styles/GlobalStyles.styled';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Global styles={GlobalStyles} />
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

//=============== After last homework ========================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { App } from 'components/App/App';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

import 'modern-normalize';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <Global styles={GlobalStyles} />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);