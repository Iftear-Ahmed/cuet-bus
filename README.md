# 🚌 CUET Bus Ticket — Seat Booking & Management System

A full-stack web application for managing bus seat reservations at Chittagong University of Engineering & Technology (CUET). Students can book seats, supervisors can manage attendance, and admins have full control over the system.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🌐 Live Demo

| Service  | URL |
|----------|-----|
| Frontend | [https://client-green-eta.vercel.app](https://client-green-eta.vercel.app) |
| Backend API | [https://server-coral-sigma.vercel.app](https://server-coral-sigma.vercel.app) |

---

## 🔑 Demo Login Credentials

Use the following credentials to explore all roles:

### 👨‍💼 Admin
| Field | Value |
|-------|-------|
| Email | `admin@cuet.ac.bd` |
| Password | `admin123` |

### 👨‍🏫 Supervisors
| Name | Email | Password |
|------|-------|----------|
| Dr. Rahman | `rahman@cuet.ac.bd` | `super123` |
| Prof. Kabir | `kabir@cuet.ac.bd` | `super123` |
| Dr. Hossain | `hossain@cuet.ac.bd` | `super123` |
| Prof. Alam | `alam@cuet.ac.bd` | `super123` |
| Dr. Chowdhury | `chowdhury@cuet.ac.bd` | `super123` |
| Prof. Uddin | `uddin@cuet.ac.bd` | `super123` |

### 🎓 Students
| Name | Email | Password | Student ID |
|------|-------|----------|------------|
| Student 2 | `student2@student.cuet.ac.bd` | `student123` | 2004002 |
| Student 3 | `student3@student.cuet.ac.bd` | `student123` | 2004003 |
| ... | `student{N}@student.cuet.ac.bd` | `student123` | 2004{N} |
| Student 500 | `student500@student.cuet.ac.bd` | `student123` | 2004500 |

> **Note:** All 500 students share the same password: `student123`

---

## ✨ Features

### For Students
- 🎫 Book bus seats for upcoming shifts
- 🪑 Interactive seat selection grid
- 📍 View bus routes and stops
- 👤 Profile with booking history
- 🏆 Points-based booking system (2 points added daily)

### For Supervisors
- ✅ Mark student attendance
- 📋 View passenger list per shift
- 🚌 Monitor assigned buses

### For Admins
- 🚌 Full bus management (CRUD)
- 👥 User management
- 📊 Dashboard with system statistics
- 🔄 Daily cron job for point allocation

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS 4 |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Authentication | Firebase Auth (Google Sign-In) + JWT |
| Deployment | Vercel (Frontend + Backend) |
| HTTP Client | Axios |
| UI | React Icons, React Hot Toast |

---

## 📁 Project Structure

```
CUET Bus Ticket/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── assets/         # Images and static files
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Navbar, Sidebar, DashboardLayout
│   │   │   └── ui/         # Modal, SeatGrid, LoadingSpinner, StatsCard
│   │   ├── context/        # AuthContext (global auth state)
│   │   ├── pages/          # All page components
│   │   ├── utils/          # API client, date helpers, email validation
│   │   ├── firebase.js     # Firebase configuration
│   │   ├── App.jsx         # Root component with routing
│   │   └── main.jsx        # Entry point
│   ├── .env                # Environment variables
│   ├── vite.config.js      # Vite configuration
│   └── vercel.json         # Vercel SPA rewrites
│
├── server/                 # Node.js Backend
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── middleware/
│   │   ├── auth.js         # JWT authentication middleware
│   │   └── roleCheck.js    # Role-based access control
│   ├── models/
│   │   ├── User.js         # User model (student/supervisor/admin)
│   │   ├── Bus.js          # Bus model with routes
│   │   └── Booking.js      # Booking model
│   ├── routes/
│   │   ├── auth.js         # Login/Register endpoints
│   │   ├── buses.js        # Bus CRUD & seat availability
│   │   ├── bookings.js     # Booking management
│   │   ├── supervisor.js   # Supervisor-specific routes
│   │   ├── admin.js        # Admin-specific routes
│   │   └── shifts.js       # Shift configuration
│   ├── utils/
│   │   ├── emailDomain.js  # Email domain validation
│   │   └── shifts.js       # Shift timing helpers
│   ├── seed.js             # Database seeder
│   ├── server.js           # Express app entry point
│   ├── .env                # Environment variables
│   └── vercel.json         # Vercel serverless config + cron
│
└── package.json            # Root package with dev scripts
```

---

## 🚀 Installation & Local Setup

### Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **MongoDB Atlas** account ([Sign up](https://www.mongodb.com/atlas))
- **Firebase** project ([Console](https://console.firebase.google.com/))
- **Git** installed

### Step 1: Clone the Repository

```bash
git clone https://github.com/Iftear-Ahmed/cuet-bus.git
cd cuet-bus
```

### Step 2: Install All Dependencies

```bash
npm run install-all
```

This installs dependencies for the root, server, and client in one command.

### Step 3: Configure Environment Variables

#### Server (`server/.env`)

Create a `.env` file inside the `server/` folder:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/cuet-bus?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
PORT=5001
```

> **Note:** Replace the MongoDB URI with your own Atlas connection string. Make sure to whitelist `0.0.0.0/0` in MongoDB Atlas → Network Access for Vercel deployment.

#### Client (`client/.env`)

Create a `.env` file inside the `client/` folder:

```env
VITE_FIREBASE_API_KEY="your_firebase_api_key"
VITE_API_URL="http://localhost:5001/api"
```

> **Note:** For local development, set `VITE_API_URL` to `http://localhost:5001/api`. For production, set it to your deployed backend URL.

### Step 4: Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → **Google Sign-In** provider
4. Add your domain to **Authorized Domains** (e.g., `localhost`, `your-app.vercel.app`)
5. Copy the Firebase config values into `client/src/firebase.js`

### Step 5: Seed the Database (Optional)

Populate the database with demo data (500 students, 6 supervisors, 1 admin, 14 buses, and sample bookings):

```bash
npm run seed
```

### Step 6: Run the Application

Start both the server and client simultaneously:

```bash
npm run dev
```

Or run them separately:

```bash
# Terminal 1 — Backend (port 5001)
npm run server

# Terminal 2 — Frontend (port 5173)
npm run client
```

The app will be available at:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5001

---

## 🚌 Bus Fleet

The system includes 14 buses serving different routes:

| Bus Name | Type | Route |
|----------|------|-------|
| Halda | Flyover | CUET → Bahaddarhat Flyover → Lalkhan Bazar → New Market |
| Shangu | Flyover | CUET → Bahaddarhat Flyover → Lalkhan Bazar → New Market |
| Turag | Regular | CUET → Quaish → Oxygen → 2 No Gate → New Market → Agrabad |
| Jamuna | Regular | CUET → Bahaddarhat → Chawkbazar → New Market |
| Buriganga | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| Gomti | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| Rupsha | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| Isamoti | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| Shurma | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| Matamuhuri | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| Tista | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| Padma | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| BRTC-1 | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |
| BRTC-2 | Regular | CUET → Bahaddarhat → GEC → Lalkhan Bazar → New Market |

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login with email/password |
| POST | `/api/auth/google` | Google Sign-In |
| GET | `/api/auth/me` | Get current user profile |

### Buses
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/buses` | Get all buses |
| GET | `/api/buses/:id` | Get bus details |
| GET | `/api/buses/:id/seats` | Get seat availability |

### Bookings
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings/my` | Get user's bookings |
| DELETE | `/api/bookings/:id` | Cancel a booking |

### Supervisor
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/supervisor/buses` | Get assigned buses |
| PUT | `/api/supervisor/attendance` | Mark attendance |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/stats` | Dashboard statistics |
| POST | `/api/admin/buses` | Create a bus |
| PUT | `/api/admin/buses/:id` | Update a bus |
| DELETE | `/api/admin/buses/:id` | Delete a bus |

---

## 🚀 Deployment (Vercel)

### Backend Deployment

```bash
cd server
vercel --prod
```

Set the following environment variables in the Vercel dashboard:
- `MONGO_URI` — Your MongoDB Atlas connection string
- `JWT_SECRET` — Your JWT secret key

### Frontend Deployment

```bash
cd client
vercel --prod
```

Set the following environment variables in the Vercel dashboard:
- `VITE_FIREBASE_API_KEY` — Your Firebase API key
- `VITE_API_URL` — Your deployed backend URL (e.g., `https://your-server.vercel.app/api`)

---

## 📄 License

This project is for educational purposes at CUET.

---

## 👥 Contributors

- **Iftear Ahmed Tahsin**

---

Made with ❤️ for CUET
