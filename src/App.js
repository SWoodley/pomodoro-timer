import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import About from './routes/about/About.component.jsx';
import Settings from './routes/settings/settings.component.jsx';
import Error from './routes/error/error.component.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home/>} />
      <Route path="settings" element={<Settings />} />
      <Route path="about" element={<About />} />

      <Route path="*" element={<Error/>} /> 
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
