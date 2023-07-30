import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandActions";

const GetAllBrandsHook = () => {
  const [brands, setBrands] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      const res = await dispatch(getAllBrands());
      setBrands(res);
    };
    get();
  }, [dispatch]);

  const { isLoading } = useSelector((state) => state.brands);

  const onPress = async (page) => {
    const res = await dispatch(getAllBrands(page));
    setBrands(res);
  };

  let pageCount;
  if (brands?.payload.paginationResult) {
    pageCount = brands.payload.paginationResult.numberOfPages;
  } else {
    pageCount = 1;
  }

  return { brands, pageCount, onPress, isLoading };
};

export default GetAllBrandsHook;
