import { useContext } from 'react';
import './assets/css/App.css';
import FirstSetp from './components/step1/firstSetp';
import SecondStep from './components/step2/SecondStep';
import ThardStep from './components/step3/ThardStep';
import FourthStep from './components/step4/FourthStep';
import FifthStep from './components/step5/FifthStep';
import hmsfContext from './context/hmsfContext';

function App() {
    const { state } = useContext(hmsfContext);
    return (
        <div className='hms-form-wrap'>
            <div className='hms-form-title'>
                <h2>Welche Immobilie möchten Sie bewerten?</h2>
                <h3>Kostenlose Erstinformation berechnen</h3>
            </div>
            {state.currentStep === 1 && <FirstSetp />}
            {state.currentStep === 2 && <SecondStep />}
            {state.currentStep === 3 && <ThardStep />}
            {state.currentStep === 4 && <FourthStep />}
            {state.currentStep === 5 && <FifthStep />}
        </div>
    );
}

export default App;
