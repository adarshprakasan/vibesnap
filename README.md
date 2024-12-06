# VibeSnap

VibeSnap is a feature-rich social media application built with React.js, Firebase, and Tailwind CSS. It offers user authentication, infinite scrolling, and a responsive design for seamless and interactive user experiences.

---

## 🚀 Features

### 🔑 User Authentication
- Register and log in with email and password.
- Google login integration.
- Persistent user sessions.

### 📰 Social Media Feed
- Create posts with text, images, and videos.
- Support for multi-image uploads in a single post.
- Smooth infinite scrolling for posts.

### 📱 User Profiles
- View and edit profile details: bio, name, and profile picture.
- "My Posts" section displaying user-created posts.

### 🎥 Video Interaction
- Videos auto-play when in view and pause when out of view.

### 🌟 Shareable Content
- Share posts and content with other applications.

### 💡 Responsive Design
- Optimized for mobile, tablet, and desktop devices.

---

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Firebase (Authentication, Firestore)
- **State Management**: React Context API
- **Styling**: Tailwind CSS

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A [Firebase](https://firebase.google.com/) project set up.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vibesnap.git
2. Navigate to the project directory:
   ```bash
   cd vibesnap
3. Install dependencies:
   ```bash
   npm i
4. Set up your Firebase configuration in a .env file:
   ```bash
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
5. Start the development server
   ```bash
   npm run dev

---

## 🚀 Deployment

### Hosting on Firebase
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
2. Login to Firebase:
   ```bash
   firebase login
3. Initialize Firebase Hosting:
   ```bash
   firebase init
4. Build and deploy the project:
   ```bash
   npm run build
   firebase deploy

---

## 🤝 Contribution

- Feel free to fork this repository and contribute by submitting a pull request. For major changes, open an issue first to discuss what you'd like to change.
