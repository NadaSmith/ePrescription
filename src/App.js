import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PatientProfiles from './pages/Dashboard';
import PatientMedicalHistory from './pages/PatientMedicalHistory';
import 


function App() {
  return (
    <Router>
      {/*components and routes*/}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/patients' element={<PatientProfiles />} />
        <Route path='/prescriptions' element={<Medications />} />
        <Route path='/prescriptions' element={<Medications />} />
      </Routes>
    </Router>
  );
}

export default App;

//Switch component renders only the first matching route
//Route component renders the order the routes appeared