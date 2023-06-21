import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/actions';
import { getIsRefreshing } from 'redux/auth/selectors';
import { RestricredRoute } from './RestricredRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';

const HomePage = lazy(() => import('pages/Home/Home'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestricredRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestricredRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  );
};
