import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import PatientListPage from './pages/PatientListPage';
import AddPrescriptionPage from './pages/AddPrescriptionPage';



function App() {
  return (
    <Router>
      {/*components and routes*/}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/patientlistpage' element={<PatientListPage />} />
        <Route path='/dashboardpage' element={<DashboardPage />} />
        <Route path='/addprescriptionpage' element={<AddPrescriptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;

//Switch component renders only the first matching route
//Route component renders the order the routes appeared