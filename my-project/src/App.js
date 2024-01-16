import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Pages/Main'
import Iletisim from './Pages/Iletisim';
import Hakkimizda from './Pages/Hakkimizda';
import Egitmenlerimiz from './Pages/Egitmenlerimiz';
import FullStackPage from './Pages/FullStackPage';
import BulutBilisimPage from './Pages/BulutBilisimPage';
import Footer from './Components/Footer/Footer';
import { Container } from 'react-bootstrap';
import EgitmenDetay from './Pages/EgitmenDetay';

function App() {
  return (
    <>
    <BrowserRouter>
    <Container fluid className=' m-0 p-0'>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/Iletisim' element={<Iletisim/>}></Route>
      <Route path='/Hakkimizda' element={<Hakkimizda/>}></Route>
      <Route path='/Egitmenlerimiz' element={<Egitmenlerimiz/>}></Route>
      <Route path='/FullStackPage' element={<FullStackPage/>}></Route>
      <Route path='/BulutBilisimPage' element={<BulutBilisimPage/>}></Route>
      <Route path='/EgitmenDetay/:id' element={<EgitmenDetay/>}></Route>
    </Routes>
    <Footer/>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
