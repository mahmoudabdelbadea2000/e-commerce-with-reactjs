import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hooks/useNotifcation";
import avatar from "../../images/avatar.png";
import { getAllBrandsNonPage } from "../../redux/actions/brandActions";
import { getAllCategoriesNonPage } from "../../redux/actions/categoriesActions";
import {
  getOneProduct,
  updateProduct,
} from "../../redux/actions/productsActions";
import { getSubCatsOnCategory } from "../../redux/actions/subCatsActions";

const UpdateProductHook = (prodID) => {
  const dispatch = useDispatch();
  const [globalProductState, setGlobalProductState] = useState({
    img: avatar,
    imgSelected: null,
    prodName: "",
    description: "",
    QTY: "",
    priceBefore: "",
    priceAfter: "",
    catID: "",
    brandID: "",
    options: [],
    subCatsSelected: [],
    colors: [],
    showColor: false,
    isPress: false,
  });

  const onChangeItems = {
    img: (e) => {
      if (e.target.files && e.target.files[0]) {
        setGlobalProductState({
          ...globalProductState,
          img: URL.createObjectURL(e.target.files[0]),
          imgSelected: e.target.files[0],
        });
      }
    },
    prodName: (e) => {
      e.persist();
      setGlobalProductState({
        ...globalProductState,
        prodName: e.target.value,
      });
    },
    description: (e) => {
      e.persist();
      setGlobalProductState({
        ...globalProductState,
        description: e.target.value,
      });
    },
    QTY: (e) => {
      e.persist();
      setGlobalProductState({
        ...globalProductState,
        QTY: e.target.value,
      });
    },
    priceBefore: (e) => {
      e.persist();
      setGlobalProductState({
        ...globalProductState,
        priceBefore: e.target.value,
      });
    },
    priceAfter: (e) => {
      e.persist();
      setGlobalProductState({
        ...globalProductState,
        priceAfter: e.target.value,
      });
    },
    catID: async (e) => {
      e.persist();
      setGlobalProductState({
        ...globalProductState,
        catID: e.target.value,
      });
    },
    brandID: (e) => {
      e.persist();
      setGlobalProductState({
        ...globalProductState,
        brandID: e.target.value,
      });
    },
    select: (selectedList, selectedItem) => {
      setGlobalProductState({
        ...globalProductState,
        subCatsSelected: selectedList,
      });
    },
    remove: (selectedList, removedItem) => {
      setGlobalProductState({
        ...globalProductState,
        subCatsSelected: selectedList,
      });
    },
    color: (color) => {
      setGlobalProductState({
        ...globalProductState,
        colors: [...globalProductState.colors, color.hex],
        showColor: !globalProductState.showColor,
      });
    },
    showColor: (e) => {
      setGlobalProductState({
        ...globalProductState,
        showColor: !globalProductState.showColor,
      });
    },
    removeColor: (color) => {
      setGlobalProductState({
        ...globalProductState,
        colors: globalProductState.colors.filter((item) => {
          return item !== color;
        }),
      });
    },
  };

  const { allCategories } = useSelector((state) => state.categories);
  const { allBrands } = useSelector((state) => state.brands);
  const { subCatsOnCats } = useSelector((state) => state.subCat);
  const { oneProduct } = useSelector(
    (state) => state.products
  );

  // to get categories and brands
  useEffect(() => {
    const get = async () => {
      await dispatch(getOneProduct(prodID));
      await dispatch(getAllCategoriesNonPage());
      await dispatch(getAllBrandsNonPage());
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // to implement the values to states
  useEffect(() => {
    if (oneProduct?.data) {
      setGlobalProductState({
        ...globalProductState,
        img: oneProduct?.data?.imageCover,
        prodName: oneProduct?.data?.title,
        description: oneProduct?.data?.description,
        QTY: oneProduct?.data?.quantity,
        priceBefore: oneProduct?.data?.price,
        priceAfter: oneProduct?.data?.priceAfterDiscount,
        catID: oneProduct?.data?.category,
        brandID: oneProduct?.data?.brand,
        colors: oneProduct?.data?.availableColors,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneProduct?.data]);

  // to import subcategory when you select category
  useEffect(() => {
    if (globalProductState.catID !== "0" && globalProductState.catID !== "") {
      const get = async () => {
        await dispatch(getSubCatsOnCategory(globalProductState.catID));
      };
      get();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalProductState.catID]);

  useEffect(() => {
    if (subCatsOnCats?.data) {
      setGlobalProductState({
        ...globalProductState,
        options: subCatsOnCats?.data,
      });
    } else setGlobalProductState({ ...globalProductState, options: [] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCatsOnCats?.data]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (
      globalProductState.imgSelected === null ||
      globalProductState.prodName === "" ||
      globalProductState.description === "" ||
      globalProductState.QTY === "" ||
      globalProductState.priceBefore === "" ||
      globalProductState.priceAfter === "" ||
      globalProductState.catID === "" ||
      globalProductState.brandID === ""
    ) {
      notify("please complete all inputs", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("title", globalProductState.prodName);
    formData.append("description", globalProductState.description);
    formData.append("quantity", globalProductState.QTY);
    formData.append("price", globalProductState.priceBefore);
    formData.append("priceAfterDiscount", globalProductState.priceAfter);
    formData.append("category", globalProductState.catID);
    formData.append("brand", globalProductState.brandID);
    formData.append("imageCover", globalProductState.imgSelected);
    globalProductState.colors.map((color) =>
      formData.append("availableColors", color)
    );
    globalProductState.subCatsSelected.map((item) =>
      formData.append("subcategory", item._id)
    );
    setGlobalProductState({ ...globalProductState, isPress: true });
    await dispatch(updateProduct({ prodID, formData }));
    setGlobalProductState({ ...globalProductState, isPress: false });
    notify("update product done", "success");
  };

  return {
    globalProductState,
    onChangeItems,
    allBrands,
    allCategories,
    handleUpdateProduct,
  };
};

export default UpdateProductHook;
