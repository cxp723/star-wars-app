/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import Preloader from '../components/Preloader/Preloader';

const withSuspense = (Component) => (props) => (
  <Suspense fallback={<Preloader />}>
    <Component {...props} />
  </Suspense>
);

export default withSuspense;
