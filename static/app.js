fetch("/api/users")
  .then(response => {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  })
  .then(users => {
    document.getElementById("users").innerHTML = users
      .map(u => `<div class="user"><b>${u.name}</b><br>${u.email}</div>`)
      .join("");
  })
  .catch(error => {
    document.getElementById("users").textContent =
      "Failed to load users.";
    console.error(error);
  });
