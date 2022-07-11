import { BASE_URL } from '@/config';

export function ensureAvatarUrl(url: string) {
  if (/^https?:\/\//.test(url)) {
    return url;
  }
  return `${BASE_URL}/${url}`;
}
