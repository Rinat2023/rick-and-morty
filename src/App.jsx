import { Route, Routes } from 'react-router-dom';
import { Element } from './pages/Element';
import { Elements } from './pages/Elements';
import { ModalPage } from './pages/ModalPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Elements></Elements>} />
        <Route path="/:Id" element={<Element />} />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </>
  );
}

export default App;
