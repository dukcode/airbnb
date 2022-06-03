type DateType = {
  today: Date;
  year: number;
  month: number;
  week: number;
  day: number;
};

const getTodayDateInfo = (): DateType => {
  const today = new Date();
  return {
    today,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    week: today.getDay(),
  };
};

const getLastDay = (year: number, month: number): number => new Date(year, month, 0).getDate();
const getStartDayOfWeek = (year: number, month: number): number => new Date(year, month - 1, 1).getDay();

