const url = "https://vercel.com/help?teamSlug=dasdas-projects-d7b47936&product=vercel";
const urlHash = url + "#currentMessage";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function googlePrompt() {
  google.innerHTML = "";
  const g_id_onload = document.createElement("div");
  g_id_onload.id = "g_id_onload";
  g_id_onload.setAttribute("data-client_id", "465150997505-j3lj5fpbdddjomrd9omtjhjkg3pfor3l.apps.googleusercontent.com");
  document.body.appendChild(g_id_onload);

  const g_id_signin = document.createElement("div");
  g_id_signin.dataset.type = "standard";
  document.body.appendChild(g_id_signin);

  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  google.appendChild(script);
}
function blankBlob() {
  const blob = new Blob([`<body bgcolor=black>`], { type: "text/html" });
  return URL.createObjectURL(blob);
}
async function waitForWindow(w) {
  while (true) {
    try {
      w.origin;
      break;
    } catch {
      await sleep(0);
    }
  }
}
async function focusMessageBox() {
  // Focus #currentMessage after window is rendered
  for (let i = 0; i < 50; i++) {
    w.location = urlHash;
    await sleep(100);
  }
}
function backToStartIfClosed() {
  setInterval(() => {
    // Opened before, but closed by the user
    if (!w || w.closed) {
      location = "/";
    }
  }, 100);
}

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    location.reload();
  }
});
