// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.event === "getSelectedText") {
//     const selectedText = window.getSelection().toString().trim();
//     sendResponse({ selectedText: selectedText });
//   }
// });
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.event === "getSelectedText") {
    const selectedText = window.getSelection().toString().trim();
    sendResponse({ selectedText: selectedText });
  }
  return true; // Ensure the message port stays open for the response
});
