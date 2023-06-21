import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />

      <main style={{ padding: "18px 12px" }}>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <InfinitySpin width="300" color="#868784" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </main>
    </>
  );
};
