console.log(
  "This is a test log message to check if the script is running correctly."
);

document.getElementById("submit").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    console.log("Name:", name);
    console.log("Email:", email);
  } else {
    console.error("Please fill in both fields.");
  }
  return fetch("/login", {
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
});
