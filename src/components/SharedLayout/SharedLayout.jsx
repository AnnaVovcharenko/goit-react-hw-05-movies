import { Suspense } from 'react'; //дозволяє відображати резервний варіант доти, доки його дочірні елементи не завершать завантаження.
import { Outlet } from 'react-router-dom'; // додаємо компонент для рендерингу дочірніх компонентів

import { Loader } from '../Loader/Loader';
import { NLinc, Container, Header } from "./SharedLayout.styled";



export const SharedLayout = () => {
  return (
  <Container>
     <Header>
      <nav>
        <NLinc to='/'>Home</NLinc>
        <NLinc to="/movies">Movies</NLinc>
      </nav>
    </Header>

    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </Container>
   
  );
};


