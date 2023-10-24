import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productsActions";

const DeleteProductHook = (prodID) => {
  const dispatch = useDispatch();
  const [glogalState, setGlogalState] = useState({
    showModal: false,
  });

  const onChangeShowModal = (e) => {
    e.persist();
    setGlogalState({ ...glogalState, showModal: !glogalState.showModal });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteProduct(prodID));
    window.location.reload();
  };

  return { glogalState, onChangeShowModal, handleDelete };
};

export default DeleteProductHook;
