import React from 'react';
import withProtectedRoute from '../hoc/withProtectedRoute';

const CoupleDashboard = () => {
  return (
    <div>DASHBOARD COUPPLE</div>
  )
}

export default withProtectedRoute(CoupleDashboard, 'COUPLE');