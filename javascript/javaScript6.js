document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert("متن ثبت شد");
        }
    };

    text.addEventListener("keydown", handleKeyDown);
});