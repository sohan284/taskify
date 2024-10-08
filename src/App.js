import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />}>
      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
    </Route>
  </Routes>
  );
}

export default App;
