export type ButtonExtendsProps<T extends { href?: string } = {}> = T extends { href: string }
	? React.AnchorHTMLAttributes<HTMLAnchorElement>
	: React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps<T extends { href?: string } = {}> = ButtonExtendsProps<T> & {
	children: React.ReactNode;
	variant?: 'text' | 'contained' | 'outlined';
	href?: string;
};
