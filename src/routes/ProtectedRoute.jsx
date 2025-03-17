import {Navigate, useLocation, Outlet} from 'react-router-dom'
export default function ProtectedRoute() {
  const {state} = useLocation()
  if (!state) return <Navigate to="/" replace />
  else <Outlet />
}
