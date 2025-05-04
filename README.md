# ArtCollab_App
## Introduction
ArtCollab is a web platform where artists from different fields—like painting, music, writing, and digital art—can connect, share their work, and collaborate on creative projects. The goal is to make it easy for artists to find each other, work together in real-time, and give feedback on each other's art.

## Project Type
Frontend

## Deplolyed App
Frontend: https://artcolla.netlify.app/index.html

## Directory Structure
ARTCOLLAB_APP/
├─ Script/
├─ Style/
│---index.html

## Video Walkthrough of the project
https://drive.google.com/file/d/1_8t3renalFDjyz3XAI8TkiGMpIQJTboH/view?usp=drive_link

## Video Walkthrough of the codebase
https://drive.google.com/file/d/1_8t3renalFDjyz3XAI8TkiGMpIQJTboH/view?usp=drive_link

## Features
- User Authentication
    Users can sign up or log in using email/password or social accounts like Google.
- Profile Customization
    Artists can create profiles, add a bio, list their skills, and upload sample works.
- Artwork Categories & Filters
    Browse or filter projects by category like Painting, Music, Digital Art, and more.
- Dark & Light Mode Toggle
    Switch between dark and light themes for comfort and personalization.
- Responsive Design
    Works smoothly on all screen sizes—desktop, tablet, and mobile.

## design decisions or assumptions
Firebase as Backend
    Chose Firebase for its ease of integration, real-time capabilities, and built-in authentication and storage—ideal for a frontend-heavy project.
Responsive First Design
    Decided to build mobile-first and ensure the app works well on all devices using CSS media queries.
Dark/Light Mode Support
    Included a toggle for dark and light themes to improve user comfort during long sessions.
User Roles Are Equal
    Assumed all users are artists with equal permissions (no admin or moderator roles initially).

## Usage
1.Sign Up / Log In
    Create an account using email or Google to access the platform.
2.Set Up Your Profile
    Add your name, bio, skills (e.g., painter, musician), and upload your sample artwork.
3.Create or Join Projects
    Start a new collaborative project or request to join existing ones. Add a title, description.
4.Toggle Theme & Stay Organized
    Switch between dark and light mode, and use your dashboard to track activity and collaborations.

## Technology Stack
- HTML
    Used to structure the content of the web pages,  including forms, profile sections, project listings, and more.
- CSS
    Used to style the application and make it visually appealing, including support for dark/light mode and responsive design.
- Javascript
    Adds interactivity to the app—such as form validation, filtering, real-time updates, and dynamic UI behavior.
- firebase
    Used as the backend for authentication, database (Firestore), file storage (for images, audio, etc.), and real-time updates 
