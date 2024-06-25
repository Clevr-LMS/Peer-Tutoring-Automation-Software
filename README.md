# Peer Tutoring Automation

This repository contains Google Apps Script code for automating email notifications in a peer tutoring program. The scripts handle the sending of emails to students, parents, and counselors based on their subject-specific needs.

## Repository Structure

The repository is organized into the following files:

- `sendEmails.js`: Contains functions to send emails for various subjects.
- `triggers.js`: Contains functions to create and delete triggers for automated email sending.
- `sendEmailsTu.js`: Contains a specific function to send emails related to a specific topic.

## Google Apps Script Functions

### Email Sending Functions

The following functions are responsible for sending emails based on subject-specific sheets:

- `sendSCIEmails()`: Sends Science-related emails.
- `sendMTHEmails()`: Sends Math-related emails.
- `sendENGEmails()`: Sends English-related emails.
- `sendSSEmails()`: Sends Social Science-related emails.
- `sendWLEmails()`: Sends World Language-related emails.
- `sendEmailsTu()`: Sends emails for a specific topic.

### Trigger Functions

These functions manage the creation and deletion of time-based triggers for automated email sending:

- `createTrigger()`: Creates time-based triggers for each email sending function.
- `deleteTrigger()`: Deletes all existing triggers.

### Menu Function

This function adds a custom menu to the Google Sheets interface to activate or deactivate automatic emailing:

- `onOpen()`: Adds a custom menu for activating or deactivating automatic emailing.

## Usage

### Setting Up the Script

1. Open your Google Sheets document.
2. Go to `Extensions` > `Apps Script`.
3. Copy the content of each `.js` file from this repository into separate script files in the Apps Script editor.
4. Save the script project.

### Activating Automatic Emailing

1. Once the script is set up, a new menu called `Auto Emails` will appear in your Google Sheets.
2. Click on `Auto Emails` > `Activate Automatic Emailing` to start the email automation.

### Deactivating Automatic Emailing

1. Click on `Auto Emails` > `Deactivate Automatic Emailing` to stop the email automation.

## How It Works

1. **Data Collection**: Students fill out a form specifying their email, counselor's email, parent's email, and the subjects they need help with.
2. **Data Storage**: The collected data is stored in specific sheets named `SCIEmail`, `MTHEmail`, `ENGEmail`, `SSEmail`, `WLEmail`, and `Email(Tu)`.
3. **Email Sending**: The script checks each sheet for entries and sends emails to the specified addresses, including CC to parents and counselors if provided.
4. **Duplication Prevention**: After sending an email, the script marks the entry as `EMAIL SENT` to prevent duplicate emails.
5. **Automation**: The triggers are set to run the email sending functions every minute to ensure timely notifications.

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.
