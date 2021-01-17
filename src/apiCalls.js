export const getFoxPhoto = async () => {
  return (
  await fetch(`https://randomfox.ca/floof/`)
  .then(response => response.json())
  );
}

export const getQuote = async () => {
  return (
  await fetch(`https://api.quotable.io/random?tags=inspirational`)
  .then(response => response.json())
  );
}