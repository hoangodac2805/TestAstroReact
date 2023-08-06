import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../components/Button';
import  {store}  from "../redux/configureStore";

import { Provider } from 'react-redux'


export const reactApp = ReactDOM.render(
    <Provider store={store}>
        <Button />
    </Provider>,
    document.getElementById('root')
)