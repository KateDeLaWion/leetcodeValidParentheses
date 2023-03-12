var isValid = function(s) {
    let hashMap ={"(": ")", "{": "}", "[":"]" }
    let stack =[]

    for(let ch of s) {  //loop each charactor of the string
    if(hashMap[ch]) //if hashMap[ch] exist
    stack.push(hashMap[ch]);
    else
    if(stack.pop() !== ch) return false;
    }

    if (stack.length==0) return true
    else
    return false
    //which can be written as
    //return (!stack.length)
};