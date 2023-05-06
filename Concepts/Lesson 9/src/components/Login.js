import { Form } from "react-router-dom";
import useLogin from "./utils/useLogin";
export const Login = () => {
  const [isLogin, setIsLogin] = useLogin()

  const submit=()=> {
    setIsLogin(true);
  }
  return (
    <Form method="post" action="/home" >
      <input type="text" name="Name" />
      <input type="password" name="Password" />
      <button type="submit" onClick={submit}>Login</button>
    </Form>
  );

};
