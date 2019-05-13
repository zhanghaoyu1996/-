/* 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
例如，输入 emoji.png，返回 .png。 

function extname(filename) {
    if (filename.indexOf('.') != -1&&filename.split('.')[0].length!=0) {
        return '.' + filename.split('.')[filename.split('.').length-1]
    }else{
        return ""
    }
}
*/



/* 完成一个函数 partition3way，它接受一个数组作为参数。它会搬动数组中的元素，使得所有小于第一个项的元素都搬动到它的左边，所有大于第一个项的元素都搬动到右边，等于它的都放在中间。例如：

const arr = [3, 1, 3, 6, 2, 3, 4, 5]
partition3way(arr)
console.log(arr) // => [2, 1, 3, 3, 3, 6, 4, 5] or [1, 2, 3, 3, 3, 4, 5, 6]

输入的数组的第一个项是 3，所以最后小于 3 的 1、2 的都到了左边，大于 3 的 4， 5， 6 都到了右边，3 都放在了中间。
请你在不能使用任何数组原生方法，只能使用循环和赋值的情况下完成 partition3way 函数。 
const arr = [3, 1, 3, 6, 2, 3, 4, 5]
const partition3way = (arr) => {
    var len = arr.length;
    var max = 0; // 定义一个变量max,用于保存数组中的最大值。
    var num = 0; // 定义一个变量num,用于保存数组中最大值的位置。
    var mid = 0; // 定义一个变量mid,用于交换最大值和最后一个值。
    for (var i = len - 1; i > 0; i--) {
        max = arr[0];
        for (var j = 0; j <= i; j++) {
            if (max <= arr[j]) {
                max = arr[j]; // 获取数组中最大值
                num = j;
            }
        }
        mid = arr[i]; // 将数组最后一个元素的值赋给中间变量；
        arr[num] = mid; // 将中间变量赋给最大值的元素；
        arr[i] = max; // 将最大值赋给数组最后一个元素；
    }
    return arr;
}

partition3way(arr)
console.log(arr)
*/