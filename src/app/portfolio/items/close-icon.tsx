import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  onClose: () => void;
}

export const CloseIcon: React.FC<Props> = ({ onClose }) => {
  const [close, setClose] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setClose(true);
  }, []);

  if (!close) return null;

  return createPortal(
    <img
      src="/icon/ic-close-default.svg"
      alt="close"
      width={24}
      height={24}
      onClick={onClose}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        top: 8,
        right: 8,
        zIndex: 9999,
        cursor: "pointer",
        opacity: hover ? 1 : 0.8,
        transition: "opacity 0.2s",
      }}
    />,
    document.body
  );
};
