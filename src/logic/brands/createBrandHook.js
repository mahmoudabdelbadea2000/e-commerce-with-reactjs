import { useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../../hooks/useNotifcation";
import avatar from "../../images/avatar.png";
import { createBrand } from "../../redux/actions/brandActions";

const CreateBrandHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [imgSelected, setImgSelected] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [isPress, setIsPress] = useState(false);

  const onChangeBrandName = (e) => {
    e.persist();
    setBrandName(e.target.value);
  };
  const onChangeImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setImgSelected(e.target.files[0]);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!brandName === "" || imgSelected === null) {
      notify("please write in all inputs", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", brandName);
    formData.append("image", imgSelected);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setIsPress(false);
    notify("brand add success", "success");
    setImg(avatar);
    setBrandName("");
    setImgSelected(null);
  };

  return {
    img,
    brandName,
    onChangeBrandName,
    onChangeImg,
    handelSubmit,
    isPress,
  };
};

export default CreateBrandHook;
