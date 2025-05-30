---
sidebar_position: 20
---
# Scheduler

- **Task Scheduling:** Create and manage scheduled tasks with flexible timing options including one-time, recurring, and cron-based schedules.

- **Job Management:** Monitor scheduled jobs with status tracking, execution history, and performance metrics.

- **Automated Workflows:** Set up automated workflow execution triggered by time-based events or system conditions.

- **Resource Allocation:** Manage computational resources allocated to scheduled tasks with priority and resource limit settings.

- **Dependency Management:** Configure task dependencies where jobs can be chained together with conditional execution logic.

- **Notification Integration:** Receive notifications for job completion, failures, and status changes through multiple channels.

- **Retry Mechanisms:** Configure automatic retry policies for failed jobs with backoff strategies and maximum retry limits.

- **Schedule Optimization:** Optimize job scheduling to minimize resource conflicts and maximize system efficiency.

- **Audit Logging:** Maintain detailed logs of all scheduled activities, execution times, and resource usage for analysis.

## 🗓️ Job List

Admin will see scheduled jobs with columns:

- Name  
- Flow/Report  
- Cron Expression  
- Next Run  
- Status  

## ➕ Create Job

- **Job Name:** Admin will enter a descriptive name.  
- **Action:** Admin will choose to run a flow, send a report, or execute a script.  
- **Schedule:** Admin will enter a cron expression or use a date/time picker.  
- **Notification on Failure:** Admin will select a notification template to fire if the job fails.  
- **Enable/Disable:** Admin will toggle job activation.  
