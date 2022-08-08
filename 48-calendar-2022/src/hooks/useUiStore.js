import { useDispatch, useSelector } from "react-redux"
import { onCloaseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {

  const dispatch = useDispatch();

  const {
    isDateModalOpen
  } = useSelector( state => state.ui );

  const openDateModal = () => {
    dispatch( onOpenDateModal() )
  }

  const closeDateModal = () => {
    dispatch( onCloaseDateModal() )
  }

  const toggleDateModal = () => {
    (isDateModalOpen)
      ? openDateModal()
      : closeDateModal();
  }

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
    toggleDateModal,
  }
}