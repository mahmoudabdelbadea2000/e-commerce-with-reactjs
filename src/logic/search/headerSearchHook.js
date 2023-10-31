import { useEffect, useState } from "react";
import ViewSearchProductHook from "./ViewSearchProductHook";

const HeaderSearchHook = () => {
  const { getProducts } = ViewSearchProductHook();
  const [searchWord, setSearchWord] = useState("");

  const onChangeWord = (e) => {
    e.persist();
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/products") {
      window.location.href = "/products";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);

  return { searchWord, onChangeWord };
};

export default HeaderSearchHook;
