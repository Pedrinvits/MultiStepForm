import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { FormStep1 } from './pages/FormStep1/FormStep1';
import { FormStep2 } from './pages/FormStep2/FormStep2';
import { FormStep3 } from './pages/FormStep3/FormStep3';
import { Finalizacao } from './pages/Finalizacao/index';
export const Router = () => {
    return (
        <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<FormStep1/>}></Route>
              <Route path="/step2" element={<FormStep2/>}></Route>
              <Route path="/step3" element={<FormStep3/>}></Route>
              <Route path="/finalizacao" element={<Finalizacao/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
    );
}


