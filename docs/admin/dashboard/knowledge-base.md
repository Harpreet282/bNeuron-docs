---
title: Knowledge Base
---

# Knowledge Base

## 📄 Connectors Listing

### 📋 Columns

- **Connector Name**
- **Type**: DB / File / API
- **Status**
- **Last Sync**
- **Actions**: Edit / Sync Now / Delete

---

## ➕ Add Connector

- **Connector Type**: Select from MySQL, MongoDB, S3, REST API, Manual Upload
- **Connection Details**:
  - Host
  - Port
  - Credentials
  - SSL Toggle
- **Schedule**: Manual or using a cron expression
- **Chunk Settings**:
  - Chunk size
  - Overlap
  - Embedding model
- **Ingestion Filters**:
  - File types
  - Table names
  - Endpoint paths

---

## 📡 Ingestion Monitor

- Live job feed displaying:
  - **Job Name**
  - **Start Time**
  - **Duration**
  - **Row Count**
  - **Errors**
- Drill down into logs for failure analysis

---

## 📚 Document Explorer

- Browse ingested items with the following metadata:
  - **Title**
  - **Source Connector**
  - **Date Ingested**
  - **Tags**

### ⚙️ Actions

- View content preview
- Tag / Untag
- Re-ingest
- Delete
