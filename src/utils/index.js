const getNext7Days = () => {
  const allDate = [];
  let today = new Date();
  for (let i = 0; i < 7; i++) {
    allDate.push(today.toISOString().substring(0, 10));
    today.setDate(today.getDate() + 1);
  }
  return allDate;
};

const filterTvDataForDate = (data, date) => {
  return data.filter((tvShow) => tvShow.dagsetning.includes(date));
};

export default { getNext7Days, filterTvDataForDate };
