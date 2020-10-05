document.addEventListener("keydown", function (event) {
    let audio;
    if (event.code === "KeyA") {
        audio = new Audio("A.mp3")
        audio.play()
    } else if (event.code === "KeyS") {
        audio = new Audio("S.mp3")
        audio.play()
    } else if (event.code === "KeyD") {
        audio = new Audio("D.mp3")
        audio.play()
    } else if (event.code === "KeyF") {
        audio = new Audio("F.mp3")
        audio.play()
    } else if (event.code === "KeyG") {
        audio = new Audio("G.mp3")
        audio.play()
    } else if (event.code === "KeyH") {
        audio = new Audio("H.mp3")
        audio.play()
    } else if (event.code === "KeyJ") {
        audio = new Audio("J.mp3")
        audio.play()
    } else if (event.code === "KeyW") {
        audio = new Audio("W.mp3")
        audio.play()
    } else if (event.code === "KeyE") {
        audio = new Audio("E.mp3")
        audio.play()
    } else if (event.code === "KeyT") {
        audio = new Audio("T.mp3")
        audio.play()
    } else if (event.code === "KeyY") {
        audio = new Audio("Y.mp3")
        audio.play()
    } else if (event.code === "KeyU") {
        audio = new Audio("U.mp3")
        audio.play()
    } else {
        console.warn("Key not exist")
    }
});