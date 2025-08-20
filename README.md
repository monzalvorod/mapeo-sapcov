# SAPCOV File Management System

A collaborative file management system for UNICEF and ODI to establish juvenile specialized courts (SAPCOV) across states.

## Overview

The SAPCOV File Management System is designed to facilitate the process of setting up specialized juvenile courts across different states. It provides a structured workflow for courts to upload necessary documents and track their progress, while allowing UNICEF and ODI administrators to monitor and manage the implementation across all states.

## Key Features

- **Task-Based File Management**: Files are organized according to the SAPCOV implementation steps.
- **Workflow Progression**: Courts can only proceed to subsequent tasks after completing prerequisite steps.
- **Progress Visualization**: All users can view national progress through intuitive visualizations.
- **Role-Based Access**: Different interfaces for court users vs. administrators.
- **File Organization**: Administrators can easily view, filter, and manage files from all courts.

## User Roles

1. **Court Users**
   - Upload files required for each implementation step
   - View national progress visualization
   - Track their own court's progress

2. **Administrator Users (UNICEF & ODI)**
   - View and manage files from all courts
   - Monitor national implementation progress
   - Generate reports and analytics

## Implementation Steps

The SAPCOV setup involves the following major steps:

1. **Project Presentation**
2. **Scouting checklist resources**
3. **Signing agreement and work plan**
4. **Adapting court rooms for children**
5. **Training**
6. **Monitoring**
7. **Mandatory**
8. **Database for evaluation**

Each major step contains multiple sub-tasks that require specific documentation.

## Technical Details

The prototype is built using:
- HTML5
- Tailwind CSS for styling
- JavaScript for interactivity
- Chart.js for data visualization

## Getting Started

To view the prototype:

1. Open the `index.html` file in a modern web browser
2. Login using any of the following roles:
   - Court User
   - UNICEF Admin
   - ODI Admin

## Project Structure

```
├── css/
│   └── styles.css
├── img/
│   └── sapcov-logo.svg
├── js/
│   └── app.js
├── pages/
│   ├── login.html
│   ├── admin/
│   │   ├── dashboard.html
│   │   ├── files.html
│   │   ├── progress.html
│   │   └── courts.html
│   └── court/
│       ├── workflow.html
│       ├── progress.html
│       └── profile.html
└── index.html
```

## License

This project is a prototype commissioned by UNICEF and ODI for the SAPCOV initiative.

## Contact

For more information about the SAPCOV initiative, contact UNICEF or ODI directly. 