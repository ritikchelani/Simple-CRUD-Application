import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav';
import Home from './components/Home';
import Users from './components/UserComponent/Users';
import Add from './components/UserComponent/Add';
import Edit from './components/UserComponent/Edit';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/Home" exact element={<Home/>} />
        <Route  path="/users/:id" exact element={<Users/>} />
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/edit-user/:id" exact element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;