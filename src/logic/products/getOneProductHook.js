import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneBrand } from "../../redux/actions/brandActions";
import { getOneCategory } from "../../redux/actions/categoriesActions";
import { getOneProduct } from "../../redux/actions/productsActions";

const GetOneProductHook = (prodID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getOneProduct(prodID));
    };
    get();
  }, [dispatch, prodID]);

  const { oneProduct } = useSelector((state) => state.products);

  useEffect(() => {
    if (oneProduct?.data.category) {
      dispatch(getOneCategory(oneProduct?.data.category));
    }
    if (oneProduct?.data.brand) {
      dispatch(getOneBrand(oneProduct?.data.brand));
    }
  }, [dispatch, oneProduct?.data.brand, oneProduct?.data.category, prodID]);

  const { oneCategory } = useSelector((state) => state.categories);
  const { oneBrand } = useSelector((state) => state.brands);

  return { oneProduct, oneCategory, oneBrand };
};

export default GetOneProductHook;
