import { Form } from "react-router-dom";
export const Login = () => {
  return (
    <Form method="post" action="/home">
      <input type="text" name="Name" />
      <input type="password" name="Password" />
      <button type="submit">Login</button>
    </Form>
  );
};
