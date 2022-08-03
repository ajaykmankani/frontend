import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Header />
      <div classNameName="container container-fluid">
      <Routes>
      <Route path="/" element={<Home/>} exact />
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;