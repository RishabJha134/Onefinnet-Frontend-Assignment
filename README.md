# Onefinnet Frontend Developer Assignment

# 🍽️ GO FOOD - Restaurant Landing Page

A modern, responsive restaurant landing page built with React.js, Vite, and Tailwind CSS. This project showcases a food ordering platform with category filtering and meal listings using the TheMealDB API.

## 🚀 Features

- **Modern UI Design**: Clean, responsive design inspired by food delivery platforms
- **Dynamic Category Filtering**: Filter meals by different categories (Seafood, Desserts, Breakfast, etc.)
- **Real-time API Integration**: Fetches data from TheMealDB API
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Performance Optimized**: Built with Vite for fast development and build times

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: React Icons
- **API**: TheMealDB API

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd onefinnet-restaurant-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Header
- Responsive navigation with mobile menu
- Shopping cart with notification badge
- Search functionality
- User profile access

### Hero Section
- Eye-catching banner with call-to-action
- Statistics display (Users, Products)
- Modern gradient background

### Category Filter
- Interactive category buttons
- Real-time meal filtering
- Smooth transitions

### Meal Cards
- Grid layout for meal display
- Meal images and descriptions
- Pricing information
- Shop Now functionality

## 🌐 API Integration

The app integrates with TheMealDB API:
- `GET /categories.php` - Fetch meal categories
- `GET /filter.php?c={category}` - Filter meals by category
- `GET /lookup.php?i={id}` - Get meal details

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Assignment Requirements

✅ **React JS / Next JS**: Built with React.js and Vite
✅ **Category Filtering**: Users can filter meals by category
✅ **Responsive Design**: Mobile-first responsive design
✅ **TheMealDB API**: Integrated with the free meal API
✅ **Design Match**: Closely matches the provided design sample

## 🚀 Deployment

To deploy this application:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains all the files ready for deployment

3. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## 🔗 Live Demo

[Live Demo URL] - Replace with your deployed application URL

## 📝 Assignment Context

This project was created as part of a Frontend Developer Internship assignment for Onefinnet. The task was to create a restaurant landing page with category filtering functionality using React.js/Next.js and TheMealDB API.

## 👨‍💻 Author

**Rishab** - Frontend Developer Intern Candidate

## 📄 License

This project is licensed under the MIT License.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
