
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

import Navbar from './Layouts/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import User from './Users/User';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/home" element={<Home />}>Home</Route>
        <Route path="/Users/:id" element={<User />}> User</Route>
        <Route path="/Users/add" element={<AddUser />}>AddUser</Route>
        <Route path="/Users/edit/:id" element={<EditUser />}>EditUser</Route>

        
        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
