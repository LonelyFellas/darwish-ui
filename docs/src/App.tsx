import './App.css';
import Button from '@darwish-ui/button';
function App() {
	const handleClick = () => {
		alert('Hello world!');
	}
	return (
		<div className="h-screen flex justify-center items-center bg-red-400">
			<Button onClick={handleClick}>Click me</Button>
		</div>
	);
}

export default App;
