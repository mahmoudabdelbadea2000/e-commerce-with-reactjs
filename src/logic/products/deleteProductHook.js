import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productsActions";

const DeleteProductHook = (prodID) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onChangeModal = (e) => {
    setShowModal(e);
  };

  const handelDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteProduct(prodID));
    setShowModal((prev) => !prev);
    window.location.reload();
  };

  return { handelDelete, showModal, onChangeModal };
};

export default DeleteProductHook;
