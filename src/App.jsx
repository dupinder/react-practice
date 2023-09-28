import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';
import TextUtil from './components/TextUtil';
import News from './components/refac-to-fun-based-components/News';
import UseContextHook from './components/hooks/useContextHook';
import UseContextHookState from './components/hooks/UseContextHookState';

import {
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

export default function App() {

  const navBar = {
    appName: "Todo Practice",
    navItems: [{  "name": "Home",  "url": "/home"}, {  "name": "Text Utils",  "url": "/text-utils"}, {  "name": "Contact",  "url": "/contact"}, {"name": "News", "url": "/news"}, {"name": "UseContextHook", "url" : "/use-context-hook"}]
  }

  return (
    <>
      <Navbar appName={navBar.appName} navItems={navBar.navItems} />

      <Routes> 
          <Route path="/" element={<TodoApp></TodoApp>} />
          <Route path="/text-utils" element={<TextUtil></TextUtil>} />
          <Route path="/contact" element={<h1>Contact</h1>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/news" element={<News></News>}/>
          <Route path="/use-context-hook" element={<UseContextHook />}/>
      </Routes>

    </>
  );
}


