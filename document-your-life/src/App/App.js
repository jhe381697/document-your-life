/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
import HeaderNavbar from '../Components/HeaderNavbar/HeaderNavbar';
import TabDashboard from '../Components/TabDashboard/TabDashboard';
import Calendar from '../Components/Calendar/Calendar';
import './App.css';

function App() {

  return (
    <div className="App">
      <HeaderNavbar/>
      <TabDashboard/>
      <Calendar /> 
    </div>
  );
}

export default App;
