// < Create link tag and push in document for error
var CLTag = path => {
    let elem = document.createElement("link")
    elem.rel = "stylesheet"
    elem.href = path
    document.head.appendChild(elem)
};
var KaushanCLT = () => CLTag("fonts/gstatic/Kaushan Script/Kaushan Script.css")
var smonoCLT = () => CLTag("fonts/gstatic/Space Mono/Space Mono.css")