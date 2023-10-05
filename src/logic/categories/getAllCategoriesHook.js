import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllCategoriesWithoutPage,
} from "../../redux/actions/categoriesActions";

const GetAllCategoriesHook = () => {
  const [cats, setCats] = useState(null);
  const [catsWithoutPage, setCatsWithoutPage] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      const res = await dispatch(getAllCategories());
      setCats(res);
      const resCats = await dispatch(getAllCategoriesWithoutPage());
      setCatsWithoutPage(resCats?.payload.data);
    };
    get();
  }, [dispatch]);

  const { isLoading } = useSelector((state) => state.categories);

  const onPress = async (page) => {
    const res = await dispatch(getAllCategories(page));
    setCats(res);
  };

  let pageCount = cats?.payload.paginationResult
    ? cats.payload.paginationResult.numberOfPages
    : 1;

  return {
    cats,
    catsWithoutPage,
    pageCount,
    onPress,
    isLoading,
  };
};

export default GetAllCategoriesHook;
