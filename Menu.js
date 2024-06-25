function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var menuEntries = [];
    menuEntries.push({name: "Activate Automatic Emailing", functionName: "createTrigger"});
    menuEntries.push({name: "Deactivate Automatic Emailing", functionName: "deleteTrigger"});
    ss.addMenu("Auto Emails", menuEntries);
}