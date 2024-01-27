interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
	const { children, className, ...restProps } = props;
	return <button className="text-green-500 px-2 py-1 bg-red-500 border-soild" {...restProps} >{children}</button>;
}
