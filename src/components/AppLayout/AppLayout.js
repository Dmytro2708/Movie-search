import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, Link } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </div>
  );
};