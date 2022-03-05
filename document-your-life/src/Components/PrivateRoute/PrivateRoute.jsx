/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../../contexts/Auth";

const PrivateRoute = ({ children  }) => {
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated ? ( children 
        ) : (
        <Navigate to="/" />)
}
export default PrivateRoute