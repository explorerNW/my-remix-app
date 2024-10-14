export type User = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  sex: "male" | "female";
  login: boolean;
};

export const userList: User[] = [
  {
    id: "0",
    firstName: "Nie",
    lastName: "Wang",
    fullName: "Nie Wang",
    age: 29,
    sex: "male",
    login: false,
  },
  {
    id: "1",
    firstName: "Shi",
    lastName: "Hailun",
    fullName: "Shi Hailun",
    age: 27,
    sex: "female",
    login: false,
  },
];

export const currentUser = {} as User;
