import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Loading from "./components/loading/loading";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <div className="h-[3rem] border">
        <h2>header</h2>
        <div className="flex gap-2 flex-row">
          <Link to="/">Home</Link>
          <button
            onClick={() => {
              navigate(-1);
            }}
            type="button"
          >
            Back
          </button>
        </div>
      </div>
      <div className="flex-1 p-4">
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
        <div className="relative">
          <Loading loading={navigation.state === "loading"} />
          <Outlet />
        </div>
      </div>
      <div className="h-[3rem] border">
        <h2>footer</h2>
      </div>
    </div>
  );
}
