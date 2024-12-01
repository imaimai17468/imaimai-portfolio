import type { ModalProps } from "./Modal.type";

export const Modal = ({ children, title, onClose }: ModalProps) => (
	<button
		type="button"
		className="fixed cursor-default left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center"
		onClick={onClose}
	>
		<div
			className={`
        w-9/10  rounded-md border border-emerald-400 bg-background px-3 py-1 shadow-md shadow-emerald-400
    `}
		>
			<div className="flex flex-row items-center gap-3 border-b py-2">
				<button
					type="button"
					className="flex h-5 w-5 items-center justify-center rounded-md border border-emerald-400 active:bg-emerald-400 active:text-background"
					onClick={onClose}
				>
					×
				</button>
				<p className="text-xl">{title}</p>
			</div>
			<div className="p-3">{children}</div>
		</div>
	</button>
);

export default Modal;
