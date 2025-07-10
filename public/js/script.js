console.log(
  "This is a test log message to check if the script is running correctly."
);

document.getElementById("submit").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    console.log("Name:", name);
    console.log("Email:", email);
    return fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  } else {
    console.error("Please fill in both fields.");
  }
});

document.getElementById("retrive").addEventListener("click", () => {
  window.location.href = "/retrive";
});
