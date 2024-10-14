import { ActionFunctionArgs, json } from "@remix-run/node";
import { Login as LoginUi } from "../components/login/login";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  Object.fromEntries(formData) as { name: string; password: string };
  return json({});
};

export default function Login() {
  return <LoginUi />;
}
