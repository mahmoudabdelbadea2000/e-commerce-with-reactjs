import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrands,
  getAllBrandsWithoutPage,
} from "../../redux/actions/brandActions";

const GetAllBrandsHook = () => {
  const [brands, setBrands] = useState(null);
  const [brandsWithoutPage, setBrandsWithoutPage] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      const res = await dispatch(getAllBrands());
      setBrands(res);
      const resBrands = await dispatch(getAllBrandsWithoutPage());
      setBrandsWithoutPage(resBrands?.payload.data);
    };
    get();
  }, [dispatch]);

  const { isLoading } = useSelector((state) => state.brands);

  const onPress = async (page) => {
    const res = await dispatch(getAllBrands(page));
    setBrands(res);
  };

  let pageCount = brands?.payload.paginationResult
    ? brands.payload.paginationResult.numberOfPages
    : 1;

  return {
    brands,
    brandsWithoutPage,
    pageCount,
    onPress,
    isLoading,
  };
};

export default GetAllBrandsHook;
