
# Summit Wear

**Summit Wear** is an e-commerce platform for outdoor clothing, built with Angular to provide a seamless and modern user experience. This project demonstrates fullstack web development best practices and utilizes cloud technologies for scalability and performance.

## Features

- **Product Catalog**: Explore a variety of outdoor clothing items with detailed descriptions and images.
- **Shopping Cart**: Add, remove, and manage items with live updates on quantities and pricing.
- **User Authentication**: Secure registration and login system to manage user accounts.
- **Order Management**: View and track past orders, and place new ones.
- **Responsive Design**: Fully responsive and optimized for both desktop and mobile devices.
- **Search and Filter**: Find items easily with various search options and filters based on preferences.

## Tech Stack

- **Frontend**: Angular with TypeScript
- **Backend**: .NET Core
- **Database**: SQL Server
- **Styling**: Tailwind CSS
- **Hosting**: Azure
- **API Integration**: RESTful APIs for communication between the frontend and backend

## Installation and Setup

### Prerequisites

Before you can run the project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (for frontend)
- [Angular CLI](https://angular.io/cli) (for managing the Angular app)
- [.NET Core SDK](https://dotnet.microsoft.com/download/dotnet) (for the backend)
- [SQL Server](https://www.microsoft.com/en-us/sql-server) (for database management)

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
The plan is to deploy on azure

## Contribution
Contributions are always welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or create a pull request.

Please ensure that you follow the project's coding standards and write clear commit messages when submitting changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

