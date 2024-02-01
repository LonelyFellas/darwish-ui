import * as stylex from '@stylexjs/stylex';
import Style from './index.css';
import useCn from '../hook/useCn';

export interface ButtonProps
	extends React.DetailedHTMLProps<
		Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
		HTMLButtonElement
	> {
	children: React.ReactNode;
	variant?: 'text' | 'contained' | 'outlined';
	href?: string;
}

const COLOR = `rgb(25, 118, 210)`;
const styles = stylex.create({
	text: {
		backgroundColor: {
			default: 'transparent',
			':hover': 'rgba(25, 118, 210, 0.04)'
		},
		color: COLOR,
		textDecoration: 'none',
		transition:
			'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
	},
	contained: {
		boxShadow: {
			default:
				'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
			':hover':
				'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
		},
		backgroundColor: {
			default: COLOR,
			':hover': '#1565c0'
		},
		transition:
			'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		outline: 'none',
		color: '#fff'
	},
	outlined: {
		backgroundColor: {
			default: 'transparent',
			':hover': 'rgba(25, 118, 210, 0.04)'
		},
		transition:
			'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		color: COLOR,
		border: {
			default: '1px solid rgba(25, 118, 210, 0.5)',
			':hover': '1px solid #1976d2'
		}
	},
	disabled: {
		color: 'rgba(0, 0, 0, 0.26)',
		pointerEvents: 'none',
		cursor: 'default'
	}
});

export default function Button<T = null>(props: ButtonProps) {
	const { variant = 'text', disabled, href, children, ...restProps } = props;

	const classNames = useCn(Style.dar_button, [styles[variant], disabled ? styles.disabled : '']);

	const Component = href ? 'a' : 'button';

	const cmpProps = {
		...(href ? { href } : {}),
		...(disabled ? { disabled } : {})
	};
	console.log(cmpProps);

	return (
		<Component {...classNames} {...cmpProps} {...restProps}>
			{children}
		</Component>
	);
}
