const getAvailableChannels = async () => {
  const rawData = await fetch("https://api.stod2.is/dagskra/api");
  const jsonData = await rawData.json();
  return jsonData;
};

const getDataForChannel = async (channelName) => {
  const rawData = await fetch(
    "https://api.stod2.is/dagskra/api/" + channelName
  );
  const jsonData = await rawData.json();
  return jsonData;
};

const getImdbData = async (movieName) => {
  const rawData = await fetch(
    "http://www.omdbapi.com/?t=" +
      movieName +
      "&y=&plot=short&r=json&apikey=c1087fa1"
  );
  const jsonData = await rawData.json();
  return jsonData;
};

const formatRuvData = (tvShow) => {
  return {
    isltitill: tvShow.title,
    upphaf: tvShow.startTime,
    thattur: tvShow.series ? tvShow.series.episode : undefined,
    lysing: tvShow.description,
    dagsetning: tvShow.startTime,
  };
};

const getRuvData = async () => {
  const rawData = await fetch("https://apis.is/tv/ruv");
  const jsonData = await rawData.json();
  return jsonData.results.map(formatRuvData);
};

export default {
  getAvailableChannels,
  getDataForChannel,
  getImdbData,
  getRuvData,
};
