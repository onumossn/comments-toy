export class Comment {
  id: string;
  title: string;
  text: string;
  tags: string[] = [];

  static CALC_REGEX = /(\d+(\+|\-))+\d+/g;
  static NUM_SPLITTER = /\+|\-/;
  static OPS_SPLITTER = /\d+/;

  static formattedText(text) {
    return text.replace(Comment.CALC_REGEX, (exp) => {
      const nums = exp.split(Comment.NUM_SPLITTER).map(v => parseFloat(v));
      const ops = exp.split(Comment.OPS_SPLITTER).filter(v => v);
      let res = nums[0];
      nums.unshift();

      nums.forEach((v, i) => {
        if (ops[i] === '+') {
          res += v;
        } else {
          res -= v;
        }
      });
      
      return res.toString();
    });
  }
}
