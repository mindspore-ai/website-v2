import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

// 请求前缀
const request_prefix = '/api-rank/';

export function getRank(params: object) {
  const url = `intern/points/sort/lists`;
  return request
    .get(request_prefix + url, { params })
    .then((res: AxiosResponse) => res.data);
}
