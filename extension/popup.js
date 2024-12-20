document.addEventListener("DOMContentLoaded", () => {
  // Send a message to the content script to get the currently playing song every 5 seconds
  setInterval(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getCurrentlyPlaying" },
        (response) => {
          if (chrome.runtime.lastError) {
            document.getElementById("song").textContent =
              "YouTube Music not open";
            document.getElementById("artist").textContent =
              chrome.runtime.lastError.message;
          } else {
            document.getElementById("song").textContent = response.title;
            document.getElementById("artist").textContent = response.artist;
          }
        }
      );
    });
  }, 1000); // 5000 milliseconds = 5 seconds

  document.getElementById("sendMessage").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "hello" }, (response) => {
        console.log(response);
      });
    });
  });
});

function getCurrentlyPlayingSong() {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { action: "getCurrentlyPlaying" },
    (response) => {
      if (chrome.runtime.lastError) {
        document.getElementById("song").textContent = "YouTube Music not open";
        document.getElementById("artist").textContent =
          chrome.runtime.lastError.message;
      } else {
        document.getElementById("song").textContent = response.song;
        document.getElementById("artist").textContent = response.artist;
      }
    }
  );
}
