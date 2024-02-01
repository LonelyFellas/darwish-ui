import './App.css';
import Button from '@darwish-ui/button';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
	base: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	flexGap: {
		display: 'flex',
		columnGap: '10px'
	}
});

function App() {
	const handleClick = () => {
		alert('Hello world!');
	};
	return (
		<div {...stylex.props(styles.base)}>
			<div {...stylex.props(styles.flexGap)}>
				<Button onClick={handleClick}>Click me</Button>
				<Button onClick={handleClick} variant="text">
					Click me
				</Button>
				<Button onClick={handleClick} variant="contained">
					Click me
				</Button>
				<Button onClick={handleClick} variant="outlined">
					Click me
				</Button>
			</div>
			<div {...stylex.props(styles.flexGap)}>
				<Button onClick={handleClick} disabled>
					Click me
				</Button>
				<Button onClick={handleClick} href="#text-buttons">
					Click me
				</Button>
			</div>
		</div>
	);
}

export default App;
