import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

const WEBSITE_TEST = window.location.host.startsWith('localhost:')
  ? 'https://www.mindspore.cn'
  : '';

export function getVideo(lang: string) {
  const url = WEBSITE_TEST + `/latestvideo/list/?lang=${lang}`;
  return request.get(url).then((res: AxiosResponse) => res.data);
}
