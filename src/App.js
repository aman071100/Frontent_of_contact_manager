// import './App.css';
import ForgotPassword from './forgotPassword/ForgotPassword';
import Sign from "./loginSignUp/sign"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPassword from "./ResetPassword/ResetPassword"
import ContactList from './contactList/ContactList';
import AddEditView from './addEditView/addEditView';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Sign />} />
          <Route path="/forgot" exact element={<ForgotPassword />} />
          <Route path="/contact-list" exact element={<PrivateRoute><ContactList /></PrivateRoute>} />
          <Route path="/reset/:id" exact element={<ResetPassword />} />
          <Route path='/data-section' exact element={<PrivateRoute><AddEditView /></PrivateRoute>} />
        </Routes>
      </Router>
      <ToastContainer />
      
    </div>
  );
}

export default App;
