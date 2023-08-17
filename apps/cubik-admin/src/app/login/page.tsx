"use client";
import { Button, VStack } from "@/utils/chakra";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React, { useEffect } from "react";
import { hashCode } from "@/utils/helpers/hash";
import { GetUser } from "./getUser";
import { useUser } from "@/context/user";
import { useRouter } from "next/navigation";

function createCookie(name: string, value: number) {
  document.cookie = name + "=" + value + "; path=/";
}

const LoginPage = () => {
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const { setAccess, setUser, setCurrentOpen } = useUser();
  const router = useRouter();
  useEffect(() => {
    const createToken = async () => {
      if (!publicKey) return;
      const user = await GetUser(publicKey?.toBase58());
      if (user) {
        setUser({
          mainWallet: user.mainWallet,
          profilePicture: user.profilePicture as string,
          username: user.username as string,
        });
        if (user.AdminAccess.length === 0) return; // no access to admin
        console.log(user.AdminAccess);
        setAccess(
          user.AdminAccess.map((access) => {
            return {
              createdAt: access.createdAt,
              id: access.id,
              hackathonId: access.hackathonId,
              isActive: access.isActive,
              roundId: access.roundId,
              updatedAt: access.updatedAt,
              userId: access.userId,
            };
          })
        );
        // set current open for default open
        if (user.AdminAccess[0]?.hackathonId) {
          setCurrentOpen({
            id: user.AdminAccess[0]?.hackathonId || "",
            name: user.AdminAccess[0]?.hackathon?.name || "",
            type: "hackathon",
          });
        } else {
          setCurrentOpen({
            id: user.AdminAccess[0]?.roundId || "",
            name: user.AdminAccess[0]?.round?.name || "",
            type: "round",
          });
        }

        createCookie("adminAuth", hashCode(publicKey?.toBase58() || ""));
        router.push("/");
      }
    };
    createToken();
  }, [publicKey]);
  return (
    <>
      <VStack
        h={"100vh"}
        width={"100%"}
        display={"flex"}
        justify={"center"}
        align={"center"}
      >
        <Button onClick={() => setVisible(true)} variant={"cubikFilled"}>
          Connect Wallet
        </Button>
      </VStack>
    </>
  );
};

export default LoginPage;
