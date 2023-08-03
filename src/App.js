import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import PatientList from './pages/PatientList';



function App() {
  return (
    <Router>
      
      <Login />

      {/*components and routes*/}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/pages/patientlist' element={<PatientList />} />
        <Route path='/pages/dashboard' element={<Dashboard />} />
        <Route path='/pages/addprescription' element={<AddPrescription />} />
      </Routes>
    </Router>
  );
}

export default App;

//Switch component renders only the first matching route
//Route component renders the order the routes appeared