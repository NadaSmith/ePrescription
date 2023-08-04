import './pages/LoginPage.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import PatientListPage from './pages/PatientListPage';
import AddPrescriptionPage from './pages/AddPrescriptionPage';



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboardpage' element={<DashboardPage />} />
        <Route path='/patientlistpage' element={<PatientListPage />} />
        <Route path='/addprescriptionpage' element={<AddPrescriptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;

//Switch component renders only the first matching route
//Route component renders the order the routes appeared