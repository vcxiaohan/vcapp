import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from '@/App';
import * as serviceWorker from '@/serviceWorker';

ReactDOM.render(
  <BrowserRouter basename='/'>
    <Route path={'/'} component={App}></Route>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
