//checks if app is running in browser tab or standalone app
window.addEventListener("DOMContentLoaded", () => {
  let displayMode = "browser tab";
  if (window.matchMedia("(display-mode: standalone)").matches) {
    displayMode = "standalone";
  }
  // Log launch display mode to analytics
  console.log("DISPLAY_MODE_LAUNCH:", displayMode);
  // if display mode is browser tab it shows install button, if not button is hidden
  if (displayMode == "browser tab") {
    //Check wheter u use IOS or android
    window.addEventListener("load", (e) => {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        console.log("Windows Phone");
        document.querySelector(".installSection").style.display = "none";
      }
      if (/android/i.test(userAgent)) {
        console.log("Android");
        document.querySelector(".installSection").style.display = "none";
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        console.log("iOS");
        document.querySelector(".installSection").style.display = "none";
        iosDiv.style.display = "block";
      }
      console.log("UNKNOWN");
    });

    // manual install button
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      deferredPrompt = e;
    });

    const installApp = document.querySelector(".install");
    installApp.addEventListener("click", async () => {
      if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          deferredPrompt = null;
        }
      }
    });
  } else {
    document.querySelector(".installSection").style.display = "none";
  }
});
let closeBtn = document.querySelector(".close-btn");
let iosDiv = document.querySelector(".ios");
closeBtn.addEventListener("click", () => {
  iosDiv.style.display = "none";
});
