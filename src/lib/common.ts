/**
 * 1000단위 콤마 반환
 * @param num {*}
 * @returns {string}
 */
 export const numComma = (num:number):string => {
    if (!num) {
      return '';
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };