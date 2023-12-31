import { Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main/main';
import { Profile } from './Pages/Profile/Profile';
import { SellerProfile } from './Pages/SellerProfile/SellerProfile';
import { Sign } from './Pages/Registration/sign';
import { Product } from './Pages/Product/Product';
import { NewProduct } from './Components/NewProductAdd/newProduct';
import { NotFound } from './Pages/NotFound/NotFound';
import { ProtectedRoute } from './ProtectedRoutes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/reg' element={<Sign />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/seller/:id' element={<SellerProfile />} />
      <Route path='*' element={<NotFound />} />

      <Route element={<ProtectedRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/new-product' element={<NewProduct />} />
      </Route>
    </Routes>
  );
};
