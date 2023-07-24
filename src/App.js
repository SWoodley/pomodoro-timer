import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
        <Route index element={<Home/>} />
    </Routes>
  );
};

export default App;
