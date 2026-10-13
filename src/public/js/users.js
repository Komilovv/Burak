console.log("Users frontend javascript file");

$(function () {
  // Handle status change
  $(".member-status").change(function (e) {
    const id = e.target.id;
    const memberStatus = $(`#${id}.member-status`).val();
    
    axios
      .post("/admin/user/edit", { _id: id, memberStatus: memberStatus })
      .then((response) => {
        console.log("Response:", response);
        const result = response.data;

        if (result.data) {
            $(".member-status").blur(); // Remove focus from the select element
        } else alert("User update failed. Please try again.");

        })
      .catch((error) => {
        console.error("Error updating status:", error);
        alert("User update failed. Please try again.");
      });
    });
});