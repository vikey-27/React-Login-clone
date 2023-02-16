
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Protected from './Components/Protected';
import Signin from './Components/Signin';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/welcome' element={<Protected><Welcome /></Protected>  } />
      </Routes>
      
    </div>
  );
}

export default App;
