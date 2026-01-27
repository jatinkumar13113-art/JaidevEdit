function copyText(btn){
  const text = btn.parentElement.innerText;
  navigator.clipboard.writeText(text);
  btn.innerText = "Copied!";
  setTimeout(()=>btn.innerText="Copy Prompt",1500);
}

function searchContent(){
  const q = document.getElementById("search").value.toLowerCase();
  if(q.includes("training")) location.href="training/";
  else if(q.includes("gemini")) location.href="gemini/";
  else if(q.includes("reel")) location.href="reels/";
  else if(q.includes("capcut")) location.href="capcut/";
  else alert("No result found");
}