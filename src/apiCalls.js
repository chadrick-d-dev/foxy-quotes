export const getFoxPhoto = () => {
  return (
  fetch(`https://randomfox.ca/floof/`)
  .then(response => response.json())
  );
}

export const getQuote = () => {
  return (
  fetch(`https://api.quotable.io/random?tags=inspirational`)
  .then(response => response.json())
  );
}