var CustomMath = function()
{
  this.multiply = function(val1, val2)
  {
    let main_val = 0
    let times = 0
    let result = 0

    val1 = parseInt(val1)
    val2 = parseInt(val2)
    if (isNaN(val1) || isNaN(val2)) return '?';

    if (val1 < 0 && val2 < 0) {
      val1 = 0-val1
      val2 = 0-val2
    }

    if (val1 > 0) {
      main_val = val2
      times = val1
    }else if(val2 > 0){
      main_val = val1
      times = val2
    }

    for (let i = 0; i < times; i++) {
      result += main_val
    }
    return result
  }
}
