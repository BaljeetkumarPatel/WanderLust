
# 🌍 WanderLust


A Full-Stack Adventure Booking Platform

"Your gateway to exploring the world — one booking at a time."
WanderLust is a modern, scalable vacation rental web app inspired by Airbnb. It enables users to browse unique stays, upload property listings with images, and manage their bookings — all in one seamless platform.

It allows users to:

Browse and upload accommodations.

View property listings with images.

Securely sign up/login.

Manage listings and handle bookings (if implemented).

Navigate seamlessly thanks to intuitive user interface and architecture.



## 🚀 Tech Stack & Purpose


| Technology                 | Purpose                                                                |
| -------------------------- | ---------------------------------------------------------------------- |
| **Node.js**                | JavaScript runtime to run server-side code.                            |
| **Express.js**             | Fast and minimal web framework for routing & backend APIs.             |
| **EJS**                    | Server-side templating for dynamic page rendering.                     |
| **MongoDB**                | NoSQL database to store users, properties, bookings, and session data. |
| **Mongoose**               | ODM to manage MongoDB schemas and queries.                             |
| **Cloudinary**             | Cloud storage for hosting and serving images efficiently.              |
| **Multer**                 | Middleware for handling image uploads from forms.                      |
| **Dotenv**                 | Manage environment variables securely.                                 |
| **Method-Override**        | Allows use of PUT & DELETE in HTML forms.                              |
| **Express-Session**        | Manages user sessions for authentication.                              |
| **Connect-Flash**          | Provides flash messages for UI feedback.                               |
| **Bootstrap / Custom CSS** | Makes the frontend responsive and visually appealing.                  |

## ✨ Features

🔐 User Authentication – Secure signup/login system.

🏠 Property Listings – Add, edit, and delete rental properties.

🖼 Image Uploads – Upload multiple property images via Multer & Cloudinary.

🔍 Browse & Search – Explore listings with filters (location, price, type).

📍 Location Mapping – (Optional) Integrate maps for better navigation.

💬 Flash Messages – Instant UI feedback for actions.

📱 Responsive Design – Mobile-friendly layout.


## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/BaljeetkumarPatel/WanderLust.git
cd WanderLust

```
2️⃣ Install dependencies
```bash
npm install

```

3️⃣ Configure Environment Variables

Create a .env file in the root folder and add:

```bash
MONGO_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
SESSION_SECRET=your_secret
PORT=3000

```

4️⃣ Run the application
```bash
npm start

```

5️⃣ Open in browser
```bash
http://localhost:3000

```


## 🔗 How Everything Works Together

Frontend (EJS + Bootstrap) → Renders server-side dynamic pages with a clean UI.

Backend (Node.js + Express.js) → Handles routing, authentication, and business logic.

Database (MongoDB + Mongoose) → Stores all persistent data in structured schemas.

File Handling (Multer + Cloudinary) → Manages secure image uploads and hosting.

Security (Sessions + Dotenv) → Protects user sessions & sensitive credentials.

UX Enhancements (Connect-Flash) → Delivers instant success/error messages.
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## 📌 Future Enhancements
## Contributing

Contributions are always welcome!

1.Fork the repository

2.Create your feature branch

```bash
git checkout -b feature/YourFeature

```

3.Commit your changes
```bash
git commit -m "Add YourFeature"

```

4.Push to the branch
```bash
git push origin feature/YourFeature

```

5.Open a Pull Request

## Authors


Baljeet Kumar Patel
- [🔗GitHub](https://github.com/BaljeetkumarPatel)


## Support

For support,

email baljeetpatel022@gmail.com.

