import { createPinia } from 'pinia';
import { useAuth } from './auth';
import { useCounterStore } from './counter';

export const pinia = createPinia();
export { useAuth, useCounterStore };
