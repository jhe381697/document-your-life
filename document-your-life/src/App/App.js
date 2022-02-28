/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
import HeaderNavbar from '../Components/HeaderNavbar/HeaderNavbar';
import LoginForm from '../Components/LoginForm/LoginForm';
// import TabDashboard from '../Components/TabDashboard/TabDashboard';
import './App.css';

function App() {
  // TODO sup FormSingIn
  return (
    <div className="App">
      <HeaderNavbar/>
      {/* <TabDashboard/> */}
      <LoginForm />
    </div>
  );
}

export default App;
