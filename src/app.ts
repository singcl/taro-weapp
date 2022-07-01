import { createApp } from 'vue';

import components from '@/components';
import '@/services/http';
import { pinia } from '@/stores';

import App from './App.vue';

const app = createApp(App);

app.use(components);
app.use(pinia);

export default app;
