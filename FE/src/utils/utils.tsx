export const moneyToWon = (money: number) => {
  let moneyArr: number[];
  // eslint-disable-next-line prefer-const
  moneyArr = [];
  let newMoney: number = money;

  while (newMoney >= 1000) {
    moneyArr.push(newMoney % 1000);
    newMoney = Math.floor(newMoney / 1000);
  }

  const str = moneyArr.reduce((acc: string, next: any) => {
    const nextArr: number[] = Array.from(next);
    const zeros: number[] = new Array(3 - nextArr.length).fill(0);
    return `${acc},${[...zeros, ...nextArr].join('')}`;
  }, '');

  return `￦${newMoney + str}`;
};
