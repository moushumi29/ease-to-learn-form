import { Step, StepLabel, Stepper } from '@mui/material';
import './App.css';
import Details from './components/Details';
import Documents from './components/Documents';
import StatementPage from './components/StatementPage';
import InterviewAvailability from './components/InterviewAvailability';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div>
      <ToastContainer position="top-center" theme="light" />
      <nav className='center-stepper'>
        <Stepper style={{width: '80%'}} activeStep="1" orientation='horizontal'>
          <Step>
            <StepLabel>Form Selection</StepLabel>
          </Step>
          <Step>
            <StepLabel>Set up</StepLabel>
          </Step>
          <Step>
            <StepLabel>Form Creation</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review</StepLabel>
          </Step>
        </Stepper>
      </nav>
    
      <Routes>
        <Route path='/' element={<Details/>} />
        <Route path='/documents' element={<Documents/>}/>
        <Route path='/statement' element={<StatementPage/>}/>
        <Route path='/interview' element={<InterviewAvailability/>}/>
      </Routes>
    </div>
  );
}

export default App;
