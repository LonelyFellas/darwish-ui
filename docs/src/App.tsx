import './App.css';
import Button from '@darwish-ui/button';
function App() {
	const handleClick = () => {
		alert('Hello world!');
	}
	return (
		<div className="h-screen flex justify-center items-center">
			<Button onClick={handleClick}>Click me</Button>
			<button className="button-base">Click me</button>
		</div>
	);
}

export default App;
