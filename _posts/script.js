  function copyToClipboard() {
    const text = document.getElementById("textToCopy").textContent.trim();
    const button = document.querySelector(".btn");
    const clipboard = new ClipboardJS('.btn', {
      text: () => text
    });
    clipboard.on('success', function(e) {
      e.clearSelection();
      button.value = "Copied!";
      setTimeout(function() {
        button.value = "Copy";
      }, 3000);
    });
    clipboard.on('error', function(e) {
      console.error('Error copying text: ', e);
    });
  }