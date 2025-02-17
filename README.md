# German Machines Image Display (Car vibe perfectRide)

This is a React.js project built with TypeScript, TailwindCSS, and Firebase for authentication and backend services. The application allows users to view images of three iconic German car brands—Volkswagen, Audi, and Mercedes-Benz. Users can authenticate via Firebase Auth, access detailed information, and download the images.

## Features
- Display high-quality images of Volkswagen, Audi, and Mercedes-Benz
- User authentication with Firebase Authentication (Email/Password, Google Sign-In, etc.)
- Secure storage and retrieval of images using Firebase Storage
- Responsive UI powered by TailwindCSS
- Users can download images directly

## Tech Stack
- **Frontend:** React.js, TypeScript, TailwindCSS
- **Backend:** Firebase (Authentication & Storage)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Git](https://git-scm.com/)
- Firebase account and project setup

### Clone the Repository
```bash
git clone https://github.com/Maina-git/CarVibe-Perfect-Ride.git
cd your-repo-name
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Setup Firebase
1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Authentication (Email/Password, Google Sign-In, etc.).
3. Set up Firebase Storage and upload car images.
4. Get Firebase configuration settings and create a `.env` file in the root directory:


### Run the Project
```bash
npm start
# or
yarn start
```
The application should now be running at `http://localhost:3000/`.

## Usage
- Sign up or log in using Firebase Authentication.
- Browse through the images of Volkswagen, Audi, and Mercedes-Benz.
- Click on an image to view details.
- Download images with a single click.

## Deployment
To deploy the project using Firebase Hosting:
```bash
npm run build
firebase deploy
```
Ensure you have Firebase CLI installed and linked to your project.

## Contributing
Feel free to fork the repository and submit pull requests!

## License
This project is licensed under the MIT License.

