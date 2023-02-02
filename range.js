function range(start, end, step) {
  if (typeof end == 'undefined') {
        end = start;
        start = 0;
    }
    if (typeof step == 'undefined') {
        step = 1;
        if (end < 0) {
          step = -1
        }
    }
    
    let result = [];
    for (let i = start; step > 0 ? i < end : i > end; i += step) {
        result.push(i);
    }
  
    return result;
}
