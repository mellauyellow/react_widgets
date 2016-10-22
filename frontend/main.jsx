import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './tabs.jsx';
import Clock from './clock';
import Weather from './weather';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main-div'));
});

const Root = () => {
  const tabs = [{title: "Hi", content: "fdas"}, {title:"Hi2", content:"adf"}];
  return (
    <div>
      <Tab tabs = {tabs} />
      <Clock />
      <Weather />
    </div>
  );
};
