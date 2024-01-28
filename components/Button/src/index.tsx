import * as stylex from '@stylexjs/stylex';
import Style from './index.module.css';
import useCn from '../hook/useCn';

interface ButtonProps
	extends React.DetailedHTMLProps<
		Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
		HTMLButtonElement
	> {
	children: React.ReactNode;
	type?: 'primary' | 'secondary' | 'link' | 'base';
}

const styles = stylex.create({
	base: {
		backgroundColor: {
			default: '#fff',
			":hover": '#F9FAFB',
		},
		border: 0,
		borderRadius: '.5rem',
		color: '#111827',
    fontFamily: '"Inter var", ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		fontSize: '.875rem',
		lineHeight: '1.25rem',
		padding: '.75rem 1rem',
		textAlign: 'center',
		textDecoration: 'none #D1D5DB solid',
		textDecorationThickness: 'auto',
		boxShadow: {
			default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			":focus-visible": 'none',
		},
		cursor: 'pointer',
		userSelect: 'none',
		touchAction: 'manipulation',
		transitionProperty: 'background-color, border-color, color,box-shadow',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '300ms',
		":hover": {
			outline: "2px solid transparent",
			outlineOffset: '2px'
		}
		
	},
	primary: {
		backgroundColor: {
			default: '#5E5DF0',
			":hover": '#4C4BF9',
		},
		color: '#fff',
	},
	secondary: {
		color: 'green'
	},
	link: {
		color: 'yellow'
	}
});

export default function Button(props: ButtonProps) {
	const { type = 'base', children, ...restProps } = props;
	let computedStyle: keyof typeof styles = 'base';
	if (type === 'primary') {
		computedStyle = 'primary';
	} else if (type === 'secondary') {
		computedStyle = 'secondary';
	} else if (type === 'link') {
		computedStyle = 'link';
	}

	const classNames = useCn(Style.dar_button, [styles.base, styles[computedStyle]]);
	return (
		<button {...restProps} {...classNames}>
			{children}
		</button>
	);
}
