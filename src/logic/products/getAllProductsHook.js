import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsActions";

const GetAllProductsHook = () => {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    const get = async () => {
      const res = await dispatch(getAllProducts());
      setAllProducts(res);
    };
    get();
  }, [dispatch]);
  const { isLoading } = useSelector((state) => state.products);

  const onPress = async (page) => {
    const res = await dispatch(getAllProducts(page));
    setAllProducts(res);
  };

  let pageCount;
  if (allProducts?.payload.paginationResult) {
    pageCount = allProducts.payload.paginationResult.numberOfPages;
  } else {
    pageCount = 1;
  }

  return { allProducts, pageCount, onPress, isLoading };
};

export default GetAllProductsHook;
