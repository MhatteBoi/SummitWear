
<img src="https://res.cloudinary.com/dm3vmtten/image/upload/v1737033442/SummitWearNoBg_qa98lx.png"></img> <br />
**Summit Wear** is an e-commerce platform for outdoor clothing, built with Angular to provide a seamless and modern user experience. This project demonstrates fullstack web development best practices.

# Summit Wear

Summit Wear is an e-commerce platform built for outdoor clothing with an emphasis on simplicity, functionality, and an intuitive user experience. The website allows users to browse, manage their shopping cart, authenticate, and manage their orders seamlessly. It is designed with a modern, responsive interface that adapts to both desktop and mobile users.

---

## Features

- **Product management and shoppingcart logic**:  
  Explore a variety of outdoor clothing items, each with detailed descriptions, prices, and images.
  Add, remove, and manage items with live updates on quantities, prices, and the total.

- **Weather Recommendation**:<br />
  Get Recommendation on what kind of wear you need based on weather.

- **User Authentication**:  
  Secure registration and login system allowing users to manage their profiles and shopping experience.
  JWT Token.

- **Admin dahsboard**:  
  View past orders and track the status of current orders for a smooth shopping experience.
  Keep track of store progress and real time data on how the store is progressing.

- **Responsive Design**:  
  Fully responsive and optimized for both desktop and mobile devices, ensuring a great experience for all users.

- **Search and Filter**:  
  Find items quickly using various search options and filters based on size, category, price, and more.

---



## Tech Stack

### Frontend
- Built with **Angular 18** and **TypeScript** for a fast, scalable frontend experience.
  - Dynamic components using lazy loading for optimized page load times and authentication guards to keep unauthorized users at bay.
  - **Tailwind CSS** for styling, providing a modern and clean design.

### Backend
- Powered by **ASP.NET **, ensuring fast and secure API integration between the frontend and database.
  - RESTful API architecture.
  - User authentication and authorization with JWT and ASP Identity.

### Database
- **SQL Server** used to store user and order data securely.
  - Full CRUD operations for managing products, users, and orders.
  - Entityframework

### API Integration
- RESTful APIs for communication between the frontend and backend, with endpoints for user authentication, product management, and order processing.

  <br />
**Admin Dashboard**
  Get information, data and analytics straight from the admin page. <br />
  <br />
  <img src="https://res.cloudinary.com/dm3vmtten/image/upload/v1741609106/DashBoard_rghkif.jpg"></img>
<hr />

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/summit-wear.git
Navigate to the project directory:

bash
Copy
Edit
cd summit-wear
Install frontend dependencies: Inside the frontend folder, run:

bash
Copy
Edit
npm install
Set up the backend:

Update the database connection string in appsettings.json.
Run database migrations to set up the database schema:
bash
Copy
Edit
dotnet ef database update
Start the backend server:
bash
Copy
Edit
dotnet run
Start the frontend: Inside the frontend folder, run:

bash
Copy
Edit
ng serve
Visit http://localhost:4200 in your browser to view the application.

### Deployment
The plan is to deploy on azure or locally

## Contribution
Contributions are always welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or create a pull request.

Please ensure that you follow the project's coding standards and write clear commit messages when submitting changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

