//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('show'); 
}); 

$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

$(document).ready (function(){
$("img").attr("loading", "lazy");
});

 //code to download or preview PDF
  function showPdfOptions(pdfUrl) {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("pdfModal");
    const actions = document.getElementById("pdfActions");
    const viewer = document.getElementById("pdfViewer");
    const iframe = document.getElementById("pdfFrame");

    // Reset modal
    actions.innerHTML = '';
    viewer.style.display = 'none';
    iframe.src = '';

    // Create buttons
    const previewBtn = document.createElement("button");
    previewBtn.textContent = "Preview PDF";
    previewBtn.className = "preview-btn";
    previewBtn.onclick = () => {
      viewer.style.display = 'block';
      iframe.src = pdfUrl;
    };

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download PDF";
    downloadBtn.className = "download-btn";
    downloadBtn.onclick = () => {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = pdfUrl.split('/').pop();
      link.click();
    };

    // Add buttons to modal
    actions.appendChild(previewBtn);
    actions.appendChild(downloadBtn);

    // Show modal
    overlay.style.display = "block";
    modal.style.display = "block";
  }

  function closePdfModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("pdfModal").style.display = "none";
  }
  //end code to download or preview PDF
  
  
  //code to show update time
  // Set the post time (you can customize this)
  const postTime = new Date('2025-11-01T14:00:00'); // Example date

  function timeAgo(time) {
    const now = new Date();
    const seconds = Math.floor((now - time) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours   = Math.floor(minutes / 60);
    const days    = Math.floor(hours / 24);
    const months  = Math.floor(days / 30);
    const years   = Math.floor(days / 365);

    if (seconds < 60)
      return `Updated ${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    else if (minutes < 60)
      return `Updated ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    else if (hours < 24)
      return `Updated ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    else if (days < 30)
      return `Updated ${days} day${days !== 1 ? 's' : ''} ago`;
    else if (days < 365)
      return `Updated ${months} month${months !== 1 ? 's' : ''} ago`;
    else
      return `Updated ${years} year${years !== 1 ? 's' : ''} ago`;
  }

  function updateTimestamp() {
    document.getElementById('timestamp').textContent = timeAgo(postTime);
  }

  updateTimestamp(); // Initial call
  setInterval(updateTimestamp, 30000); // Update every 30 seconds
//end code to show update time
