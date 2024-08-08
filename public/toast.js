(function () {
  // Create the toast container
  const toastContainer = document.createElement("div");
  toastContainer.className = "toast-container";
  document.body.appendChild(toastContainer);

  // Function to show a toast
  window.showToast = function (message, duration = 3000) {
    // Create the toast element
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    // Append the toast to the container
    toastContainer.appendChild(toast);

    // Show the toast
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    // Remove the toast after the specified duration
    setTimeout(() => {
      toast.classList.remove("show");
      // Remove the toast from the DOM after the transition
      toast.addEventListener("transitionend", () => {
        toast.remove();
      });
    }, duration);
  };
})();
