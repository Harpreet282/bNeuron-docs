---
title: Notifications & Scheduler
---

# Notifications & Scheduler

## 🔔 Notification Templates

### Template List

Admin will view all templates with columns:

- Name  
- Event Trigger  
- Channels  
- Status  

### Add Template

- **Template Name:** Admin enters a label (e.g., “Assessment Reminder”).  
- **Event Trigger:** Admin selects a system event (Assessment Due, Flow Failure).  
- **Channels:** Admin toggles Email, SMS, In-App.  
- **Message Body:** Admin writes the text, using placeholders like `{{userName}}`, `{{dueDate}}`.  
- **Save Template:** Admin clicks “Save.”  

---

## 🗓️ Scheduler

### Job List

Admin will see scheduled jobs with columns:

- Name  
- Flow/Report  
- Cron Expression  
- Next Run  
- Status  

### Create Job

- **Job Name:** Admin enters a descriptive name.  
- **Action:** Choose to run a flow, send a report, or execute a script.  
- **Schedule:** Enter a cron expression or use a date/time picker.  
- **Notification on Failure:** Select a notification template to trigger if the job fails.  
- **Enable/Disable:** Toggle job activation.  
