

## 🚀 Quick Start

### Prerequisites
Make sure you have **Node.js** installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/qvstry/Lab_1_VC_Violetta_Motivational_Quotes.git
cd violetta-motivation-app
```

**2. Install dependencies:**
```bash
npm install
```

**3. Start the development server:**
```bash
npm start
```

**4. Open your browser:**
The app will automatically open at [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
> **Note:** this is a one-way operation. Once you `eject`, you can't go back!

---

## 🎨 Customization

You can easily customize the app by modifying these elements in `src/App.js`:

### Adding New Quotes
```javascript
const motivationalQuotes = [
  "Your new personalized quote here!",
  // Add more quotes...
];
```

### Changing Background Colors
```javascript
const backgrounds = [
  'linear-gradient(135deg, #your-color1 0%, #your-color2 100%)',
  // Add more gradients...
];
```

### Adjusting Auto-Rotation Time
```javascript
// Change the interval time (currently 10000ms = 10 seconds)
const interval = setInterval(() => {
  generateNewQuote();
}, 15000); // Changes to 15 seconds
```

---

## 🏗️ Project Structure

```
violetta-motivation-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # React entry point
│   └── index.css       # Global styles with Tailwind
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md          # This file
```

---

## 🎯 Technologies Used

- **React 18.2.0** - Modern UI library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Customizable icons
- **CSS Gradients** - Background color effects
- **React Hooks** - useState and useEffect for state management

---

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` and follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"homepage": "https://github.com/qvstry/Lab_1_VC_Violetta_Motivational_Quotes.git",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
3. Run: `npm run deploy`

---

## 🐛 Troubleshooting

### Common Issues

#### PowerShell execution policy error:
- Use **Command Prompt** instead of PowerShell, or
- Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Node modules not found:
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Port 3000 already in use:
- The app will automatically suggest using a different port
- Or manually specify: `npm start -- --port 3001`

