import { useEffect } from "react";

const useDetectClickOutside = (ref, handlerFunction) => {
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        handlerFunction(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [ref, handlerFunction]);
};

export { useDetectClickOutside };
