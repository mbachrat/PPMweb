import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BaseLayout from './layouts/BaseLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MeetTheTeamPage = lazy(() => import('./pages/MeetTheTeamPage'));
const DeveloperPage = lazy(() => import('./pages/DeveloperPage'));
const ManagementPage = lazy(() => import('./pages/ManagementPage'));

function App() {
  return (
    <Suspense
      fallback={
        <div className='app-loading' role='status' aria-live='polite'>
          <span className='app-loading__spinner' />
        </div>
      }
    >
      <Routes>
        <Route
          path='/contact'
          element={
            <BaseLayout>
              <ContactPage />
            </BaseLayout>
          }
        />

        <Route
          path='/meet-the-team'
          element={
            <BaseLayout>
              <MeetTheTeamPage />
            </BaseLayout>
          }
        />

        <Route
          path='/developer'
          element={
            <BaseLayout>
              <DeveloperPage />
            </BaseLayout>
          }
        />

        <Route
          path='/management'
          element={
            <BaseLayout>
              <ManagementPage />
            </BaseLayout>
          }
        />

        <Route
          path='/'
          element={
            <BaseLayout>
              <HomePage />
            </BaseLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
