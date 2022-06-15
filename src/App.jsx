import React, { useState } from 'react';
import { genConfig } from 'react-nice-avatar';
import Form from './components/Form';
import Flow from './components/Flow';
import PageTitles from './components/ui/PageTitles';
import List from './components/ListOfLogs';
import './App.css';

export default function App() {
  const [logsArr, setNewLog] = useState([]);

  const addLogHandler = (data) => {
    const config = genConfig({ shape: 'square', sex: 'woman' });

    setNewLog((oldArr) => [...oldArr,
      {
        ...data,
        avatarConfig: config,
        id: Date.now().toString(),
      }]);
  };

  return (

    <div className="app-cont">
      <Flow />
      <div className="breadcrums">
        <span className="breadcrums breadcrums-strong">Step 3</span>
        <span className="breadcrums"> of 4</span>
      </div>
      <PageTitles title="login & enjoy with us" />
      <Form formTitle="LOGIN HERE" onAddLog={addLogHandler} />
      <List logs={logsArr} />
    </div>
  );
}
