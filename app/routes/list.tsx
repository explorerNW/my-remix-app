import { json } from "@remix-run/node";
import { userData } from "../data/user";
import { useLoaderData } from "@remix-run/react";
import UserInfo from "./user-info";
export async function loader() {
  return json({ list: userData });
}

const UserList = () => {
  const { list } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-row gap-2">
      {list.map((user, index) => {
        return (
          <div className="relative w-[10rem]" key={index}>
            <UserInfo user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
