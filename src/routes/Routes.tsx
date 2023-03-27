import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EntryRegistration from '../screens/EntryRegistration/EntryRegistration';
import HomePage from '../screens/Home/Home';

const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/entry-registration' element={<EntryRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
