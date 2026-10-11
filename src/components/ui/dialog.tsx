import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

function DialogTitle({ title }: { title: string | undefined }) {
  return <h2 className="text-lg font-medium tracking-tight">{title}</h2>;
}

function DialogClose({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Đóng hộp thoại"
      onClick={onClick}
      className="p-1.5 rounded-md hover:bg-gray-100 active:translate-y-px transition-all duration-150"
    >
      <X size={17} aria-hidden="true" />
    </button>
  );
}

function DialogDesc({ desc }: { desc?: string }) {
  return desc && <p className="text-gray-500">{desc}</p>;
}

function DialogBackDropBlur({
  openDialog,
  children,
}: {
  openDialog: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex justify-center items-center fixed z-50 top-0 left-0 bg-black/10 w-full h-full backdrop-blur-[1px] transition-all duration-150 
              ${
                openDialog
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
    >
      {children}
    </div>
  );
}

function DialogWrapper({
  children,
  openDialog,
}: {
  children: React.ReactNode;
  openDialog: boolean;
}) {
  return (
    <div
      className={`w-100 h-fit bg-white border border-gray-300 shadow rounded-xl overflow-hidden transition-all duration-150 ease-out
        ${openDialog ? "scale-100 opacity-100" : "scale-95 opacity-0"}
      `}
    >
      {children}
    </div>
  );
}

function DialogHeader({
  title,
  onClose,
}: {
  title: string | undefined;
  onClose: () => void;
}) {
  return (
    <div className="flex justify-between items-center ">
      <DialogTitle title={title} />
      <DialogClose onClick={onClose} />
    </div>
  );
}

function DialogContent({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>;
}

function DialogFooter({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gray-100 border-t border-gray-200 py-3 px-4 flex gap-2 justify-end">
      <Button type="button" variant="outline" onClick={onClose}>
        Đóng
      </Button>
      <Button>Thêm mới</Button>
    </div>
  );
}

export default function Dialog({
  openDialog = false,
  onClose,
  children,
  title,
  desc,
}: {
  openDialog?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  desc?: string;
}) {
  return (
    <DialogBackDropBlur openDialog={openDialog}>
      <DialogWrapper openDialog={openDialog}>
        <div className="p-4 space-y-2">
          <DialogHeader title={title} onClose={onClose} />
          <DialogDesc desc={desc} />
          <DialogContent>{children}</DialogContent>
        </div>
        <DialogFooter onClose={onClose} />
      </DialogWrapper>
    </DialogBackDropBlur>
  );
}
