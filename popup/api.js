function generateQuestions(formData) {
  const GENERATE_QUESTIONS_ENDPOINT =
    "https://stagingapi.prepai.io/generateQuestions";

  // Retrieve the access token from storage
  chrome.storage.local.get(["accessToken"], (result) => {
    const accessToken = result.accessToken;

    if (accessToken) {
      const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      fetch(GENERATE_QUESTIONS_ENDPOINT, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error("Error generating questions:", error);
        });
    } else {
      console.error("Access token not found in storage");
    }
  });
}
