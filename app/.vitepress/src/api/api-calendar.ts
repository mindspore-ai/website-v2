import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

// 请求前缀
const request_prefix = '/api-calendar';

export function getMeetingData() {
  const url = '/meetingsdata/';
  return request
    .get(request_prefix + url)
    .then((res: AxiosResponse) => res.data);
}
export function getActivityData() {
  const url = '/activitiesdata/';
  return request
    .get(request_prefix + url)
    .then((res: AxiosResponse) => res.data);
}

export function activityDetail(id: string) {
  const url = `/activity/${id}/`;
  return request
    .get(request_prefix + url, {})
    .then((res: AxiosResponse) => res.data);
}
