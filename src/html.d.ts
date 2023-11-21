import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'solid-js' {
	namespace JSX {
		/* eslint-disable-next-line */
		interface HTMLAttributes<T> extends AttributifyAttributes {}
	}
}
