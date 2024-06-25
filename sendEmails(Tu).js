function sendEmailsTu() {
    var EMAIL_SENT = 'EMAIL SENT'; 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email(Tu)");
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
       var message = col[9];                            // Tenth column   (J)
       var row = startRow + i++
         if(emailSent !== EMAIL_SENT) {                                            //Prevents sending duplicates
            MailApp.sendEmail(emailAddress, subject, message); 
            sheet.getRange(row,6).setValue(EMAIL_SENT);               // Print "EMAIL SENT" in F Column
            SpreadsheetApp.flush();                                                // Make sure the cell is updated right away in case the script is interrupted
      }
    }
 }