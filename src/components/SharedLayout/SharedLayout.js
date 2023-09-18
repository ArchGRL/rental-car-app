import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
// import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
