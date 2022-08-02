
import './App.css';
import Add_Value from './components/Add/Add';

import EditInfo from './components/EditInfo/EditInfo';
import StudentDetails from './components/StudentDetails/StudentDetails';

function App() {
  return (
    <div className="App">
      <StudentDetails/>
      <EditInfo/>
      <Add_Value/>
    </div>
  );
}

export default App;
