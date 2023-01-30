const endpoint = "http://localhost:3333";

export const startGame = async () => {
  const res = await fetch(`${endpoint}/getWord`);
  const word = await res.text();
  return word;
};

export const sendWordToTheServer = async (guess: Array<object>) => {
  const usersGuess = JSON.stringify(guess);
  try {
    const response = await fetch(`${endpoint}/checkWord`, {
      method: "post",
      body: usersGuess,
      headers: {
        "content-type": "application/json",
      },
    });
    const responseArray = await response.json();

    return responseArray;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const checkWin = async () => {
  const response = await fetch(`${endpoint}/checkWin`);
  const isWin = await response.json();
  return await isWin.win;
};
