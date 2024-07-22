export const calculateScore = async (questionsAnswers: {}) => {
  const request = await fetch(
    `https://digitalmaturityassessmentscore-dev.azurewebsites.net/api/CalculateScore`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Functions-Key": process.env.API_KEY || "",
      },
    }
  );

  const data = await request.json();

  if (data) {
    return data;
  } else {
    throw new Error("Failed to post data");
  }
};
