// new account signup
async function signupFormHandler(event) {
  event.preventDefault();
  // login creds
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();

  //  handle blank username and password length errors
  if (!username) {
    alert("Someone forgot their username...");
    return;
  }
  if (password.length < 6) {
    alert("How embarrassing. Your password needs to be at least 6 characters.");
  }

  // signup success and post new user
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("For Frodo.");
      document.location.replace("/home");
    } else {
      alert("Error. The server doesn't dig your vibe.");
    }
  }
}

// login function
async function loginFormHandler(event) {
  event.preventDefault();
  // user credentials
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // fetch user info from db
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/home");
      console.log("You are logged in, superstar.");
    } else {
      alert(response.statusText);
    }
  }
}

// go find buttons
document
  .querySelector(".login-form")
  .addEventListener("login-button", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
