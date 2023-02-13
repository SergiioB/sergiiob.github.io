 function copyToClipboard() {
        const text = document.getElementById("textToCopy").textContent;
        const clipboard = new ClipboardJS('.btn', {
          text: () => text
        });
        clipboard.on('success', function(e) {
          e.clearSelection();
          document.getElementById("copyStatus").textContent = "Copied!";
        });
        clipboard.on('error', function(e) {
          console.error('Error copying text: ', e);
        });
      }