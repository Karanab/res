function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    
    let fontColor = document.getElementById("fontColor").value;
    let fontStyle = document.getElementById("fontStyle").value;
    let isBold = document.getElementById("bold").checked;
    let isItalic = document.getElementById("italic").checked;
    
    document.getElementById("resume-name").innerText = name;
    document.getElementById("resume-email").innerText = "Email: " + email;
    document.getElementById("resume-phone").innerText = "Phone: " + phone;
    document.getElementById("resume-address").innerText = "Address: " + address;
    document.getElementById("resume-education").innerText = education;
    document.getElementById("resume-skills").innerText = skills;
    document.getElementById("resume-experience").innerText = experience;
    
    let resumeTextElements = document.querySelectorAll("#resume-preview p, #resume-preview h2, #resume-preview h3");
    resumeTextElements.forEach(element => {
        element.style.color = fontColor;
        element.style.fontFamily = fontStyle;
        element.style.fontWeight = isBold ? "bold" : "normal";
        element.style.fontStyle = isItalic ? "italic" : "normal";
    });

    let file = document.getElementById("imageUpload").files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("resume-image").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function downloadPDF() {
    let element = document.getElementById("resume-preview");
    html2canvas(element).then(canvas => {
        let imgData = canvas.toDataURL("image/png");
        let pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 180, 0);
        pdf.save("resume.pdf");
    });
}
