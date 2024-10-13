import { User } from "../data/user";

export default function UserInfo(props: { user: User }) {
  const user = props.user;
  return (
    <div className="flex flex-col border p-2 max-w-44">
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
      <span>Full Name: {user.fullName}</span>
      <span>sex: {user.sex}</span>
      <span>age: {user.age}</span>
    </div>
  );
}
