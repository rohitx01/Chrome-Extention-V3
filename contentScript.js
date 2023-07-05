chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.event === "getSelectedText") {
    const selectedText = window.getSelection().toString();
    sendResponse({ selectedText: selectedText });
  }
});
// window.addEventListener("message", (event) => {
//   if (event.data.event === "getSelectedText") {
//     const selectedText = window.getSelection().toString();
//     window.postMessage(
//       { event: "selectedText", selectedText: selectedText },
//       "*"
//     );
//   }
// });
