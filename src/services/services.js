export const getFetch = (url) =>
  fetch(url).then(response => response.json())