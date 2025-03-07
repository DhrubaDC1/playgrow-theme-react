# PlayGrow Theme React
![image](https://github.com/user-attachments/assets/f617c268-3170-404b-84dc-209b36e01d3c)
A modern e-commerce application inspired by the **PlayGrow** WordPress theme, rebuilt using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite as the build tool. This project replicates PlayGrow’s playful, baby-and-kids-focused design, offering a fast, scalable, and feature-rich solution for online stores selling children's products.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS and a pastel aesthetic inspired by PlayGrow.
- **E-commerce Functionality**: Product listings, cart management, and modals powered by `react-modal`.
- **Smooth Animations**: Enhanced with `framer-motion` and `react-locomotive-scroll` for a dynamic experience.
- **Loading States**: Integrated `react-loader-spinner` for seamless UX during data fetching.
- **Carousel Support**: Product sliders built with `react-slick` and `slick-carousel`.
- **API Integration**: Backend powered by Express.js with MongoDB for data storage and retrieval via `axios`.
- **SEO Optimized**: Structured for better visibility and performance.

## Tech Stack
- **Frontend**: React.js (`^19.0.0`), Vite (`^6.1.0`), Tailwind CSS (`^4.0.6`), `framer-motion`, `react-locomotive-scroll`, `react-slick`
- **Backend**: Node.js, Express.js (`^4.21.2`)
- **Database**: MongoDB (`^6.13.0`) with Mongoose
- **HTTP Client**: Axios (`^1.7.9`)
- **Icons**: `lucide-react` (`^0.475.0`), `react-icons` (`^5.4.0`)
- **Environment**: `dotenv` (`^16.4.7`)
- **Linting**: ESLint (`^9.19.0`) with React plugins
- **Build Tool**: Vite with `@vitejs/plugin-react` (`^4.3.4`)

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/) (v8.x or later) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- Git

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/DhrubaDC1/playgrow-theme-react.git
   cd playgrow-theme-react
   ```
2. **Install Dependencies**:
- For the frontend (root directory):
  ```bash
  npm install
  ```
3. **Set Up Environment Variables**:
- Create a .env file in the root directory
  ```bash
  MONGO_URI=your_mongodb_connection_string
  ```
