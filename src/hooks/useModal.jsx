import { useState } from "react";

export const useModal = (autoCloseDelay = 0, onAfterClose = null) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
    if (autoCloseDelay > 0) {
      setTimeout(() => {
        setIsOpen(false);
        if (onAfterClose) onAfterClose();
      }, autoCloseDelay);
    }
  };

  const close = () => {
    setIsOpen(false);
    if (onAfterClose) onAfterClose();
  };

  return { isOpen, open, close };
};
