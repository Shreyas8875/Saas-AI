"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0012551b-54a4-47b9-b89c-2ca5baf9c14d");
  }, []);

  return null;
};
