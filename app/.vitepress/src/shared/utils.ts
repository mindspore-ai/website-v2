import { ElMessage } from 'element-plus';
export function getBetweenDateStr(starDay: any, endDay: any) {
  const arr = [];
  const dates = [];

  // 设置两个日期UTC时间
  const db = new Date(starDay);
  const de = new Date(endDay);

  // 获取两个日期GTM时间
  const s = db.getTime() - 24 * 60 * 60 * 1000;
  const d = de.getTime() - 24 * 60 * 60 * 1000;

  // 获取到两个日期之间的每一天的毫秒数
  for (let i = s; i <= d; ) {
    i = i + 24 * 60 * 60 * 1000;
    arr.push(parseInt(i.toString()));
  }

  // 获取每一天的时间  YY-MM-DD
  for (const j in arr) {
    const time = new Date(arr[j]);
    const mouth =
      time.getMonth() + 1 >= 10
        ? time.getMonth() + 1
        : '0' + (time.getMonth() + 1);
    const day = time.getDate() >= 10 ? time.getDate() : '0' + time.getDate();
    const YYMMDD = mouth + '月' + '-' + day + '日';
    dates.push(YYMMDD);
  }

  return dates;
}
// URL参数转对象
export function getUrlParams(url: string) {
  const arrObj = url.split('?');
  if (arrObj.length > 1) {
    const arrPara = arrObj[1].split('&');
    const list = {} as any;
    for (let i = 0; i < arrPara.length; i++) {
      const item = arrPara[i].split('=');
      const key = item[0];
      const value = item[1];
      list[key] = value;
    }
    return list;
  }
}

/**
 * 是否是浏览器环境
 * @returns boolean
 */
export function isBrowser(): boolean {
  return typeof global === 'undefined';
}

// TS 对象key合法检查
export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return Object.prototype.hasOwnProperty.call(object, key);
}

// 错误处理

export function handleError(error: any) {
  ElMessage({
    message: error,
    type: 'error',
  });
}
