//* Constant variables
const chatSection = document.getElementById("chatSection");
let audio = document.querySelector('audio');

//* Function definitions
function displayUserMessage() {
  let inputElem = document.getElementById('userInput');
  let msg = inputElem.value;

  // On clicking Send, clear the input
  inputElem.value = "";

  // Create new HTML elements
  let newMessageElement = document.createElement("p");
  let audioElement = document.createElement("audio");
  let transcriptionElement = document.createElement('code');

  // Set the classes for HTML elements
  newMessageElement.className = 'text-right px-4 py-2 rounded-full bg-violet-200 text-black';
  audioElement.className = "self-start";
  // audioElement.src = "/static/audio/audio.mp3"
  audioElement.preload = 'auto';
  audioElement.controls = true;
  transcriptionElement.className = 'bg-purple-100 rounded-md p-2 self-start w-1/3 text-sm';

  // Set the text content to the elements
  newMessageElement.innerText = msg;
  transcriptionElement.innerHTML = '<b>transcription:</b> this is a generic transcription that is just a placeholder value for the transcription that is not here.';

  // Append the new paragraph element to the chat section
  chatSection.appendChild(newMessageElement);
  setTimeout(() => {
    chatSection.appendChild(audioElement);
    chatSection.appendChild(transcriptionElement);
  }, 1000);
}

function handleKeyPress(evt) {
  let inputElem = document.getElementById('userInput');
  if (
    evt.which === 13 &&
    inputElem.value.length > 0
  ) {
    evt.preventDefault();
    displayUserMessage();
    inputElem.value = "";
  }
}


//* Event handlers
document.getElementById("sendButton").addEventListener("click", () => {
  displayUserMessage();
});

document.getElementById('userInput').addEventListener('keydown', (evt) => {
  handleKeyPress(evt);
})
