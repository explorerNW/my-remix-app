import { json, useLoaderData } from "@remix-run/react";
import { User, userData } from "../data/user";
import UserInfo from "./user-info";

export const loader = async ({ params }: { params: { userId: string } }) => {
  if (!params.userId) {
    throw new Response("userId is required", { status: 403 });
  }
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(params.userId);
    }, 2000);
  });

  const data = await promise;

  return json({ id: data });
};

export default function UserInfoById() {
  let user;
  const { id } = useLoaderData<typeof loader>();
  if (id) {
    user = userData.find(
      (user) => user.id.toString().trim() === id.toString().trim()
    ) as User;
    if (!user)
      return (
        <div className="border p-2 w-44 h-44">
          <span>no data</span>
        </div>
      );
  } else {
    throw new Response("no user id", { status: 403 });
  }

  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
}
