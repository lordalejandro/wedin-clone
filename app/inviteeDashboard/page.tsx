import React from 'react';
import withProtectedRoute from '../hoc/withProtectedRoute';

const InviteeDashboard = () => {
  return (
    <div>DASHBOARD INVITADO LOL</div>
  )
}

export default withProtectedRoute(InviteeDashboard, 'INVITEE');