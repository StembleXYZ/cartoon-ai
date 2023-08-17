//* Constant variables
const chatSection = document.getElementById("chatSection");

//* Function definitions
function displayUserMessage(msg) {
  // Create new HTML elements
  let newMessageElement = document.createElement("p");

  // Set the classes for HTML elements
  newMessageElement.className =
    "self-end w-fit px-4 py-2 rounded-full bg-violet-200 text-black";

  // Set the text content to the elements
  newMessageElement.innerText = msg;

  // Append the new paragraph element to the chat section
  chatSection.appendChild(newMessageElement);
  chatSection.scrollTop = chatSection.scrollHeight;
}

async function sendMessageToServer(msg) {
  const response = await fetch("/server", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: msg,
    }),
  }).then((res) => {
    return res.json();
  });

  console.log(response);

  // Pushing the new message element to chat section
  let textMessage = document.createElement("p");
  let voiceMessage = document.createElement("audio");

  textMessage.className =
    "self-start w-1/3 px-4 py-2 rounded-sm bg-violet-400 text-black text-sm";
  textMessage.innerHTML = '<b>Lorem ipsum</b>';
  textMessage.innerHTML = "<b>Transcription: </b><i>" + response["answer"] + '</i>';

  voiceMessage.className = "self-start mb-2";
  voiceMessage.controls = true;
  voiceMessage.src = response["filePath"];
  voiceMessage.preload = true;

  chatSection.appendChild(voiceMessage);
  chatSection.appendChild(textMessage);
}

function handleKeyPress(evt) {
  let inputElem = document.getElementById("userInput");
  if (evt.which === 13 && inputElem.value.length > 0) {
    evt.preventDefault();

    let msg = inputElem.value;
    displayUserMessage(msg);
    sendMessageToServer(msg);

    // On clicking Send, clear the input
    inputElem.value = "";
  }
}

//* Event handlers
document.getElementById("userInput").addEventListener("keydown", (evt) => {
  handleKeyPress(evt);
});
