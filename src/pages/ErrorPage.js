import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** We use "useNavigate" to automatically come to route.
 * For ex. In this case of error the 'useNavigate' will help us to automatically go back to previous page or home from the
 * error.
 */

function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        // setTimeout(() => navigate("/"), 3000);

        /**(-1) is used to go back to the page where we were previously  */
        setTimeout(() => navigate(-1), 3000);

    })

    return (
        <>
            <h1>OOPS! SOMETHING WENT WRONG</h1>

        </>
    );
}

export default Error;