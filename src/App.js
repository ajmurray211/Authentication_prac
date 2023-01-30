import './App.css';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText, Button, Input, Label } from 'reactstrap'
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotUsername' />
      </Routes>
    </div>
  );
}

export default App;
