function handleScriptingMessage(message) {
    pendingMessages.push(message);
}

function initViewer(browserApi) {
    // PDFViewer will handle any messages after it is created.
    window.removeEventListener('message', handleScriptingMessage, false);
    const viewer = document.querySelector('#viewer');
    viewer.init(browserApi);
    while (pendingMessages.length > 0) {
        viewer.handleScriptingMessage(pendingMessages.shift());
    }
    Object.assign(window, { viewer });
}
/**
 * Determine if the content settings allow PDFs to execute javascript.
 */
function configureJavaScriptContentSetting(browserApi) {
    return new Promise(resolve => {
        chrome.contentSettings.javascript.get({
            'primaryUrl': browserApi.getStreamInfo().originalUrl,
            'secondaryUrl': window.location.origin,
        }, (result) => {
            browserApi.getStreamInfo().javascript = result.setting;
            resolve(browserApi);
        });
    });
}
/**
 * Entrypoint for starting the PDF viewer. This function obtains the browser
 * API for the PDF and initializes the PDF Viewer.
 */
function main() {
    // Set up an event listener to catch scripting messages which are sent prior
    // to the PDFViewer being created.
    window.addEventListener('message', handleScriptingMessage, false);
    let chain = createBrowserApi();
    // Content settings may not be present in test environments.
    if (chrome.contentSettings) {
        chain = chain.then(configureJavaScriptContentSetting);
    }
    chain.then(initViewer);
}
main();
