import './App.css';
import Button from '@darwish-ui/button';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
	base: {
		minHeight: '100vh',
		display: 'grid',
		placeItems: 'center',
		backgroundColor: 'gray'
		// fontSize: 26,
		// lineHeight: 1.5,
		// color: 'grey',
	}
});

function App() {
	const handleClick = () => {
		alert('Hello world!');
	};
	return (
		<div {...stylex.props(styles.base)}>
			<Button onClick={handleClick} type="primary">Click me</Button>
		</div>
	);
}

export default App;
