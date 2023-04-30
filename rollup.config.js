import styles from "rollup-plugin-styles";
import { babel } from '@rollup/plugin-babel';
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
	input: './index.js',
	output: {
		file: './build/bundle.js',
		format: 'iife'
	}, watch: {
		exclude: 'node_modules/**'
	}, plugins: [
		babel({ babelHelpers: 'bundled' }),
		styles(),
		image({
			limit: 1000000
		}),
		serve({
			open: true,
			contentBase: './',
			port: 8000,
		}),
		livereload(),
	],
};