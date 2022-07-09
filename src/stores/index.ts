import { createPinia } from 'pinia';
import { useAuthStore } from './auth';
import { useCounterStore } from './counter';

export const pinia = createPinia();
export { useAuthStore, useCounterStore };
