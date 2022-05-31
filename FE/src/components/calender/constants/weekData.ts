type WeekData = {
  [lang: string]: string[];
};

export enum Week {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const weekData: WeekData = {
  kor: ['일', '월', '화', '수', '목', '금', '토'],
  eng: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

export default weekData;
