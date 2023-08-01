import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/*components and routes*/}
      <Routes>
        <Route path='/' Component={Dashboard} />
        <Route path='/patients' Component={PatientProfiles} />
        <Route path='/prescriptions' Component={Prescriptions} />
      </Routes>
    </Router>
  );
}

export default App;
