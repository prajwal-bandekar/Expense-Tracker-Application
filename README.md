![Entity Relationship Diagram (1)](https://github.com/prajwal-bandekar/Expense-Tracker-Application/assets/140521722/9ab5f5a7-2f48-47d1-ab27-b088dfb0ac64)

# Expense Tracker Application

This Expense Tracker application is a full-stack web application built using Java (Spring Boot) for the backend and React.js for the frontend. It allows users to manage and track their expenses efficiently. It is a part of the assignment as asked by Leap Finance.





### Teachnolgies used
#### Backend
 - Java
 - SpringBoot
   - Spring Data JPA
   - SpringBoot Dev Tools
   - MySQL Driver
   - Spring Web Services
   - Lombok
#### Frontend
 - React Js
 - JavaScript
 - HTML
 - CSS
 - npm (Node Package Manager)
#### Version Control
 - Git


## Prerequisites
Before running the application, ensure you have the following installed on your system:

Java Development Kit (JDK)
Node.js and npm
MySQL Database

## Clone the Repository

```bash
 git clone https://github.com/prajwal-bandekar/Expense-Tracker-Application
```
## Configure Backend
Navigate to the 'Expense-Tracker-Application' folder

- Update the application.properties file with your MySQL database configuration.

```bash
-> springboot/src/main/resources/application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name?createDatabaseIfNotExist=true
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Configure Frontend
Navigate to the 'etracker' folder

```bash
cd etracker
```
Install Dependencies
```bash
npm install
```
While the server on the backend is running, start the React.js application
```bash
npm start
```
The frontend will be accessible at http://localhost:3000.

## Usage
Visit http://localhost:3000 in your web browser to access the Expense Tracker application. You can register, log in, and start managing your expenses.


Now you have successfully set up and run the Expense Tracker application on your local machine!



