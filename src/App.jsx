import React from 'react';
import Form from './Form';
import Flow from './components/Flow';
import './App.css';

export default function App() {
  return (

    <div className="app-cont">
      <Flow />
      <div className="breadcrums">
        <span className="breadcrums breadcrums-strong">Step 3</span>
        <span className="breadcrums"> of 4</span>
      </div>
      <h1 className="page-title">login & enjoy with us</h1>
      <Form formTitle="LOGIN HERE" />
    </div>
  );
}
