import { auth } from "@/auth";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import Profileform from "./profile-form";

export const metadata: Metadata = {
  title: "Customer Profile",
};

export default async function ProfilePage() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="h2-bold">Profile</h2>
        <Profileform />
      </div>
    </SessionProvider>
  );
}
