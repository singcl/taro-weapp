import { createPinia } from 'pinia';
import { useApp } from './app';
import { useAuth } from './auth';
import { useCounterStore } from './counter';

export const store = createPinia();
export { useApp, useAuth, useCounterStore };
