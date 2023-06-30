document.getElementById("generateButton").addEventListener("click", () => {
  chrome.runtime.sendMessage(
    { event: "generateQuestions", formData: yourFormData },
    (response) => {
      // Handle the response from the background script
      console.log(response);
    }
  );
});

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.event === "getSelectedText") {
//     const selectedText = window.getSelection().toString().trim();
//     sendResponse({ selectedText: selectedText });
//   }
//   return true; // Ensure the message port stays open for the response
// });
