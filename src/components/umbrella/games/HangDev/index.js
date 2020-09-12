import React        from 'react';
import App          from './App/App';
import { Provider } from 'react-redux';
import { store }        from './Store/Store';



export default function HangDev()
{
  return (
    <Provider store={ store }>
      <App/>
    </Provider>
  );
}