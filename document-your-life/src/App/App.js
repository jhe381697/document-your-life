/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
import HeaderNavbar from '../Components/HeaderNavbar/HeaderNavbar';
// import TabDashboard from '../Components/TabDashboard/TabDashboard';
import FormSignIn from '../Components/FormSignIn/formSignIn';
import './App.css';

function App() {

  return (
    <div className="App">
      <HeaderNavbar/>
      {/* <TabDashboard/> */}
      <FormSignIn/>
    </div>
  );
}

export default App;
