const getFormattedDate = (date: number) => {
  return new Date(date).toLocaleDateString();
};

const getData = (url: string, onSuccess: ([]) => void) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => onSuccess(data));
}

export {getFormattedDate, getData};
