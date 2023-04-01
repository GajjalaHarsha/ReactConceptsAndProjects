import { useRouteError } from "react-router-dom";

export const Error =()=>{
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Oops!!</h1>
            <h3>Something Error Occured {error?.status} status due to {error?.data}</h3>
        </div>
    );
}