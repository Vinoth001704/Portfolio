import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const Rootlayouts = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      
    </>
  );
};