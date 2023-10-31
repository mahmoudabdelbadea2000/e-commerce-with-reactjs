import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/actions/productsActions";

const ViewSearchProductHook = () => {
  const dispatch = useDispatch();
  const { isLoading, searchProducts } = useSelector((state) => state.products);
  let limit = 4,
    word = "",
    sort = "",
    queryBrand = "",
    queryCat = "";

  if (localStorage.getItem("searchWord") !== null) {
    word = localStorage.getItem("searchWord");
  }
  if (localStorage.getItem("sort") !== null) {
    sort = localStorage.getItem("sort");
  }
  if (localStorage.getItem("catCheked") !== null) {
    queryCat = localStorage.getItem("catCheked");
  }
  if (localStorage.getItem("brandCheked") !== null) {
    queryBrand = localStorage.getItem("brandCheked");
  }

  const getProducts = async () => {
    await dispatch(
      searchProduct(
        `limit=${limit}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}`
      )
    );
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPress = async (page) => {
    await dispatch(
      searchProduct(
        `limit=${limit}&page=${page}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}`
      )
    );
  };

  return { searchProducts, onPress, isLoading, getProducts };
};

export default ViewSearchProductHook;
