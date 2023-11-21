import type { Component } from 'solid-js';

const HomePage: Component = () => {
	return (
		<>
			<div class="w-full flex justify-center px-4 pt-6 sm:px-6 md:pt-8">
				<div class="w-full max-w-screen-2xl flex flex-col gap-y-1 pb-6">
					<h1 class="text-3xl font-semibold font-display text-slate-800 dark:text-slate-200">
						Ambient Shadow Tool
					</h1>
				</div>
			</div>
		</>
	);
};

export default HomePage;
