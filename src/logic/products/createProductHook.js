import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../../hooks/useNotifcation";
import avatar from "../../images/avatar.png";
import { getAllBrandsWithoutPage } from "../../redux/actions/brandActions";
import { getAllCategoriesWithoutPage } from "../../redux/actions/categoriesActions";
import { createProduct } from "../../redux/actions/productsActions";
import { getAllSubCatsOnCategory } from "../../redux/actions/subCatsActions";

const CreateProductHook = () => {
  const dispatch = useDispatch();
  const [productImg, setProductImg] = useState(avatar);
  const [productImgSelected, setProductImgSelected] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [Qty, setQty] = useState("");
  const [productCats, setProductCats] = useState([]);
  const [productCatID, setProductCatID] = useState("");
  const [productBrands, setProductBrands] = useState([]);
  const [productBrandID, setProductBrandID] = useState("");
  const [productColors, setProductColors] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [showColors, setShowColors] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const get = async () => {
      const catsRes = await dispatch(getAllCategoriesWithoutPage());
      setProductCats(catsRes.payload.data);
      const brandsRes = await dispatch(getAllBrandsWithoutPage());
      setProductBrands(brandsRes.payload.data);
    };
    get();
  }, [dispatch]);

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const handelChangeComplete = (color) => {
    setProductColors((prev) => [...prev, color.hex]);
    setShowColors(!showColors);
  };

  const handelRemoveColor = (color) => {
    const updateColors = productColors.filter((val) => {
      return val !== color;
    });
    setProductColors(updateColors);
  };

  const onChangeItems = {
    onChangeProductImg: (e) => {
      if (e.target.files && e.target.files[0]) {
        setProductImg(URL.createObjectURL(e.target.files[0]));
        setProductImgSelected(e.target.files[0]);
      }
    },
    onChangeProductName: (e) => {
      e.persist();
      setProductName(e.target.value);
    },
    onChangeProductDescription: (e) => {
      e.persist();
      setProductDescription(e.target.value);
    },
    onChangePriceBefore: (e) => {
      e.persist();
      setPriceBefore(e.target.value);
    },
    onChangePriceAfter: (e) => {
      e.persist();
      setPriceAfter(e.target.value);
    },
    onChangeQTY: (e) => {
      e.persist();
      setQty(e.target.value);
    },
    onChangeProductCatID: async (e) => {
      e.persist();
      if (e.target.value !== "0") {
        const res = await dispatch(getAllSubCatsOnCategory(e.target.value));
        setOptions(res?.payload?.data);
      }
      setProductCatID(e.target.value);
    },
    onChangeProductBrandID: (e) => {
      e.persist();
      setProductBrandID(e.target.value);
    },
    onChangeShowColor: (e) => {
      e.persist();
      setShowColors((prev) => !prev);
    },
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (productImg === avatar) {
      notify("please image", "warn");
      return;
    } else if (productCatID === "0") {
      notify("please write in all cat", "warn");
      return;
    } else if (productBrandID === "0") {
      notify("please write in all brand", "warn");
      return;
    } else if (productName === "") {
      notify("please write in all name", "warn");
      return;
    } else if (productDescription === "") {
      notify("please write in all dwscription", "warn");
      return;
    } else if (priceBefore === "") {
      notify("please write in all pricebefore", "warn");
      return;
    } else if (priceAfter === "") {
      notify("please write in all priceAfter", "warn");
      return;
    } else if (Qty === "") {
      notify("please write in all qty", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("title", productName);
    formData.append("imageCover", productImgSelected);
    formData.append("category", productCatID);
    formData.append("brand", productBrandID);
    formData.append("description", productDescription);
    formData.append("quantity", Qty);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAfter);
    productColors.map((color) => formData.append("availableColors", color));
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    setIsPress(true);
    await dispatch(createProduct(formData));
    setIsPress(false);
    setProductName("");
    setProductImg(avatar);
    setProductImgSelected(null);
    setProductCatID("");
    setProductBrandID("");
    setProductDescription("");
    setQty("");
    setPriceBefore("");
    setPriceAfter("");
    setProductColors([]);
    setSelectedSubID([]);
    notify("product add success", "success");
  };

  return {
    productImg,
    productName,
    productDescription,
    productCats,
    productBrands,
    priceBefore,
    priceAfter,
    productColors,
    showColors,
    onChangeItems,
    handelSubmit,
    isPress,
    options,
    onSelect,
    onRemove,
    handelChangeComplete,
    handelRemoveColor,
  };
};

export default CreateProductHook;
