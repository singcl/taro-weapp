import { createPinia } from 'pinia';
import { useAuth } from './auth';
import { useCounterStore } from './counter';

export const store = createPinia();
export { useAuth, useCounterStore };
