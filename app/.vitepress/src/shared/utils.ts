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
// export function getHrefQuery(url) {
//     if (url.indexOf('?') != -1) {
//         let obj = {};
//         let arr = url.slice(url.indexOf('?') + 1).split('&');
//         arr.forEach(item => {
//             let param = item.split('=');
//             obj[param[0]] = param[1];
//         })
//         console.log(obj);//{type: "2", a: "3"}
//         alert(obj.type);
//         return obj;
//     } else {
//         console.log('没有参数');
//         alert('没有参数');
//         return null;
//     }
// }

/**
 * 是否是浏览器环境
 * @returns boolean
 */
export function isBrowser(): boolean {
  return typeof global === 'undefined';
}
