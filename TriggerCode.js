function createTrigger() {
    ScriptApp.newTrigger('sendSCIEmails')
        .timeBased()
        .everyMinutes(1)
        .create();
    ScriptApp.newTrigger('sendEmailsTu')
        .timeBased()
        .everyMinutes(1)
        .create();
    ScriptApp.newTrigger('sendMTHEmails')
        .timeBased()
        .everyMinutes(1)
        .create();
    ScriptApp.newTrigger('sendENGEmails')
        .timeBased()
        .everyMinutes(1)
        .create();
    ScriptApp.newTrigger('sendSSEmails')
        .timeBased()
        .everyMinutes(1)
        .create();
    ScriptApp.newTrigger('sendWLEmails')
        .timeBased()
        .everyMinutes(1)
        .create();
  }
  function deleteTrigger() {
    var allTriggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < allTriggers.length; i++) {
      ScriptApp.deleteTrigger(allTriggers[i]);
    }
  }