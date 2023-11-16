import style from './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputCards from './Component/Utility/InputCards/InputCards';
import DroneForm from './Component/Form/DroneForm/DroneForm';
import ExperiancesForm from './Component/Form/ExperiancesForm/ExperiancesForm';
import EquipmentsForm from './Component/Form/EquipmentsForm/EquipmentsForm';
import CerificationForm from './Component/Form/CertificationForm/CerificationForm';
import ShowreelForm from './Component/Form/ShowreelForm/ShowreelForm';
import ServicesForm from './Component/Form/ServicesForm/ServicesForm';



function App() {
  return (
    <>
    
      <BrowserRouter>

      <div className={style.App}>
      <Routes>
        <Route path='inputcards' element={<InputCards />} />
        {/* Form routes */}
        <Route path='droneform' element={<DroneForm />} />
        <Route path='experiancesform' element={<ExperiancesForm />} />
        <Route path='equipmentsform' element={<EquipmentsForm />} />
        <Route path='cerificationform' element={<CerificationForm />} />
        <Route path='showreelform' element={<ShowreelForm />} />
        <Route path='servicesform' element={<ServicesForm />} />
      </Routes>
      </div>
      </BrowserRouter>
    
    </>
  );
}

export default App;
