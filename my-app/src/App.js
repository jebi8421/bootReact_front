import logo from './logo.svg';
import {useState} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import Detail from './pages/Detail';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
