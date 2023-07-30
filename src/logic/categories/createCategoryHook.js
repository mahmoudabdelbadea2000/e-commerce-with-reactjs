import { useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../../hooks/useNotifcation";
import avatar from "../../images/avatar.png";
import { createCategory } from "../../redux/actions/categoriesActions";

const CreateCategoryHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [imgSelected, setImgSelected] = useState(null);
  const [catName, setCatName] = useState("");
  const [isPress, setIsPress] = useState(false);

  const onChangeCatName = (e) => {
    e.persist();
    setCatName(e.target.value);
  };
  const onChangeImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setImgSelected(e.target.files[0]);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!catName === "" || imgSelected === null) {
      notify("please write in all inputs", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", catName);
    formData.append("image", imgSelected);
    setIsPress(true);
    await dispatch(createCategory(formData));
    setIsPress(false);
    notify("category add success", "success");
    setImg(avatar);
    setCatName("");
    setImgSelected(null);
  };

  return {
    img,
    catName,
    onChangeCatName,
    onChangeImg,
    handelSubmit,
    isPress,
  };
};

export default CreateCategoryHook;
