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

  export const getOffsetTo = (id:string) => {
    if(id){
      if(document.querySelector(`#${id}`)){
        const y = document.querySelector(`#${id}`)!.offsetTop;
        return y;
      }
    } else {
      console.error('no id');
      return '';
    }
  }

  export const scrollMove = (y:number) => {
    window.scrollTo({
      top : y,
      behavior : 'smooth'
    });
  }