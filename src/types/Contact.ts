export type Contact = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;
  avatar?: string;
  language: string;
  gender: "M" | "F" | string;
};
