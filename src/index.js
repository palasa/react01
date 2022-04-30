import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import * as services from './services'

// 全局挂载在 Component 上
// import * as services from './services'
// React.Component.prototype.http = services
// this.http.someMethod()

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
