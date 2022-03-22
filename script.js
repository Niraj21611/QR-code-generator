const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImage = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    generateBtn.innerText = "Generating QR code..."
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate OR code";
    })
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})


qrInput.addEventListener("keyup", e => {
    if(e.key == "Enter"){
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    generateBtn.innerText = "Generating QR code..."
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate OR code";
    })};
});