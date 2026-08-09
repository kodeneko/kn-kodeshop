import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateTemplate = () => {
  return (
    <>
      <div>Public Template</div>
      <Outlet />
    </>
  )
};

export default PrivateTemplate;
