import { ReactNode, useContext, useEffect, useState } from "react";
import { AppContext } from "../hooks/app.context";
import { useNavigate } from "react-router-dom";

type ProtectedProps = {
    page: ReactNode;
};

function ProtectedRoute(props: ProtectedProps) {
    const [next, setNext] = useState(false)
    const { token } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        } 
        setNext(true)
    }, []);

    return <>
        {
            next &&
            props.page
        }
    </>;
}

export default ProtectedRoute;
