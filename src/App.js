import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import TopCategery from './components/TopCategery';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import TopHeadlines from './components/TopHeadlines';
import Loader from './components/Loader';
import { useState } from 'react';
import EveryThings from './pages/EveryThings'
import Main from './layout/Main';
function App() {
  let loading = true;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={loading ?  <Main category="general"/> : <Loader />}>
          </Route>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/technology" element={<TopHeadlines category="technology" />} >
          </Route>
          <Route path="/sports" element={<TopHeadlines category="sports" />} >
          </Route>
          <Route path="/science" element={<TopHeadlines category="science" />} >
          </Route>
          <Route path="/health" element={<TopHeadlines category="health" />} >
          </Route>
          <Route path="/everything" element={<EveryThings/>} >
          </Route>
        </Routes>
        {/* {loading ? <Footer /> : ""} */}
      </BrowserRouter>
    </>
  );
}

export default App;
