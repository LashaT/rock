export const createMessagePayload = (username, message) => {
  return {
    username,
    message,
  }
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}


export class User {
  static currentUser() {
    return localStorage.getItem("username");
  }

  static setUser() {
    const randomNames = ["suspicious_girraffe", "dan_de_lion", "crewmate", "pogchamp", "user"];

    const username = `${randomNames[getRandomInt(randomNames.length)]}_${getRandomInt(1000)}`

    localStorage.setItem("username", username);
    console.log("cached username: ", username)

    return username;
  }
}