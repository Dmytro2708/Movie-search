import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppContainer, Header, NavUl, Link, } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <AppContainer>
      <Header>
        <nav>
          <NavUl>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </NavUl>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </AppContainer>
  );
};