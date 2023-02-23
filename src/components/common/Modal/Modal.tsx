import { ModalProps } from "./Modal.type";
import { motion } from "framer-motion";

export const Modal = ({ children, isOpen, title, onClose }: ModalProps) => {
  return (
    <div
      className={`
         absolute z-10  translate-x-1/2 translate-y-1/2 border-2 w-72 sm:w-1/2 h-fit border-accent rounded-md bg-primary shadow-md shadow-accent p-3
        ${isOpen ? "opacity-100" : "opacity-0 hidden"}
    `}
    >
      <div className="flex flex-row gap-3 items-center mb-3 border-b-2 pb-2">
        <button
          className="border-2 border-accent rounded-md w-6 flex justify-center"
          onClick={onClose}
        >
          <span className="mx-auto cursor-pointer" onClick={onClose}>
            ×
          </span>
        </button>
        <p className="text-xl">{title}</p>
      </div>
      <div className="modal__content">{children}</div>
    </div>
  );
};

export default Modal;
