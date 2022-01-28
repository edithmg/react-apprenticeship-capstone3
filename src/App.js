import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';
import { useLocalStorage } from './utils/hooks/useLocalStorage';
import GlobalStyles from './GlobalStyles';
import Header from './components/Layout/Header';
import Home from './pages/Home';

const App = () => {
  const [items, setItems] = useLocalStorage('notes', []);

  return (
    <GlobalContext.Provider value={{ items, setItems }}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};

export default App;
