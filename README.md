# Health Challenge Tracker

This is a simple Angular application designed to track and manage users' workout routines. The application allows users to input their workout details, view workout statistics, and filter or search through the list of workouts.

Table of Contents
1.Features
2.Getting Started
3.Usage
4.Testing
5.Deployment
6.Technologies Used

#Features
*Add Workouts: Add workout details such as name, workout type, and duration.
*View Workout List: Display a list of all user workouts.
*Search and Filter: Search for users by name and filter workouts by type.
*Pagination: View workouts with pagination if there are more than 5 entries.
*Charts: View a chart of workout progress for each user.
*Responsive Design: Adapt to different screen sizes.

#Getting Started
Follow these steps to set up the project locally:

Prerequisites
Make sure you have the following installed:

Node.js (v14.x or above)
Angular CLI (v14.x or above)
Git
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your_username/health-challenge-tracker.git
cd health-challenge-tracker
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
ng serve
Open http://localhost:4200 in your browser to view the application.

*Usage
Adding Workouts
1.Fill in the user name, workout type, and workout minutes.
2.Click on the "Add Workout" button to add the workout to the list.

Viewing Workouts
The workouts are displayed in a table with columns for name, workout types, number of workouts, and total workout minutes.
Use the pagination controls to navigate through multiple pages of workouts.

Searching and Filtering
Use the search bar to find users by name.
Use the filter dropdown to filter workouts by type.

Viewing Charts
Click on a user in the sidebar to view a chart of their workout progress.
