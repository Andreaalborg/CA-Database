[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/mzxBmZy_)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11719175&assignment_repo_type=AssignmentRepo)
![](http://143.42.108.232/pvt/Noroff-64.png)
# Noroff
# Back-end Development Year 1
### Databases - Course Assignment 1 <sup>V4</sup>

Startup code for Noroff back-end development 1 - Front-end Technologies course.

Instruction for the course assignment is in the LMS (Moodle) system of Noroff.
[https://lms.noroff.no](https://lms.noroff.no)

![](http://143.42.108.232/pvt/important.png)

You will not be able to make any submission after the deadline of the course assignment. Make sure to make all your commit **BEFORE** the deadline

![](http://143.42.108.232/pvt/help_small.png)

If you are unsure of any instructions for the course assignment, contact out to your teacher on **Microsoft Teams**.

**REMEMBER** Your Moodle LMS submission must have your repository link **AND** your Github username in the text file.

---

# Application Installation and Usage Instructions

1 Clone the repo to your local machine
2 Navigate into the project folder and run npm install to install dependencies.
3 Start the app with npm start.
4 Open your web browser and go to http://localhost:3000.

# Environment Variables

DB_HOST: The database host URL
DB_USER: The database username
DB_PASSWORD: The database password
DB_NAME: The name of the database

# Additional Libraries/Packages

bcrypt: Used for password hashing.
passport: Utilized for user authentication.
sequelize: ORM used for database manipulation.

# NodeJS Version Used

 tested on NodeJS version 14.17.0.

# DATABASE

The application uses MySQL database. The database is named adoptiondb and it consists of tables like Animals, Users, and Adoptions

# DATAINSERTS

Data is primarily inserted through Sequelize, based on JSON files that populate the initial state of the database. These JSON files are located in /public/json.

# DATABASEACCESS

A database user named dabcaowner is created with database owner permissions. The password for this user is dabca1234.
CREATE USER 'dabcaowner'@'localhost' IDENTIFIED BY 'dabca1234';
GRANT ALL PRIVILEGES ON adoptiondb.* TO 'dabcaowner'@'localhost';


# DATABASEQUERIES

Queries are executed through Sequelize's ORM except for initial data inserts. Special query buttons are implemented on the "Animals" page for filtering the table based on various criteria.

