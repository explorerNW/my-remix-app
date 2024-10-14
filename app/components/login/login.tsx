import { Form } from "@remix-run/react";
import "./login.css";
import { userList, User } from "../../data/user";

export const loginHandler = (
  activeUser: User,
  name: string,
  password: string
) => {
  if (name && password) {
    const user = userList.find((user) => user.fullName === name);
    if (user && password === "admin@me") {
      user.login = true;
      activeUser.id = user.id;
      activeUser.firstName = user.firstName;
      activeUser.lastName = user.lastName;
      activeUser.fullName = user.fullName;
      activeUser.age = user.age;
      activeUser.login = user.login;
      activeUser.sex = user.sex;
    }
  }
};

export function Login() {
  return (
    <Form id="login" method="post">
      <div className="absolute center border">
        <header>Login</header>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center justify-between">
            <span>User Name: </span>
            <input type="text" name="name" />
          </div>
          <div className="flex flex-row gap-2 items-center justify-between">
            <span>Pass Word: </span>
            <input type="password" name="password" />
          </div>
          <div className="flex justify-end pr-4">
            <button type="submit">login</button>
          </div>
        </div>
      </div>
    </Form>
  );
}
