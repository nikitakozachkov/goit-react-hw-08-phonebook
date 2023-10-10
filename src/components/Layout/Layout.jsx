import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { Header } from '../Header/Header';
import { Main, Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header />

      <Main>
        <Suspense
          fallback={
            <Container>
              <InfinitySpin color="#868784" />
            </Container>
          }
        >
          <Outlet />
        </Suspense>

        <Toaster position="top-right" reverseOrder={false} />
      </Main>
    </>
  );
};
