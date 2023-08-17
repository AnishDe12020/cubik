"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AdminAccess } from "@cubik/database";
export interface User {
  username: string;
  profilePicture: string;
  mainWallet: string;
}
export interface CurrentOpen {
  id: string;
  name: string;
  type: "round" | "hackathon";
}

interface UserContextType {
  user: User | null;
  access: AdminAccess[];
  setAccess: (access: AdminAccess[]) => void;
  setUser: (userData: User | null) => void;
  logout: () => void;
  currentOpen: CurrentOpen | null;
  setCurrentOpen: (currentOpen: CurrentOpen) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
  access: [],
  setAccess: () => {},
  currentOpen: null,
  setCurrentOpen: () => {},
});

export const useUser = () => useContext(UserContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [access, setAccess] = useState<AdminAccess[]>([]);
  const [currentOpen, setCurrentOpen] = useState<CurrentOpen | null>(null);
  const { publicKey, disconnect } = useWallet();

  const logout = () => {
    setUser(null);
    disconnect();
  };

  useEffect(() => {
    if (user) {
      if (!publicKey) {
        setUser(null);
        return;
      }
      if (publicKey!.toString() !== user.mainWallet) {
        disconnect();
        setUser(null);
        return;
      }
    }
  }, [publicKey, user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        access,
        setAccess,
        currentOpen,
        setCurrentOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
