//해당 문제는 본질적으로 피보나치 문제입니다.
//패턴 자체가 피보나치와 동일하기 때문에 메모이제이션을 사용해 문제를 해결할 수 있습니다.
//패턴을 찾는 과정은 이렇습니다.

//    input             output
//입력인자 1일때 가정 ->      1
//a
//a

//입출력예시 2      ->      2
//ab   aa                              
//ab   bb 

//입력인자 3일때 가정 ->      3
//abc  aac  abb                              
//abc  bbc  acc

//입출력예시 4      ->      5
// 2 | a b c d
// 1 | a b c d 

// 2 | a a c c
// 1 | b b d d 

// 2 | a b c c
// 1 | a b d d 

// 2 | a a c d
// 1 | b b c d 

// 2 | a b b d
// 1 | a c c d 

//입력이 3일때랑 4일때를 비교합니다.
//입력(n)이 1씩 늘어난다는 것은 전 타일 뒤에 새로운 알파벳(입출력예시에 따르면)이 붙는다는 것과 같습니다.
//기본적으로 입력이 1씩 늘어나면 전의 타일들 조합뒤에 새로운 알파벳이 |(세로)로 붙고
//ex.입출력예시 4번의 주석 1,4,5번째

//추가적으로 새로운 알파벳이 붙기 바로 전 경우의 수의 마지막|(세로)줄이 전부 같은 알파벳인 경우 
//ex.입출력예시 3번의 첫번째랑 두번째 경우
//그 경우에는 그 다음 n+1에 해당하는 알파벳이 -(세로)로 붙는 경우의 수가 추가로 만들어집니다.
//ex.입출력예시 4번의 주석 2,3번째

//n이 5일때는 8이 출력되는 이유는 
//n이 4일때 기본적으로 경우의 수 5개에 해당하는 만큼 5일때 새로운 알파벳 e가 붙고   <이전 단계의 경우의 수>
//+
//n이 4일때 맨마지막 알파벳 세로가 d로만 이루어진 경우의 수가 3개이므로 더해서 8이 되고 n이 늘어날때마다 반복됩니다.  <전전 단계의 경우의 수>
//이러한 패턴은 모양만 다르고 형식은 피보나치와 똑같기에 피보나치와 동일한 방식으로 해결합니다.

let tiling = function (n,memo=[]) {

  
    // TODO: 여기에 코드를 작성합니다.
  if(memo[n] !== undefined){
    return memo[n]
  }
  
  //메모이제이션은 작은 숫자부터 목표하는 숫자(n)까지 memo에 담아가며 쌓아올리는 접근법입니다.
  //가장 작은 숫자에 해당하는 값은 정해져 있어야 그 숫자를 바탕으로 쌓아올릴 수 있습니다.
  //피보나치에서는 0,1,2 각 숫자들이 더이상 쪼개어지지 않는 최소한의 값을 리턴하는 n들입니다.
  //예외처리
  //n이 0,1,2일때
  if(n <3){
    return n
  }
  //3부터 패턴시작
  
  
  //res는 해당하는 각 n에 대한 값이고 이 값은 메모에 저장됩니다. 
  let res = tiling(n-1, memo)+tiling(n-2, memo)
  memo[n] = res
  //마지막 콜백이면 27번줄에서 저장하는 의미는 없고 그대로 res를 리턴함으로써 n에 해당하는 결과값을 반환합니다.
  return res
  
  };
  