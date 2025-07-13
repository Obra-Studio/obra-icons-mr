declare module '*.vue' {
	import { DefineComponent } from 'src/vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
