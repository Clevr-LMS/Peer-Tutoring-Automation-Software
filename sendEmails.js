function sendSCIEmails() {
    var EMAIL_SENT = 'EMAIL SENT'; 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SCIEmail");
    var range = sheet.getRange(1, 2);  // Fetch the range of cells B1:B1
    var subject = range.getValues();   // Fetch value for subject line from above range
    var range = sheet.getRange(1, 9);  // Fetch the range of cells I1:I1
    var numRows = range.getValues();   // Fetch value for number of emails from above range
    var startRow = 4;                  // First row of data to process
    var dataRange = sheet.getRange(startRow, 1, numRows,10 ) // Fetch the range of cells A4:J_
    var data = dataRange.getValues();  // Fetch values for each row in the Range.
    for (i in data) {
       var col = data[i];
       var emailAddress = col[0];                       // First column   (A)
       var emailSent = col[5];                          // Sixth column   (F)
       var emailCC1 = col[6];                           // Seventh column (G)
       var emailCC2 = col[7];                           // Eighth column  (H)
       var emailCC3 = col[8];                           // Ninth column   (I)
       var message = col[9];                            // Tenth column   (J)
       var row = startRow + i++
         if(emailSent !== EMAIL_SENT) {                                            //Prevents sending duplicates
            MailApp.sendEmail(emailAddress, subject, message, {                    // Places in recipient, subject, and message respectively
              cc: emailCC1+','+emailCC2+','+emailCC3});                            // CCs up to three people from columns G, H, I 
            sheet.getRange(row,6).setValue(EMAIL_SENT);                            // Print "EMAIL SENT" in F Column
            SpreadsheetApp.flush();                                                // Make sure the cell is updated right away in case the script is interrupted
      }
    }
 }
 function sendMTHEmails() {
    var EMAIL_SENT = 'EMAIL SENT'; 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("MTHEmail");
    var range = sheet.getRange(1, 2);  // Fetch the range of cells B1:B1
    var subject = range.getValues();   // Fetch value for subject line from above range
    var range = sheet.getRange(1, 9);  // Fetch the range of cells I1:I1
    var numRows = range.getValues();   // Fetch value for number of emails from above range
    var startRow = 4;                  // First row of data to process
    var dataRange = sheet.getRange(startRow, 1, numRows,10 ) // Fetch the range of cells A4:J_
    var data = dataRange.getValues();  // Fetch values for each row in the Range.
    for (i in data) {
       var col = data[i];
       var emailAddress = col[0];                       // First column   (A)
       var emailSent = col[5];                          // Sixth column   (F)
       var emailCC1 = col[6];                           // Seventh column (G)
       var emailCC2 = col[7];                           // Eighth column  (H)
       var emailCC3 = col[8];                           // Ninth column   (I)
       var message = col[9];                            // Tenth column   (J)
       var row = startRow + i++
         if(emailSent !== EMAIL_SENT) {                                            //Prevents sending duplicates
            MailApp.sendEmail(emailAddress, subject, message, {                    // Places in recipient, subject, and message respectively
              cc: emailCC1+','+emailCC2+','+emailCC3});                            // CCs up to three people from columns G, H, I 
            sheet.getRange(row,6).setValue(EMAIL_SENT);                            // Print "EMAIL SENT" in F Column
            SpreadsheetApp.flush();                                                // Make sure the cell is updated right away in case the script is interrupted
      }
    }
 }
 function sendENGEmails() {
    var EMAIL_SENT = 'EMAIL SENT'; 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ENGEmail");
    var range = sheet.getRange(1, 2);  // Fetch the range of cells B1:B1
    var subject = range.getValues();   // Fetch value for subject line from above range
    var range = sheet.getRange(1, 9);  // Fetch the range of cells I1:I1
    var numRows = range.getValues();   // Fetch value for number of emails from above range
    var startRow = 4;                  // First row of data to process
    var dataRange = sheet.getRange(startRow, 1, numRows,10 ) // Fetch the range of cells A4:J_
    var data = dataRange.getValues();  // Fetch values for each row in the Range.
    for (i in data) {
       var col = data[i];
       var emailAddress = col[0];                       // First column   (A)
       var emailSent = col[5];                          // Sixth column   (F)
       var emailCC1 = col[6];                           // Seventh column (G)
       var emailCC2 = col[7];                           // Eighth column  (H)
       var emailCC3 = col[8];                           // Ninth column   (I)
       var message = col[9];                            // Tenth column   (J)
       var row = startRow + i++
         if(emailSent !== EMAIL_SENT) {                                            //Prevents sending duplicates
            MailApp.sendEmail(emailAddress, subject, message, {                    // Places in recipient, subject, and message respectively
              cc: emailCC1+','+emailCC2+','+emailCC3});                            // CCs up to three people from columns G, H, I 
            sheet.getRange(row,6).setValue(EMAIL_SENT);                            // Print "EMAIL SENT" in F Column
            SpreadsheetApp.flush();                                                // Make sure the cell is updated right away in case the script is interrupted
      }
    }
 }
 function sendSSEmails() {
    var EMAIL_SENT = 'EMAIL SENT'; 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SSEmail");
    var range = sheet.getRange(1, 2);  // Fetch the range of cells B1:B1
    var subject = range.getValues();   // Fetch value for subject line from above range
    var range = sheet.getRange(1, 9);  // Fetch the range of cells I1:I1
    var numRows = range.getValues();   // Fetch value for number of emails from above range
    var startRow = 4;                  // First row of data to process
    var dataRange = sheet.getRange(startRow, 1, numRows,10 ) // Fetch the range of cells A4:J_
    var data = dataRange.getValues();  // Fetch values for each row in the Range.
    for (i in data) {
       var col = data[i];
       var emailAddress = col[0];                       // First column   (A)
       var emailSent = col[5];                          // Sixth column   (F)
       var emailCC1 = col[6];                           // Seventh column (G)
       var emailCC2 = col[7];                           // Eighth column  (H)
       var emailCC3 = col[8];                           // Ninth column   (I)
       var message = col[9];                            // Tenth column   (J)
       var row = startRow + i++
         if(emailSent !== EMAIL_SENT) {                                            //Prevents sending duplicates
            MailApp.sendEmail(emailAddress, subject, message, {                    // Places in recipient, subject, and message respectively
              cc: emailCC1+','+emailCC2+','+emailCC3});                            // CCs up to three people from columns G, H, I 
            sheet.getRange(row,6).setValue(EMAIL_SENT);                            // Print "EMAIL SENT" in F Column
            SpreadsheetApp.flush();                                                // Make sure the cell is updated right away in case the script is interrupted
      }
    }
 }
 function sendWLEmails() {
    var EMAIL_SENT = 'EMAIL SENT'; 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("WLEmail");
    var range = sheet.getRange(1, 2);  // Fetch the range of cells B1:B1
    var subject = range.getValues();   // Fetch value for subject line from above range
    var range = sheet.getRange(1, 9);  // Fetch the range of cells I1:I1
    var numRows = range.getValues();   // Fetch value for number of emails from above range
    var startRow = 4;                  // First row of data to process
    var dataRange = sheet.getRange(startRow, 1, numRows,10 ) // Fetch the range of cells A4:J_
    var data = dataRange.getValues();  // Fetch values for each row in the Range.
    for (i in data) {
       var col = data[i];
       var emailAddress = col[0];                       // First column   (A)
       var emailSent = col[5];                          // Sixth column   (F)
       var emailCC1 = col[6];                           // Seventh column (G)
       var emailCC2 = col[7];                           // Eighth column  (H)
       var emailCC3 = col[8];                           // Ninth column   (I)
       var message = col[9];                            // Tenth column   (J)
       var row = startRow + i++
         if(emailSent !== EMAIL_SENT) {                                            //Prevents sending duplicates
            MailApp.sendEmail(emailAddress, subject, message, {                    // Places in recipient, subject, and message respectively
              cc: emailCC1+','+emailCC2+','+emailCC3});                            // CCs up to three people from columns G, H, I 
            sheet.getRange(row,6).setValue(EMAIL_SENT);                            // Print "EMAIL SENT" in F Column
            SpreadsheetApp.flush();                                                // Make sure the cell is updated right away in case the script is interrupted
      }
    }
 }