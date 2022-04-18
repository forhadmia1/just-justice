import { Button, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if (loading) {
        return <div style={{ height: '60vh' }} className='d-flex align-items-center'>
            <Button variant="light" disabled className="px-4 d-block mx-auto mt-5 d-flex align-items-center">
                <Spinner
                    as="span"
                    variant="danger"
                    animation="border"
                    role="status"
                    aria-hidden="true"
                />
                <span className="ms-2 text-danger fs-4">Loading...</span>
            </Button>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;