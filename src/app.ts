import { createApp } from 'vue';

import components from '@/components';
import '@/services/http';
import { store } from '@/stores';

import App from './App.vue';

const app = createApp(App);

app.use(components);
app.use(store);

export default app;
