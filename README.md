# Health Challenge Tracker

This is a simple Angular application designed to track and manage users' workout routines. The application allows users to input their workout details, view workout statistics, and filter or search through the list of workouts.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Features
- **Add Workouts:** Add workout details such as name, workout type, and duration.
- **View Workout List:** Display a list of all user workouts.
- **Search and Filter:** Search for users by name and filter workouts by type.
- **Pagination:** View workouts with pagination if there are more than 5 entries.
- **Charts:** View a chart of workout progress for each user.
- **Responsive Design:** Adapt to different screen sizes.

## Getting Started
### Prerequisites
Make sure you have the following installed:
- Node.js (v14.x or above)
- Angular CLI (v14.x or above)
- Git

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your_username/health-challenge-tracker.git
    cd health-challenge-tracker
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the application:
    ```bash
    ng serve
    ```
4. Open http://localhost in your browser to view the application.

## Usage
### Adding Workouts
1. Fill in the user name, workout type, and workout minutes.
2. Click on the "Add Workout" button to add the workout to the list.

### Viewing Workouts
- The workouts are displayed in a table with columns for name, workout types, number of workouts, and total workout minutes.
- Use the pagination controls to navigate through multiple pages of workouts.

### Searching and Filtering
- Use the search bar to find users by name.
- Use the filter dropdown to filter workouts by type.

### Viewing Charts
- Click on a user in the sidebar to view a chart of their workout progress.

## Testing
Unit tests are included for one component and one service. To run the tests and generate a code coverage report:
```bash
ng test --code-coverage
