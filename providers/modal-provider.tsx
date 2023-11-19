"use client";
import React, { useEffect, useState } from "react";
import UserDataModal from "@/components/modals/UserDataModal/UserDataModal";
export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <UserDataModal />
    </>
  );
}
