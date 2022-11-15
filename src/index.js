import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App isExt={false}/>, document.getElementById('root'));
registerServiceWorker();
