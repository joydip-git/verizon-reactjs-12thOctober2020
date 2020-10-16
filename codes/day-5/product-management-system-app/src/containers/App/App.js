import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDashboard from '../../components/Common/ProductDashboard/ProductDashboard';
import ProductRoutes from '../../Routes/ProductRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ProductDashboard />
        <br />
        {/* <Route path='/home' render={() => <span>Home</span>} /> */}
        <ProductRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
