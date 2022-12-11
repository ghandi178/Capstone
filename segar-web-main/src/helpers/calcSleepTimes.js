const sleepCycleInMinutes = 450; // which is 7h30
const sleepTimeDistanceInMinutes = 90; // which is 1h30

const convertWakingTimeToMinutes = (wakingTime) => {
  let hours = Number(wakingTime.hour);
  const minute = Number(wakingTime.minute);
  const time = wakingTime.time;

  if (time === 'PM') hours += 12;

  return hours * 60 + minute;
};

const formatAndShowSleepingTimes = (minutes) => {
  let hours = Math.floor(minutes / 60);
  let minute = minutes - hours * 60;

  if (minute < 10) minute = `0${minute}`;

  if (hours < 0) return `${hours + 12}:${minute} PM`;

  let time = '';
  if (hours >= 0) time = 'AM';
  if (hours >= 12) {
    hours -= 12;
    time = 'PM';
  }
  if (hours === 0) hours += 12;

  return `${hours}:${minute} ${time}`;
};

export default function calcSleepTimes(wakingTime) {
  const sleepingTimes = [];

  const wakingTimeInMinutes = convertWakingTimeToMinutes(wakingTime);
  const initialSleepingTimeInMinutes =
    wakingTimeInMinutes - sleepCycleInMinutes - sleepTimeDistanceInMinutes * 2;

  for (let i = 1; i < 5; i++) {
    sleepingTimes.push(
      formatAndShowSleepingTimes(
        initialSleepingTimeInMinutes + sleepTimeDistanceInMinutes * i
      )
    );
  }

  return sleepingTimes;
}
