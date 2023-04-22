function generateMessage() {
  var link = document.getElementById("link").value;
  var memberId = document.getElementById("member-id").value;
  var name = document.getElementById("name").value;
  var companyName = document.getElementById("company-name").value;
  var openings = document.getElementById("jobs").value;
  document.getElementById("link-message-2").href = link;
  document.getElementById("link-message-2").textContent = link;
  // document.getElementById("link-message").textContent = companyName;
  document.getElementById("member-id-message").textContent = memberId;
  document.getElementById("company-name-highlight").textContent = companyName;
  document.getElementById("open").textContent = openings;
  document.getElementById("company-name-highlight-2").textContent = companyName;
  document.getElementById("my-name").textContent = name;
}
function copyMessage() {
  const message = document.getElementById("message");
  const range = document.createRange();
  range.selectNode(message);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Message copied to clipboard!");
}
