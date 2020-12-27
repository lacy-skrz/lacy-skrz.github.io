var animationCheck = document.querySelector("#playAnimationCheckbox input");
animationCheck.addEventListener("click", setUserState, false);

var userSetting = sessionStorage.getItem("userAnimationState");

function setMotionState() {
  // user hasn't specified a preference
  if (userSetting === null) {
    // OS setting is supported by browser
    if (reduceMotionQuery.matches) {
      animationCheck.checked = false;
      document.body.style.setProperty("--playState", "paused");
    } else { 
      animationCheck.checked = true;
      document.body.style.setProperty("--playState", "running");
    }
  } else {
    setStoredState();
  }
}
setMotionState();

function setStoredState() {
  if (userSetting === "play") {
    animationCheck.checked = true;
  } else {
    animationCheck.checked = false;
  }
  
  setUserState();
}

function setUserState(e) {
  if (animationCheck.checked) {
    document.body.style.setProperty("--playState", "running");
    sessionStorage.setItem("userAnimationState", "play");
  } else {
    document.body.style.setProperty("--playState", "paused");
    sessionStorage.setItem("userAnimationState", "stop")
  }
}