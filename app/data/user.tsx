export type User = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  sex: "male" | "female";
};

export const userData: User[] = [
  {
    id: "0",
    firstName: "Nie",
    lastName: "Wang",
    fullName: "Nie Wang",
    age: 29,
    sex: "male",
  },
  {
    id: "1",
    firstName: "Shi",
    lastName: "Hailun",
    fullName: "Shi Hailun",
    age: 27,
    sex: "female",
  },
];
