import logo from './logo.svg';
import './App.css';
import Login from  './login';
import { BrowserRouter as Router, Routes ,Route,Redirect, useNavigate} from 'react-router-dom';
import SignUpPage from './signup';
import HomePage from './home';
import Hi from './home2';
function App() {
  // const navigate = useNavigate();
  return (
    <Router>
      <Routes >
        {/* <Route path='/'></Route> */}
        <Route path='/' element={<Login/>}/>  
        <Route path='/signup' element={<SignUpPage/>}/>  
        <Route>Co</Route>/>}/>  
      </Routes>  
   </Router>
  );
}

export default App;
