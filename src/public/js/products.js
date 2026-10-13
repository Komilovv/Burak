console.log("Products frontend javascript file");

$(document).ready(function () {
    $(".product-collection").on("change", () => {
        const selectedValue = $(".product-collection").val();
        if (selectedValue === "DRINK") {
            $("#product-volume").show();
            $("#product-collection").hide();
        } else {
            $("#product-volume").hide();
            $("#product-collection").show();
        }
    });

    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    });

    $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display", "flex");
    });

    $(".new-product-status").on("change", async function (e) {
        const id = e.target.id;
        const productStatus = $(`#${id}.new-product-status`).val();

        try {
            const response = await axios.post(`/admin/product/${id}`, { productStatus: productStatus });
            const result = response.data;
            if (result.data) {
                console.log("Product status updated successfully");
                $(".new-product-status").blur();
            } else alert("Product update failed!")
        }
        catch (err) {
            console.error(err);
            alert("Product update failed!");
        }
    });

});

function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productStatus = $(".product-status").val();
    const productDesc = $(".product-desc").val();

    if (!productName || 
        !productPrice || 
        !productLeftCount || 
        !productCollection || 
        !productStatus || 
        !productDesc) {
        alert("Please fill in all required fields.");
        return false;
    }
    return true;
}

function previewFileHandler(input, imageNumber) { 
    const imgClassName = input.className;

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpeg", "image/png", "image/jpg"];

    if (!validImageType.includes(fileType)) {
        alert("Please upload a valid image file (JPEG, PNG, JPG).");
    } else {
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                $(`#image-section-${imageNumber}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
}
