import { onMount } from 'solid-js';
import './App.css';
import { Route, Routes } from '@solidjs/router';
import { Toaster } from 'solid-toast';
import HomePage from './pages/home.tsx';

function App() {
	onMount(() => {
		let ASCII = `                                                  
    █████   ███    ███ ██████  ██ ███████ ███    ██ ████████       
    ██   ██ ████  ████ ██   ██ ██ ██      ████   ██    ██    
    ███████ ██ ████ ██ ██████  ██ █████   ██ ██  ██    ██    
    ██   ██ ██  ██  ██ ██   ██ ██ ██      ██  ██ ██    ██    
    ██   ██ ██      ██ ██████  ██ ███████ ██   ████    ██    
    `;

		ASCII += `\n    Using Ambient at work? Work with me on your next project!
    https://kevintyj.com
    `;
		// eslint-disable-next-line no-console
		console.log(`%c${ASCII}`, `font-family: monospace; color: #F13D52; `);
	});

	return (
		<>
			<Toaster
				position="bottom-right"
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					className: '',
					duration: 2000,
				}}
			/>
			<div class="z-50 min-h-screen flex flex-col justify-between bg-white dark:bg-[#181819]">
				<main role="main" class="my-auto lg:px-4">
					<div class="h-14">
					</div>
					<Routes>
						<Route path="/" component={HomePage} />
					</Routes>
					<div class="h-20">
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
