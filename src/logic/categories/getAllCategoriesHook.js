import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoriesActions";

const GetAllCategoriesHook = () => {
  const [cats, setCats] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      const res = await dispatch(getAllCategories());
      setCats(res);
    };
    get();
  }, [dispatch]);

  const { isLoading } = useSelector((state) => state.categories);

  const onPress = async (page) => {
    const res = await dispatch(getAllCategories(page));
    setCats(res);
  };

  let pageCount;
  if (cats?.payload.paginationResult) {
    pageCount = cats.payload.paginationResult.numberOfPages;
  } else {
    pageCount = 1;
  }

  return { cats, pageCount, onPress, isLoading };
};

export default GetAllCategoriesHook;
