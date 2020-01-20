import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function App() {

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
       setValue(newValue);
 };
  return (
      <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Active" />
              <Tab label="Disabled" />
              <Tab label="Active" />
            </Tabs>
  );
}

export default App;
