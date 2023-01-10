export function getBetweenDateStr(starDay: any, endDay: any) {
  let arr = [];
  let dates = [];

  // 设置两个日期UTC时间
  let db = new Date(starDay);
  let de = new Date(endDay);

  // 获取两个日期GTM时间
  let s = db.getTime() - 24 * 60 * 60 * 1000;
  let d = de.getTime() - 24 * 60 * 60 * 1000;

  // 获取到两个日期之间的每一天的毫秒数
  for (let i = s; i <= d; ) {
    i = i + 24 * 60 * 60 * 1000;
    arr.push(parseInt(i.toString()));
  }

  // 获取每一天的时间  YY-MM-DD
  for (let j in arr) {
    let time = new Date(arr[j]);
    let mouth =
      time.getMonth() + 1 >= 10
        ? time.getMonth() + 1
        : '0' + (time.getMonth() + 1);
    let day = time.getDate() >= 10 ? time.getDate() : '0' + time.getDate();
    let YYMMDD = mouth + '月' + '-' + day + '日';
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
