---
title: Model Providers
---

# Model Providers

## 📋 Providers Listing

- **Columns**:
  - **Provider Name**
  - **Endpoint**
  - **Default Model**
  - **Status**
  - **Cost Tier**
  - **Actions**: Edit / Disable

---

## ➕ Add Model Provider

- **Provider Type**: OpenAI, Anthropic, Local LLM, Azure AI, etc.
- **API Key / Credentials**: Secure entry field
- **Endpoint URL**: Specify if using a custom host
- **Default Model Version**: e.g., `gpt-4-turbo`
- **Routing Rules**: Define when to use this provider (e.g., tag-based, fallback)
- **Rate Limit**: Max requests per minute

---

## 📊 Usage Dashboard

- **Graphs**:
  - API calls per day
  - Tokens consumed
  - Cost by provider

- **Alerts**:
  - Budget thresholds
  - Rate-limit breaches

---

# Flows (Low-Code Builder)

## 📄 Flow Listing

### Columns

- **Flow Name**
- **Owner**
- **Status**: Draft / Published
- **Last Run**
- **Success Rate**
- **Actions**: Edit / Run / Delete

### 🔍 Search & Filter

- Filter by **Tag**, **Owner**, and **Status**

---

## ➕ Create Flow

- **Select Template**: Choose from industry templates or start blank
- **Metadata**:
  - Name
  - Description
  - Tags
  - Trigger Type (Manual / API / Scheduled)

---

## 🧩 Canvas

- **Node Palette**:
  - Ingest
  - Prompt
  - Condition
  - Code
  - API Call
  - Notification

- **Drag & Drop**: Place nodes and connect arrows to define flow logic

### ⚙️ Node Configuration

- Define for each node:
  - Prompt text or API details
  - Input/output mappings
  - Retry and error-handling settings

---

## 🗂️ Version Control

- **Save Version**: Enter a version note
- **Compare Versions**: Side-by-side diff view
- **Rollback**: Revert to a previous version

---

## 🚀 Publish & Deploy

- **Environment**: Toggle between Dev, QA, and Prod
- **Schedule**: Define with a cron expression or set as one-time run
- **Access Control**: Assign roles allowed to execute the flow
