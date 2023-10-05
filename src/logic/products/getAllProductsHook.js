import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsActions";

const GetAllProductsHook = () => {
  const dispatch = useDispatch();
  // const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    dispatch(getAllProducts());
    // const getProducts = async () => {
    //   const res = await dispatch(getAllProducts());
    //   setAllProducts(res.payload);
    // };
    // getProducts();
  }, [dispatch]);

  const onPress = async (page) => {
    await dispatch(getAllProducts(page));
    // const res = await dispatch(getAllProducts(page));
    // setAllProducts(res.payload);
  };

  const { isLoading, allProducts } = useSelector((state) => state.products);

  let pageCount = allProducts?.paginationResult
    ? allProducts?.paginationResult.numberOfPages
    : 1;

  return { allProducts, pageCount, onPress, isLoading };
};

export default GetAllProductsHook;
