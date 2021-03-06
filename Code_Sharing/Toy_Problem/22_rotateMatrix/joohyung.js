// 가로세로 같고 90도 회전 1번만 할 떄.
const rotateMatrix = function (matrix) {
  if (matrix.length === 0) return [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
  }

  let c = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    let part = [];
    for (let i = matrix.length - 1; i >= 0; i--) {
      part.push(matrix[i][j]);
    }
    result[c].push(...part);
    c++;
  }
  return result;
};
/******************* advanced **********************/

const rotateMatrix = function (matrix, rotateNum = 1) {
  // rotateNum 이 0일 수 있으므로 아래와 같은 초기화는 지양해야 함
  // rotateNum = rotateNum || 1
  const N = matrix.length;
  // 빈 배열을 입력받을 수 있다.
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4;
  // 회전하지 않는다.
  if (rotateNum === 0) return matrix;

  const rotated = [];
  // 홀수번 회전 시 M x N, 짝수번 회전 시 N x M
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) rotated[row][col] = matrix[N - col - 1][row];
      else if (rotateNum === 2)
        rotated[row][col] = matrix[N - row - 1][M - col - 1];
      else rotated[row][col] = matrix[col][M - row - 1];
    }
  }

  return rotated;
};
