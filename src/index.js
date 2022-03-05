import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './public-path';
import { BrowserRouter as Router } from 'react-router-dom';


function render(props) {
  const { container } = props;
  ReactDOM.render(<React.StrictMode>
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/sub' : '/'}>
      <App {...props} />
    </Router>
  </React.StrictMode>, container ? container.querySelector('#root') : document.querySelector('#root'));
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] child app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props, '25');

  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}