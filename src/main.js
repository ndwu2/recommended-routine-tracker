import { mount } from 'svelte';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './app.css';
import App from './App.svelte';

export default mount(App, { target: document.getElementById('app') });
