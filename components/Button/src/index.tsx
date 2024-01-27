import "./index.css"
interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
	const { children, className, ...restProps } = props;
	return <button className="dar-button-base" {...restProps} >{children}</button>;
}
