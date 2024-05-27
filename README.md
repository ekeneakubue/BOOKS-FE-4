# BookWorm Application

## Description
BookWorm is an E-book web application that is a central hub for students to access free ebooks. It offers features like account creation, exploring books, reading, and saving books to a bookshelf. This application is built using React and Vite, ensuring a fast and modern user experience.


### Features

- Form Validation for User Input for Signup, Login, and Reset Password
- Book Reading
- Bookshelf Management
- Note-taking and Saving Features
- Responsive design to fit desktop and mobile screens

### Technologies Used

- React
- Vite
- React Router
- React Icons
- CSS Modules
- Axios

### Installation

1. Clone Repository:
   ```
   git clone https://github.com/GenesysLearnable/BOOKS-FE-4.git

   ```
2. Install Dependencies:
   ```
   npm install
   
   ```
### Running the Project

1. Starting Development Server Using Vite:
   ```
   npm run dev

   ```
2. Navigate to the URL provided by Vite on your local host to view the application (eg., http://localhost:5173)

## Building the Project
To create a production build, run:

```
npm run build

```



## Components

### AboutUs.jsx
Component displaying information about the BookWorm web application.

### WhyBookWorm.jsx
Component displaying the features of BookWorm.

### SideNavBar.jsx
Component displaying the sidebar navigation menu.

### TopNavBar.jsx
Component displaying the topbar navigation menu.

### BookModal.jsx
Component for displaying the details of e-books in a modal.

### Category.jsx
Component for displaying book categories.

### Footer.jsx
Component displaying the footer of the web application.


## Pages

### Home.jsx
Home page or landing page for the application.

### Login.jsx
Login page for returning users.

### SignUp.jsx
Sign up page for account creation.

### Dashboard.jsx
Dashboard page for quick links and user personal information.

### ReadOut.jsx
Read Out page for reading selected books.

### Explore.jsx
Page for exploring and finding new books.

### BookShelf.jsx
Page for managing user bookshelf.

### MyNotes.jsx
Page for managing notes made by user.

### Upload.
Page for uploading files.

### Saved.jsx
Page for saved books.

### Shared.jsx
Page for saved books.

### Download.jsx
Page for downloaded books.

### ResetPassword.jsx
Page for resetting password.

### SearchResult.jsx
Page for search results for books.

### Settings.jsx
Page for setting user preferences.

## API Integration
The application uses Axios to communicate with the backend API for various operations such as user authentication and book management. The base URL for the API can be configured in the environment variables.

