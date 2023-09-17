import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { HomePage } from 'pages/Home/Home';
import { CarsList } from '../CarsList/CarsList';
import { FavoritesPage } from 'pages/Favorites/Favorites';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CarsList />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </div>
  );
};
