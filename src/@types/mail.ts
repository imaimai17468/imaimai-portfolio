export type Mail = {
	name: string;
	email: string;
	message: string;
};

export const isMail = (arg: unknown): arg is Mail =>
	typeof arg === "object" &&
	arg !== null &&
	typeof (arg as Mail).name === "string" &&
	typeof (arg as Mail).email === "string" &&
	typeof (arg as Mail).message === "string";

// isEmailの何に引っかかったかを返す
export const isMailError = (arg: unknown): string | null => {
	if (typeof arg !== "object" || arg === null) return "object";
	if (typeof (arg as Mail).name !== "string") return "name";
	if (typeof (arg as Mail).email !== "string") return "email";
	if (typeof (arg as Mail).message !== "string") return "message";
	return null;
};
