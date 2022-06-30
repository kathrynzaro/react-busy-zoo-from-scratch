import { BrowserRouter as Router, Route, Routes, Link, Redirect } from 'react-router-dom';
import Zoo from './Zoo';
import Admin from './Admin';




export default function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Zoo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}