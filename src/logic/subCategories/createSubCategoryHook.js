import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../../hooks/useNotifcation";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import { createSubCategory } from "../../redux/actions/subCatsActions";

const CreateSubCategoryHook = () => {
  const dispatch = useDispatch();
  const [subName, setSubName] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState(null);
  const [isPress, setIsPress] = useState(false);

  useEffect(() => {
    const get = async () => {
      const res = await dispatch(getAllCategories());
      setCategories(res.payload.data);
    };
    get();
  }, [dispatch]);

  const onChangesubName = (e) => {
    e.persist();
    setSubName(e.target.value);
  };
  const onChangeCatID = (e) => {
    e.persist();
    setCategoryID(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (subName === "" || categoryID === "0") {
      notify("please write in all inputs", "warn");
      return;
    }
    setIsPress(true);
    await dispatch(
      createSubCategory({
        name: subName,
        category: categoryID,
      })
    );
    setIsPress(false);
    notify("sub category add success", "success");
    setCategoryID("0");
    setSubName("");
  };

  return {
    subName,
    onChangesubName,
    onChangeCatID,
    categories,
    handelSubmit,
    isPress,
  };
};

export default CreateSubCategoryHook;
