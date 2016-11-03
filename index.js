function takeANumber(arr, name){
  arr.push(name);
  var num = arr.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(arr){
  if (arr.length == 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${arr.shift()}.`
  }
}

function currentLine(arr){
  if (arr.length == 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently:"
    for (var i = 0; i < arr.length; i++){
      str += ` ${i + 1}. ${arr[i]}`
      if (i < arr.length - 1){
        str += ","
      }
    }
  }
  return str;
}