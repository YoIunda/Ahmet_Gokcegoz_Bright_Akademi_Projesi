import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Pages/Main'
import Iletisim from './Pages/Iletisim';
import Hakkimizda from './Pages/Hakkimizda';
import Egitmenlerimiz from './Pages/Egitmenlerimiz';
import Footer from './Components/Footer/Footer';
import { Container } from 'react-bootstrap';

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
    </Routes>
    <Footer/>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
