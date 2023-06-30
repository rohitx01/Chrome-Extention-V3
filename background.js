// import fetchemail from "./api/fetchEmails.js";

// chrome.runtime.onInstalled.addListener((details) => {
//   //   console.log("onInstalled reason:", details.reason);
//   fetchemail();
// });

// chrome.runtime.onMessage.addListener((data) => {
//   const { event, prefs } = data;
//   switch (event) {
//     case "onStop":
//       handleOnStop();
//       break;
//     case "onStart":
//       handleOnStart(prefs);
//       break;
//     default:
//       break;
//   }
// });

// const handleOnStop = () => {
//   console.log("On Stop in background");
// };

// const handleOnStart = (prefs) => {
//   console.log("On Start in background");
//   console.log("prefs recieved", prefs);
//   chrome.storage.local.set(prefs);
// };

// import fetchEmail from "./api/fetchEmails.js";

// chrome.runtime.onInstalled.addListener((prefs) => {
//   fetchEmail(prefs);
// });

// chrome.runtime.onMessage.addListener((data) => {
//   const { event, prefs } = data;
//   switch (event) {
//     case "onStop":
//       handleOnStop();
//       break;
//     case "onStart":
//       handleOnStart(prefs);
//       break;
//     default:
//       break;
//   }
// });

// const handleOnStop = () => {
//   console.log("On Stop in background");
// };

// const handleOnStart = (prefs) => {
//   console.log("On Start in background");
//   console.log("prefs received", prefs);
//   chrome.storage.local.set(prefs);
// };

// import fetchEmail from "./api/fetchEmails.js";

// chrome.runtime.onInstalled.addListener(() => {
//   fetchEmail(); // Fetch emails on installation or update
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   const { event, prefs } = message;
//   switch (event) {
//     case "onStop":
//       handleOnStop();
//       break;
//     case "onStart":
//       handleOnStart(prefs);
//       break;
//     default:
//       break;
//   }
//   // Make sure to call sendResponse to properly close the message port
//   sendResponse();
// });

// const handleOnStop = () => {
//   console.log("On Stop in background");
// };

// const handleOnStart = (prefs) => {
//   console.log("On Start in background");
//   console.log("prefs received", prefs);
//   chrome.storage.local.set({ prefs });
// };
import fetchEmail from "./api/fetchEmails.js";

// chrome.runtime.onInstalled.addListener(() => {
//   fetchEmail(); // Fetch emails on installation or update
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   const { event, prefs } = message;
//   switch (event) {
//     case "onStop":
//       handleOnStop();
//       break;
//     case "onStart":
//       handleOnStart(prefs);
//       break;
//     default:
//       break;
//   }
//   // Make sure to call sendResponse to properly close the message port
//   sendResponse();
// });

// const handleOnStop = () => {
//   console.log("On Stop in background");
// };

// const handleOnStart = (prefs) => {
//   console.log("On Start in background");
//   console.log("prefs received", prefs);
//   chrome.storage.local.set({ prefs });
// };

// // ---------------------------------------------------------------
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.event === "login") {
//     const { email, password } = message;
//     login(email, password)
//       .then((response) => {
//         sendResponse(response);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         sendResponse({ success: false });
//       });
//     return true; // Keep the message port open until the async operation is complete
//   } else if (message.event === "logout") {
//     handleLogout();
//     sendResponse({ success: true });
//   }
// });

// function login(email, password) {
//   const LOGIN_ENDPOINT = "https://stagingapi.prepai.io/login";
//   return fetch(LOGIN_ENDPOINT, {
//     method: "POST",
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       return data;
//     });
// }

// function handleLogout() {
//   // Handle logout logic here
//   console.log("Logged out");
// }

// //text
// function generateQuestions(formData) {
//   const GENERATE_QUESTIONS_ENDPOINT =
//     "https://stagingapi.prepai.io/generateQuestions";
//   return fetch(GENERATE_QUESTIONS_ENDPOINT, {
//     method: "POST",
//     body: formData,
//     headers: {
//       "content-type": "multipart/form-data",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           "Error generating questions. HTTP status code: " + response.status
//         );
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((error) => {
//       console.error(error);
//       throw error;
//     });
// }
//--------------------------------------------------------------------------------

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.event === "login") {
    const { email, password } = message;
    login(email, password)
      .then((response) => {
        sendResponse(response);
      })
      .catch((error) => {
        console.error("Error:", error);
        sendResponse({ success: false });
      });
    return true;
  } else if (message.event === "logout") {
    handleLogout();
    sendResponse({ success: true });
    return true;
  } else if (message.event === "getSelectedText") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { event: "getSelectedText" },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            sendResponse({ selectedText: null });
          } else {
            sendResponse({ selectedText: response.selectedText });
          }
        }
      );
    });
    return true;
  }
});

function login(email, password) {
  const LOGIN_ENDPOINT = "https://stagingapi.prepai.io/login";
  return fetch(LOGIN_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

function handleLogout() {
  // Handle logout logic here
  console.log("Logged out");
}

function generateQuestions(formData) {
  const GENERATE_QUESTIONS_ENDPOINT =
    "https://stagingapi.prepai.io/generateQuestions";
  return fetch(GENERATE_QUESTIONS_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Error generating questions. HTTP status code: " + response.status
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
