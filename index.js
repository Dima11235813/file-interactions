const arrayOfPdfs = ["index", "index2"]

let links = []

var fileDownloadHandler = function () {
    let root = document.getElementById("root")
    let divForDownload = document.createElement("div")
    let downloadLinks = arrayOfPdfs.map(fileName => {
        return createDownloadLink(fileName)
    })
    //Add items to dom
    downloadLinks.forEach(link => {
        divForDownload.append(link)
    })
    root.append(divForDownload)
    //Create download all button
    downloadAllButton = document.createElement("button")
    downloadAllButton.onclick = handleDownloadAllButtonClick
    // downloadAllButton.text = "Download All"
    // downloadAllButton.html = "Download All"
    downloadAllButton.innerText = "Download All"
    root.append(downloadAllButton)
    //MAILTO LINK

    //PRINT
    links.forEach((link, index) => {
        let printButton = document.createElement("button")
        let buttonContainer = document.createElement("div")
        printButton.innerText = `Print ${arrayOfPdfs[index]}`
        printButton.onclick = handlePrintClick
        buttonContainer.append(printButton)
        root.append(buttonContainer)
    })

}
//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', (event) => {
    console.log(`DOM fully loaded and parsed, event: ${event}`);
    fileDownloadHandler()
});

const handleDownloadAllButtonClick = (event) => {
    console.log(`User clicked download all`)
    console.table(event)
    links.forEach(link => {
        link.click()
    })
}

const createDownloadLink = (fileName) => {
    //add link attributes for downloading
    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
    let downloadLink = document.createElement("a")
    downloadLink.href = `./${fileName}`
    downloadLink.download = `${fileName}.pdf`
    downloadLink.text = `Download PDF ${fileName}`
    //save off link reference for use by click handler
    links.push(downloadLink)
    let divForLink = document.createElement("div")
    divForLink.append(downloadLink)
    return divForLink
}

const handlePrintClick = () => {
    links.forEach(link => {
        
    })
}