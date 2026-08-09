import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicTemplate = () => {
  return (
    <>
      <div>Public Template</div>
      <Outlet />
    </>
  )
};

export default PublicTemplate;
