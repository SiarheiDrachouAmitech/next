import { useCallback, useState } from "react";

const useIsMobile = () => {
  let [isMobile, setIsMobile] = useState(false);

  const getIsMobile = (value: boolean) => {
    setIsMobile(value);
  };

  const onCloseMobileMenu = useCallback(() => {
    setIsMobile(false);
  }, [setIsMobile]);

  return {
    isMobile,
    getIsMobile,
    onCloseMobileMenu,
  }
};

export default useIsMobile
