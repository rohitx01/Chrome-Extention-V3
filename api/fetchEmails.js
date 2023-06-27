// const EMAIL_ENDPOINT = "https://stagingapi.prepai.io/login";

// export default function fetchemail() {
//   fetch(EMAIL_ENDPOINT)
//     .then((response) => response.json())
//     .then((data) => {
//       const filteredemails = data.map((loc) => ({
//         id: loc.id,
//         name: loc.name,
//       }));
//       chrome.storage.local.set({ emails: filteredemails });
//       console.log(filteredemails);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetch('https://stagingapi.prepai.io/login', {
//   method: 'POST',
//   body: JSON.stringify({
//     email:anymail@mail.com,
//     password:12345678,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
//   })
//   .then(function(response){
//   return response.json()})
//   .then(function(data)
//   {console.log(data)
//   title=document.getElementById("title")
//   body=document.getElementById("bd")
//   title.innerHTML = data.title
//   body.innerHTML = data.body
// }).catch(error => console.error('Error:', error));

// const EMAIL_ENDPOINT = "https://stagingapi.prepai.io/login";

// export default function fetchemail() {
//   const emailId = "anymail@mail.com";
//   const password = "12345678";

//   fetch(EMAIL_ENDPOINT, {
//     method: "POST",
//     body: JSON.stringify({
//       emailId: emailId,
//       password: password,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       //   const emailId = chrome.getElementById("emailId");
//       //   const password = document.getElementById("password");
//       //   title.innerHTML = data.title;
//       //   body.innerHTML = data.body;
//     })
//     .catch((error) => console.log("Error:", error));
// }

// const EMAIL_ENDPOINT = "https://stagingapi.prepai.io/login";

// export default function fetchEmail(prefs) {
//   return fetch(EMAIL_ENDPOINT, {
//     method: "POST",
//     body: JSON.stringify({
//       prefs,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // Process the API response data as needed
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// const EMAIL_ENDPOINT = "https://stagingapi.prepai.io/login";

// export default function fetchEmail(email, password) {
//   return fetch(EMAIL_ENDPOINT, {
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
//       // Process the API response data as needed
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }
const EMAIL_ENDPOINT = "https://stagingapi.prepai.io/login";

export default function fetchEmails() {
  chrome.storage.local.get(["prefs"], (result) => {
    const { prefs } = result;

    if (prefs && prefs.emailId) {
      const { emailId, password } = prefs;
      fetch(EMAIL_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          email: emailId,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Process the API response data as needed
          return data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
}
