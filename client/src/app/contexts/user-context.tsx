import { createContext, useState } from "react";

export type User = {
  id: string;
  member_since: string;
};

type UserContext = {
  user: User;
  updateUser: (user: User) => void;
};

export const UserContext = createContext<UserContext | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    id: "",
    member_since: "",
  });

  const updateUser = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
