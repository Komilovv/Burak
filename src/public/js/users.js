// console.log("Users frontend javascript file");
  document.querySelectorAll(".member-status").forEach(function (select) {
    select.addEventListener("change", async function () {
      try {
        const response = await axios.post("/admin/user/edit", {
          _id: this.id,            // the user's id (from id="<%= user._id %>")
          memberStatus: this.value // the new status
        });

        if (response.data) alert("Status updated");
      } catch (err) {
        alert("Update failed");
        location.reload();
      }
    });
  });