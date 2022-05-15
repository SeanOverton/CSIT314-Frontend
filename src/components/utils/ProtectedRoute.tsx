import React from "react";
import { Navigate } from "react-router-dom";
import auth from "./Auth";

export const ProtectedRoute = ({
    redirectPath = '/login',
    children,
}: any) => {
      if (!auth.isAuthenticated()) {
        return <Navigate to={redirectPath} replace />;
      }
    
      return children;
}