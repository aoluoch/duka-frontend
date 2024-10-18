# Duka Application😄

Welcome to the `Duka` E-Commerce Application! This project is a full-stack web application built using React, enabling users to `browse products`, manage a `shopping cart`, and `handle authentication`.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features📓

- **User authentication** (login, registration)Protected routes for authenticated users
- **Product Management**: Display a wide range of products with details like images, descriptions, and prices.Product browsing with a carousel for featured images
- **Shopping Cart**: Users can add, update, and remove items in their cart, with real-time total price calculation.Shopping cart functionality with quantity management
- **Responsive Design**: A mobile-friendly interface using Tailwind CSS for an enhanced user experience.Responsive design for mobile and desktop
- **Notifications**: Real-time toast notifications for actions like adding to cart or successful login.Toast notifications for user feedback


## Technologies Used

- **Install**:
  - React **Vite*
  - React Router
  - Flowbite (for UI components)
  - React Toastify (for notifications)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory:

  - cd your-repo-name
3. Install dependencies:

  - npm install
Then:
  - npm run dev

## Usage

Once the application is running, navigate to http://localhost:3000 in your browser. You can explore the following features:

- **Home Page**: View featured products and promotions.
- **Products Page**: Browse all available products with detailed information.
- **Cart Page**: Manage your selected items before checkout.
- **Contact Page**: Reach out for support or inquiries.
- **Authentication**: Sign up or log in to manage your account.

## API Endpoints
### Product API Endpoints
GET /products: Retrieve a list of all products.
GET /products/
: Retrieve details of a specific product.
### Cart API Endpoints
- GET /cart: Retrieve the user's cart.
- POST /cart: Add an item to the cart.
- PATCH /cart/
: Update the quantity of a specific item in the cart.
- DELETE /cart/
: Remove an item from the cart.
### Authentication API Endpoints
- POST /auth/signup: Create a new user account.
- POST /auth/login: Log in an existing user and obtain a token.

## Dependencies
This project uses the following libraries:

- **React**: Frontend framework for building user interfaces.
- **React Router**: For handling routing and navigation.
- **React Toastify**: For displaying toast notifications.
- **Tailwind CSS**: For styling the components.
- **Axios**: For making HTTP requests to the API.

### Credits

This project was developed by Amos,Edwin,Sharon,Vincent,John. Special thanks to the following resources that aided in its development:

- React Documentation
- React Router Documentation
- React Toastify Documentation
- Tailwind CSS Documentation

### Contributing
Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:

```git checkout -b feature/YourFeature```
3.  Make your changes and commit them:
```git commit -m "Add a new feature"```
4. Push to your branch:
```git push origin feature/YourFeature```
5. Create a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Acknowledgements
Thank you to all contributors and supporters of this project.
Additional thanks to community resources and tutorials that provided guidance throughout development.

### Author

[Sharon Kahira](https://github.com/Her-Code)
[Vincent Irungu](https://github.com/Phoenixvince)
[Edwin Ng'anga](https://github.com/Programer-Ed)
[Amos Oluoch](https://github.com/aulouch)
[John Muchiri](https://github.com/MUCHIRIJOHN1990)

# Plugin
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
