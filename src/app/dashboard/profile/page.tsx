"use client";
import React from "react";
import { useSession } from "next-auth/react";

 const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col">
      <span>{session?.user?.image ?? "No Image"}</span>
      <span>{session?.user?.email ?? "No email"}</span>
      <span>{session?.user?.name ?? "No name"}</span>
      <span>{session?.user?.roles?.join(" ") ?? ["client"]}</span>
      <span>{session?.user?.id}</span>
    </div>
  );
};

export default ProfilePage;
