import { createContext } from "react";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const profile = {
    name: "John Doe",
    address: "40 Rue Laure Diebold",
    city: "69009 Lyon, France",
    phone: "06 20 30 40 50",
    email: "john.doe@gmail.com",
  };

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}