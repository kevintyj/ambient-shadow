/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import { Router } from '@solidjs/router';
import App from './App';

const root = document.getElementById('root');

render(() => (
	<Router>
		<App />
	</Router>
), root!);
