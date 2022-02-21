const nextReply = {
        dataStatus: "Let's start with reviewing you product DATA",
        kpisStatus: "Let's review the relevant KPIs",
        roadmapStatus: "Let's build a Roadmap",
        allGood: "Great! you are almost there, let's proceed to deeper review",
    }


function createNextStepHeader(name){
    const header = document.createElement("h3")
    header.innerText = name
    return header
}

function createNextStepButton(){
    const nextButton = document.createElement("button")
    nextButton.innerText = "Start!"
    return nextButton
}


function createNextStep(nextName){
    const container = document.createElement("div")
    container.append(
        createNextStepHeader(nextReply[nextName]), 
        createNextStepButton()
    )
    document.body.appendChild(container)
}



function inputStatus() {
    let dataStatus = document.getElementById('Data').checked
    let kpisStatus = document.getElementById('KPIs').checked
    let roadmapStatus = document.getElementById('Roadmap').checked
    if (dataStatus & kpisStatus & roadmapStatus) {
        createNextStep("allGood")
    }
    if (!dataStatus) {
        createNextStep("dataStatus")
    }
    if (!kpisStatus) {
        createNextStep("kpisStatus")
    }
    if (!roadmapStatus) {
        createNextStep("roadmapStatus")
    }
}