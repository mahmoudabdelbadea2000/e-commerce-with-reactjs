import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hooks/useNotifcation";
import avatar from "../../images/avatar.png";
import { getAllBrandsWithoutPage } from "../../redux/actions/brandActions";
import { getAllCategoriesWithoutPage } from "../../redux/actions/categoriesActions";
import { updateProduct } from "../../redux/actions/productsActions";
import {
  getAllSubCatsOnCategory,
  getOneSubCats,
} from "../../redux/actions/subCatsActions";
import GetOneProductHook from "./getOneProductHook";

const UpdateProductHook = (prodID) => {
  const { oneProduct } = GetOneProductHook(prodID);
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
  // const [selectedSub, setSelectedSub] = useState([]);
  const [showColors, setShowColors] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [options, setOptions] = useState([]);

  // to convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  useEffect(() => {
    if (oneProduct?.data) {
      setProductImg(oneProduct?.data.imageCover);
      convertURLtoFile(oneProduct?.data.imageCover).then((val) =>
        setProductImgSelected(val)
      );
      setProductName(oneProduct?.data.title);
      setProductDescription(oneProduct?.data.description);
      setPriceBefore(oneProduct?.data.price);
      setPriceAfter(oneProduct?.data.priceAfterDiscount);
      setQty(oneProduct?.data.quantity);
      setProductCatID(oneProduct?.data.category);
      setProductBrandID(oneProduct?.data.brand);
      setProductColors(oneProduct?.data.availableColors);
      setSelectedSubID(oneProduct?.data.subcategory);
    }
  }, [oneProduct?.data]);

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

  // useEffect(() => {
  //   if (selectedSubID.length >= 1) {
  //     selectedSubID.map(async (id) => {
  //       const res = await dispatch(getOneSubCats(id));
  //       // console.log();
  //       setSelectedSub(res?.payload.data);
  //     });
  //   }
  // }, [dispatch, selectedSub, selectedSubID]);

  // const { oneSubCat } = useSelector((state) => state.subCat);
  // console.log(selectedSub);

  const onChangeItems = {
    onChangeProductImg: (e) => {
      if (e.target.files && e.target.files[0]) {
        setProductImg(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
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
    onChangeProductCatID: (e) => {
      e.persist();
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

  useEffect(() => {
    if (productCatID.length !== 0) {
      const get = async () => {
        await dispatch(getAllSubCatsOnCategory(productCatID));
      };
      get();
    }
  }, [dispatch, productCatID]);

  const { subCatsOnCategory } = useSelector((state) => state.subCat);

  useEffect(() => {
    if (subCatsOnCategory !== null) {
      setOptions(subCatsOnCategory.data);
    }
  }, [subCatsOnCategory]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (productImg === "") {
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
    await dispatch(updateProduct({ prodID, formData }));
    setIsPress(false);
    notify("product update success", "success");
  };

  return {
    productImg,
    productCatID,
    productBrandID,
    productName,
    productDescription,
    productCats,
    productBrands,
    priceBefore,
    priceAfter,
    Qty,
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

export default UpdateProductHook;
