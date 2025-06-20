import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function CloseIconPortal({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <img
      src="/icon/ic-close.png"
      alt="close"
      width={24}
      height={24}
      onClick={onClose}
      style={{
        position: "fixed",
        top: 8,
        right: 8,
        zIndex: 9999,
        cursor: "pointer",
        opacity: 0.8,
      }}
    />,
    document.body
  );
}
