var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num *= 2;
  count++;
}

alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は'　+ count + '回です');