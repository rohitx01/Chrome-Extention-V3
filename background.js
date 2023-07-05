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
//     return true;
//   } else if (message.event === "logout") {
//     handleLogout();
//     sendResponse({ success: true });
//     return true;
//   } else if (message.event === "getSelectedText") {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         { event: "getSelectedText" },
//         (response) => {
//           if (chrome.runtime.lastError) {
//             console.error(chrome.runtime.lastError);
//             sendResponse({ selectedText: null });
//           } else {
//             sendResponse({ selectedText: response.selectedText });
//           }
//         }
//       );
//     });
//     return true;
//   } else if (message.event === "generateQuestions") {
//     const formData = message.formData;
//     generateQuestions(formData)
//       .then((response) => {
//         console.log(response);
//         sendResponse(response);
//       })
//       .catch((error) => {
//         console.error("Error generating questions:", error);
//         sendResponse({ success: false });
//       });
//     return true;
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
//       if (data.success) {
//         // Store the access token in storage
//         chrome.storage.local.set({ accessToken: data.accessToken });
//       }
//       return data;
//     });
// }

// function handleLogout() {
//   // Handle logout logic here
//   console.log("Logged out");
// }

//-------------------------------------------------------------------------------------------
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
  } else if (message.event === "generateQuestions") {
    const formData = message.formData;
    generateQuestions(formData, sendResponse);
    return true;
  }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.event === "contentScriptLoaded") {
    sendResponse({ success: true });
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
      if (data.success) {
        // Store the access token in storage
        chrome.storage.local.set(
          { access_token: data.response.access_token },
          () => {
            console.log("Access token saved:", data.response.access_token);
          }
        );

        // Send a message to popup.js with the login information
        chrome.runtime.sendMessage({
          event: "loginSuccess",
          loginInfo: data,
        });
      }
      return data;
    })
    .catch((error) => {
      console.error("Error during login:", error);
      return { success: false };
    });
}

function handleLogout() {
  // Handle logout logic here
  console.log("Logged out");
}
function generateQuestions(formData, sendResponse) {
  console.log(formData);

  const GENERATE_QUESTIONS_ENDPOINT =
    "https://stagingapi.prepai.io/generateQuestionsP1";

  // Retrieve the access token from storage
  chrome.storage.local.get(["access_token"], (result) => {
    const accessToken = result.access_token;

    if (accessToken) {
      // Send a message to the active tab to retrieve the selected text
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { event: "getSelectedText" },
          (response) => {
            const selectedText = response.selectedText;

            if (selectedText) {
              // Include the selected text in the request payload
              const requestData = {
                ...formData,
                content: selectedText,
              };

              const requestOptions = {
                method: "POST",
                body: JSON.stringify(requestData),
                headers: {
                  "Content-type": "application/json",
                  Authorization: "Bearer " + accessToken,
                },
              };

              fetch(GENERATE_QUESTIONS_ENDPOINT, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  sendResponse(data);
                })
                .catch((error) => {
                  console.error("Error generating questions:", error);
                  sendResponse({ success: false });
                });
            } else {
              console.error("No text selected");
              sendResponse({ success: false });
            }
          }
        );
      });
    } else {
      console.error("Access token not found in storage");
      sendResponse({ success: false });
    }
  });
}

// ...

// ...

// ...

// // ...existing code...
// function generateQuestions(formData) {
//   const GENERATE_QUESTIONS_ENDPOINT =
//     "https://stagingapi.prepai.io/generateQuestions";

//   return fetch(GENERATE_QUESTIONS_ENDPOINT, {
//     method: "POST",
//     body: formData,
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

// ...existing code...

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
