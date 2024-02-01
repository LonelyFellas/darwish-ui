import * as stylex from '@stylexjs/stylex';
import Style from './index.module.css';
import useCn from '../hook/useCn';
import styles from './stylex';
import type { ButtonProps } from './type';
import type { ButtonExtendsProps } from './type';

function Button<T extends { href: string }>(props: ButtonProps<T>): React.JSX.Element;
function Button(props: ButtonProps): React.JSX.Element;
function Button<T extends { href?: string }>(props: ButtonProps<T>) {
	const { variant = 'text', disabled, href, children, ...restProps } = props;

	const classNames = useCn(Style.dar_button, [styles[variant], disabled ? styles.disabled : '']);

	const Component = href !== undefined ? 'a' : 'button';
	const hrefProps = Component === 'a' ? { href } : {};
	const disabledProps = disabled ? { disabled } : {};

	return (
		<Component {...classNames} {...hrefProps} {...disabledProps} {...restProps}>
			{children}
		</Component>
	);
}

export default Button;
