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

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.event === "loginSuccess") {
    const loginInfo = message.loginInfo;
    // Access the login information here and perform any necessary actions
    console.log("Login information:", loginInfo);
  }
});

chrome.storage.local.get(["email", "password"], (result) => {
  const { email, password } = result;

  if (email) {
    emailIdElement.value = email;
  }

  if (password) {
    passwordElement.value = password;
  }
});

document.getElementById("generateButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { event: "getSelectedText" },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          return;
        }

        const selectedText = response.selectedText;

        if (selectedText) {
          chrome.runtime.sendMessage(
            { event: "generateQuestions", formData: { selectedText } },
            (response) => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                return;
              }

              if (response && response.success) {
                // Questions generated successfully
                console.log("Questions generated:", response);
              } else {
                // Error generating questions
                console.error("Error generating questions");
              }
            }
          );
        } else {
          console.log("No text selected");
        }
      }
    );
  });
});

// ...
// ...

// ...

// ...

// ...existing code...

// ...existing code...

// function generateQuestions(formData) {
//   const GENERATE_QUESTIONS_ENDPOINT =
//     "https://stagingapi.prepai.io/generateQuestions";

//   // Retrieve the access token from storage
//   chrome.storage.local.get(["accessToken"], (result) => {
//     const accessToken = result.accessToken;

//     if (accessToken) {
//       const requestOptions = {
//         method: "POST",
//         body: formData,
//         headers: {
//           Authorization: "Bearer " + accessToken,
//           "content-type": "multipart/form-data",
//         },
//       };

//       fetch(GENERATE_QUESTIONS_ENDPOINT, requestOptions)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           return data;
//         })
//         .catch((error) => {
//           console.error("Error generating questions:", error);
//         });
//     } else {
//       console.error("Access token not found in storage");
//     }
//   });
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
// generate text
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
//         } else {
//           console.log("No text selected");
//         }
//       }
//     );
//   });
// };
// ...existing code...

// generate text
