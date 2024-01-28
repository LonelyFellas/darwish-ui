import * as stylex from '@stylexjs/stylex';

export default function useCn(nativeClass: string, stylexClass: any[]) {
	const { className: stylexClsx } = stylex.props(stylexClass);
	return { className: `${nativeClass} ${stylexClsx}` };
}
