function openEnvelope() {
    const opening = document.getElementById("opening");
    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(() => {
        opening.classList.add("hidden");
        document.getElementById("letter").classList.remove("hidden");
    }, 1000);
}

function showEnding() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("ending").classList.remove("hidden");
}
