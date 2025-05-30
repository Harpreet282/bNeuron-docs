---
sidebar_position: 11
---
# Knowledge Base

- **Content Management:** Create, edit, and organize knowledge base articles with rich text formatting and media support.

- **Category Organization:** Structure content using hierarchical categories and tags for easy navigation and discovery.

- **Search Functionality:** Implement powerful search capabilities with filters, keywords, and content indexing for quick information retrieval.

- **Version Control:** Track article revisions with change history and rollback capabilities for content management.

- **Access Control:** Set permissions for who can view, edit, or publish knowledge base content based on user roles.

- **Publishing Workflow:** Manage content approval processes with draft, review, and published status management.

- **Analytics & Insights:** Track article views, search queries, and user engagement to optimize content effectiveness.

- **Multi-format Support:** Support various content formats including text, images, videos, and downloadable documents.

- **Integration Options:** Connect with external documentation systems and content management platforms.

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
