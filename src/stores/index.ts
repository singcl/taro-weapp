import { createPinia } from 'pinia';
import { useApp } from './app';
import { useAuth } from './auth';

export const store = createPinia();
export { useApp, useAuth };
