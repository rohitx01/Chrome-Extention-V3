// Elements
const emailIdElement = document.getElementById("emailId");
const passwordElement = document.getElementById("password");
const statusElement = document.getElementById("status");
const welcomeElement = document.getElementById("welcome");

// Buttons
const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");

signInButton.onclick = () => {
  const email = emailIdElement.value;
  const password = passwordElement.value;

  chrome.runtime.sendMessage(
    { event: "login", email, password },
    (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }

      if (response && response.success) {
        // Login successful
        statusElement.textContent = "Login successful!!";
        welcomeElement.textContent = "Welcome to Prep AI 😊";
      } else {
        // Login failed
        statusElement.textContent = "Login failed";
        welcomeElement.textContent = "";
      }
    }
  );
};

signOutButton.onclick = () => {
  chrome.runtime.sendMessage({ event: "logout" });
  statusElement.textContent = "Logged out";
  welcomeElement.textContent = "";
};

chrome.storage.local.get(["email", "password"], (result) => {
  const { email, password } = result;

  if (email) {
    emailIdElement.value = email;
  }

  if (password) {
    passwordElement.value = password;
  }
});

//////text
// generateButton.onclick = () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.sendMessage(
//       tabs[0].id,
//       { event: "getSelectedText" },
//       (response) => {
//         if (chrome.runtime.lastError) {
//           console.error(chrome.runtime.lastError);
//           return;
//         }

//         if (response && response.selectedText) {
//           const selectedText = response.selectedText.trim();
//           console.log("Selected text:", selectedText);

//           const formData = new FormData();
//           formData.append("topic", "new question paper");
//           formData.append("content", selectedText);
//           formData.append("device", "Chrome Extension");
//           console.log("Form data:", formData);

//           chrome.runtime.sendMessage(
//             { event: "generateQuestions", formData },
//             (response) => {
//               if (chrome.runtime.lastError) {
//                 console.error(chrome.runtime.lastError);
//                 return;
//               }

//               if (response && response.success) {
//                 // Questions generated successfully
//                 statusElement.textContent = "Questions generated successfully";
//                 console.log("Questions are generated");
//               } else {
//                 // Error generating questions
//                 statusElement.textContent = "Error generating questions";
//                 console.error("Error generating questions:", response);
//               }
//             }
//           );
//         } else {
//           console.log("No text selected");
//         }
//       }
//     );
//   });
// };

generateButton.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { event: "getSelectedText" },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          return;
        }

        if (response && response.selectedText) {
          const selectedText = response.selectedText.trim();
          console.log("Selected text:", selectedText);
        } else {
          console.log("No text selected");
        }
      }
    );
  });
};

// const generateButton = document.getElementById("generateButton");

// generateButton.onclick = () => {
//   const selectedText = window.getSelection().toString();
//   if (selectedText) {
//     chrome.runtime.sendMessage(
//       { event: "generateQuestions", selectedText },
//       (response) => {
//         if (chrome.runtime.lastError) {
//           console.error(chrome.runtime.lastError);
//           return;
//         }

//         if (response && response.success) {
//           console.log("Questions generated");
//         } else {
//           console.log("Generating questions failed");
//         }
//       }
//     );
//   }
// };

//-------------------------------------------------------
// // Elements
// const emailIdElement = document.getElementById("emailId");
// const passwordElement = document.getElementById("password");

// // Buttons
// const signInButton = document.getElementById("signInButton");
// const signOutButton = document.getElementById("signOutButton");

// // Span listeners
// const runningSpan = document.getElementById("runningSpan");
// const stoppedSpan = document.getElementById("stoppedSpan");

// const hideElement = (elem) => {
//   elem.style.display = "none";
// };
// const showElement = (elem) => {
//   elem.style.display = " ";
// };
// const disableElement = (elem) => {
//   elem.disabled = true;
// };
// const eisableElement = (elem) => {
//   elem.disabled = false;
// };

// signInButton.onclick = () => {
//   const prefs = {
//     emailId: emailIdElement.value,
//     password: passwordElement.value,
//   };
//   chrome.runtime.sendMessage({ event: "onStart", prefs });
// };

// signOutButton.onclick = () => {
//   chrome.runtime.sendMessage({ event: "onStop" });
// };

// chrome.storage.local.get(["emailId", "password", "emails"], (result) => {
//   const { emailId, password, emails } = result;

//   if (emailId) {
//     emailIdElement.value = emailId;
//   }

//   if (password) {
//     passwordElement.value = password;
//   }
//   //   if (isRunning) {
//   //     showElement(runningSpan);
//   //     hideElement(stoppedSpan);
//   //   } else {
//   //     showElement(stoppedSpan);
//   //     hideElement(runningSpan);
//   //   }
// });

//----------------------------------------------------------------------------

// // Elements
// const emailIdElement = document.getElementById("emailId");
// const passwordElement = document.getElementById("password");

// // Buttons
// const signInButton = document.getElementById("signInButton");
// const signOutButton = document.getElementById("signOutButton");

// // Span listeners
// const runningSpan = document.getElementById("runningSpan");
// const stoppedSpan = document.getElementById("stoppedSpan");

// const hideElement = (elem) => {
//   elem.style.display = "none";
// };

// const showElement = (elem) => {
//   elem.style.display = "";
// };

// const disableElement = (elem) => {
//   elem.disabled = true;
// };

// const enableElement = (elem) => {
//   elem.disabled = false;
// };

// signInButton.onclick = () => {
//   const prefs = {
//     emailId: emailIdElement.value,
//     password: passwordElement.value,
//   };
//   chrome.runtime.sendMessage({ event: "onStart", prefs }, () => {
//     console.log("Message sent to background");
//   });
// };

// // signInButton.onclick = () => {
// //   const prefs = {
// //     emailId: emailIdElement.value,
// //     password: passwordElement.value,
// //   };
// //   chrome.runtime.sendMessage({ event: "onStart", prefs }, (response) => {
// //     console.log("Message sent to background");
// //     if (response && response.success) {
// //       // Open a new popup with the dashboard.html
// //       chrome.windows.create({
// //         url: "popup/dashboard.html",
// //         type: "popup",
// //         width: 800,
// //         height: 600,
// //       });
// //     } else {
// //       console.log("Failed to sign in:", response);
// //       // Handle the error or display an error message to the user
// //     }
// //   });
// // };

// signOutButton.onclick = () => {
//   chrome.runtime.sendMessage({ event: "onStop" }, () => {
//     console.log("Message sent to background");
//   });
// };

// chrome.storage.local.get(["prefs"], (result) => {
//   const { prefs } = result;

//   if (prefs && prefs.emailId) {
//     emailIdElement.value = prefs.emailId;
//   }
// });

// // ...

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   const { event, prefs, selectedText } = message;
//   switch (event) {
//     case "onStop":
//       handleOnStop();
//       break;
//     case "onStart":
//       handleOnStart(prefs);
//       break;
//     case "onTextSelect":
//       handleTextSelect(selectedText);
//       break;
//     default:
//       break;
//   }
//   sendResponse();
// });

// function handleTextSelect(selectedText) {
//   if (selectedText) {
//     // Open the popup window when text is selected
//     chrome.windows.create({
//       url: "popup.html",
//       type: "popup",
//       width: 800,
//       height: 600,
//     });
//   }
// }

// // ...
