import { useState } from "react"


const useLogin =()=>{
    const [isLogin, setIsLogin] = useState(false);
    return [isLogin, setIsLogin];
}

export default useLogin;