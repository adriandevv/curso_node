// Utilidad para combinar clases condicionalmente (similar a shadcn)
export function cn(...inputs) {
	return inputs
		.flat(Infinity)
		.filter(Boolean)
		.join(' ');
}
