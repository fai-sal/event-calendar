import './styles/_main.scss';
import { Home } from './pages';
import { ReduxProvider } from './init';

function App() {
	return (
		<ReduxProvider>
			<Home />
		</ReduxProvider>
	);
}

export default App;
