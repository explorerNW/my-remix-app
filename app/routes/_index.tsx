import type { MetaFunction } from "@remix-run/node";
import { json, Link, redirect } from "@remix-run/react";
import { currentUser } from "../data/user";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  return json({});
  if (currentUser.login) {
    return json({});
  } else {
    return redirect("/login");
  }
};

export default function Index() {
  return (
    <div className="flex flex-col h-full">
      <h2>Index page</h2>
      <div>
        <ul>
          <li>
            <Link to="/user/0">user-Nie Wang</Link>
          </li>
          <li>
            <Link to="/user/1">user-Shi Hailun</Link>
          </li>
          <li>
            <Link to="/user/3">user-Shi Hailun - fake</Link>
          </li>
          <li>
            <Link to="/list">user-list</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
