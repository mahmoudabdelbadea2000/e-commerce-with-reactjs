import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/actions/productsActions";

const GetOneProductHook = (prodID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, [dispatch, prodID]);

  const { oneProduct } = useSelector((state) => state.products);

  return { oneProduct };
};

export default GetOneProductHook;
