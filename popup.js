document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");

  const handleStartBtn = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {action: "request_recording"},
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(
              chrome.runtime.lastError,
              "error dey for starting here boss"
            );
          }
        }
      );
    });
  };

  startBtn.addEventListener("click", handleStartBtn);
});

const cameraToggle = document.getElementById("cameraToggle");
const audioToggle = document.getElementById("audioToggle");

// Add an event listener to the toggle switch
function toggleCamera() {
  cameraToggle.checked = !cameraToggle.checked;
}
function toggleAudio() {
  audioToggle.checked = !audioToggle.checked;
}
