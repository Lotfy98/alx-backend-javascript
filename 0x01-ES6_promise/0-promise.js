export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      resolve("API response");
    }, 2000);
  });
}
