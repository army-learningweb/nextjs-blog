"use client"

import { useContext, createContext, useState, useEffect, useRef } from "react";

type DialogContextProps = {
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
  ipRef: React.RefObject<HTMLInputElement | null>;
};

const DialogContext = createContext<DialogContextProps | null>(null);
export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [openDialog, setOpenDialog] = useState(false);

  // Đóng mở dialog với phím tắt
  useEffect(() => {
    const keyEvent = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key == "k") {
        e.preventDefault();
        setOpenDialog(true);
      }
      if (e.key == "Escape") {
        setOpenDialog(false);
      }
    };

    window.addEventListener("keydown", keyEvent);
    return () => window.removeEventListener("keydown", keyEvent);
  }, [openDialog]);

  // Tự động focus khi mở
  const ipRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ipRef.current) {
      ipRef.current.focus();
    }
  }, [openDialog]);

  return (
    <DialogContext.Provider value={{ openDialog, setOpenDialog, ipRef }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error("Lỗi !");
  }
  return ctx;
};
