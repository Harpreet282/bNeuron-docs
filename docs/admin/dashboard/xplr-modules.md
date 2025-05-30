---
sidebar_position: 14
---
# Xplr Modules

- **Module Marketplace:** Browse and install pre-built modules from the platform marketplace to extend functionality.

- **Custom Development:** Create custom modules using development frameworks and APIs for specific business requirements.

- **Module Configuration:** Configure module settings, parameters, and integration options after installation.

- **Dependency Management:** Manage module dependencies and ensure compatibility across different system components.

- **Version Control:** Track module versions with update management and rollback capabilities for stability.

- **Testing Environment:** Test modules in isolated environments before deploying to production systems.

- **Performance Monitoring:** Monitor module performance, resource usage, and impact on system operations.

- **Security Scanning:** Automated security scanning of modules to ensure they meet platform security standards.

- **Integration APIs:** Connect modules with external systems and third-party services through standardized APIs.



### XPLR Modules Administration:

### 📋 Assessment Templates

#### Template Listing

Admin will view a table of existing assessment templates showing:

- Template Name
- Department
- Question Count
- Last Updated
- Actions: Edit / Archive

#### Add New Template

- **Template Name**: Enter a clear name (e.g., *Finance Readiness Q1*)
- **Department**: Select the relevant department (HR, Finance, IT, Customer Support, etc.)
- **Description**: Brief summary of what this template measures

#### Questions Section

- **Question Text**: Enter each question (e.g., *How mature are your data pipelines?*)
- **Question Type**: Select Rating (1–5), Yes/No, or Free Text
- **Weight**: Assign a numeric weight (1–10) indicating question importance
- **Guidance Notes**: Enter helper text to guide respondents

- **Save Template**: Click "Save" to create the template

#### Edit Template

- Click "Edit" to modify template fields or questions
- Click "Update" to save changes

#### Archive Template

- Disable outdated templates so they no longer appear in new assessments

---

### 🌲 Taxonomy Explorer

#### Process Map View

- Visual tree of Departments → Functions → Sub-Processes

#### Add Department

- **Department Name**: Enter new department (e.g., *Legal*)
- **Description**: Add short description of scope

#### Add Function

- **Function Name**: Enter function name (e.g., *Contract Review*)
- **Parent Department**: Select associated department

#### Add Sub-Process

- **Sub-Process Name**: Enter sub-process name (e.g., *Upload NDA*)
- **Parent Function**: Select parent function

#### Assign Use-Case Categories

- Tag each sub-process with default use-case categories (e.g., *Document Automation*, *Approval Workflow*)

#### Reorder / Drag-Drop

- Rearrange nodes by dragging in the visual map to reflect organizational changes

---

### 📚 Use-Case Repository

#### Repository Listing

Table with columns:

- Use-Case Title
- Industry
- Impact Score
- Feasibility Score
- Actions: Edit / Delete

#### Add Use-Case

- **Title**: Enter name (e.g., *Invoice OCR Automation*)
- **Industry**: Select one or more industries (Finance, Manufacturing, Retail, etc.)
- **Description**: Provide summary of the use case
- **Expected ROI**: Input numeric ROI estimate or range
- **Required Data Sources**: List required data systems (ERP, CRM, Email)
- **Tags**: Tag with relevant keywords (OCR, RPA, LLM)
- **Save Use-Case**: Click "Save" to add to the repository

#### Edit Use-Case

- Update fields as needed and click "Update"

#### Delete Use-Case

- Click trash icon and confirm to remove

---

### 🛠️ Portfolio & Roadmap Settings

#### ICE Scoring Configuration

- **Impact Weight**: Enter percentage (e.g., 40%)
- **Confidence Weight**: Enter percentage (e.g., 30%)
- **Ease Weight**: Enter percentage (e.g., 30%)

#### Ranking Thresholds

- **High Priority**: ICE ≥ 75
- **Medium Priority**: ICE 50–74
- **Low Priority**: ICE < 50

#### Auto-Rank Rules

- Toggle auto-ranking of new use cases on creation

#### Generate Roadmap

- **Select Use Cases**: Check box next to each prioritized use case
- **Timeline Settings**: Choose Quarterly / Monthly / Custom date ranges
- **Resource Tags**: Tag required teams (e.g., Data, DevOps, BI)
- **Create Roadmap**: Click "Generate" to produce a Gantt-style plan

#### Export Roadmap

- Download roadmap as PDF or export to MS Project
