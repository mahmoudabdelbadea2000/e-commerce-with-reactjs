import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hooks/useNotifcation";
import avatar from "../../images/avatar.png";
import { getAllBrandsNonPage } from "../../redux/actions/brandActions";
import { getAllCategoriesNonPage } from "../../redux/actions/categoriesActions";
import { createProduct } from "../../redux/actions/productsActions";
import { getSubCatsOnCategory } from "../../redux/actions/subCatsActions";

const CreateProductHook = () => {
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
      if (e.target.value !== "0") {
        await dispatch(getSubCatsOnCategory(e.target.value));
      }
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

  // to get categories and brands
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategoriesNonPage());
      await dispatch(getAllBrandsNonPage());
    };
    get();
  }, []);

  // to import subcategory when you select category
  useEffect(() => {
    if (globalProductState.catID !== "0") {
      if (subCatsOnCats?.data) {
        setGlobalProductState({
          ...globalProductState,
          options: subCatsOnCats?.data,
        });
      }
    } else setGlobalProductState({ ...globalProductState, options: [] });
  }, [globalProductState.catID]);

  const handleCreateProduct = async (e) => {
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
    await dispatch(createProduct(formData));
    setGlobalProductState({ ...globalProductState, isPress: false });
  };

  const { allCategories } = useSelector((state) => state.categories);
  const { allBrands } = useSelector((state) => state.brands);
  const { subCatsOnCats } = useSelector((state) => state.subCat);
  const { isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (isLoading === false) {
      setGlobalProductState({
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
      notify("create product done", "success");
    }
  }, [isLoading]);

  return {
    globalProductState,
    onChangeItems,
    allBrands,
    allCategories,
    handleCreateProduct,
  };
};

export default CreateProductHook;
