
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';
import TextUtil from './components/TextUtil';

import './App.css'

export default function App() {

  const navBar = {
    appName: "Todo Practice",
    navItems: [{  "name": "Home",  "url": "/home"}, {  "name": "Text Utils",  "url": "/text-utils"}, {  "name": "Contact",  "url": "/contact"}]
  }

  return (
    <>
      <Navbar appName={navBar.appName} navItems={navBar.navItems} />
      <TodoApp></TodoApp>
      <TextUtil></TextUtil>
    </>
  )
}


