
# React Contacts App

This project is a simple contacts management application built with React, Redux Toolkit, and Vite. It allows users to add, search, and delete contacts. The app demonstrates basic state management using Redux and modern React features.

## Features

- Add new contacts with name and phone number
- Search contacts by name
- Delete contacts
- State management with Redux Toolkit
- Modular component structure

## Technologies Used

- React
- Redux Toolkit
- Vite
- CSS Modules

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
	```bash
	git clone https://github.com/ozncncyr/goit-react-hw-06.git
	```
2. Navigate to the project directory:
	```bash
	cd goit-react-hw-06
	```
3. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Optional: Mock API

If you want to use a mock API for contacts, you can run:

```bash
json-server --watch db.json --port 3000
```

## Project Structure

- `src/` - Main source code
  - `components/` - UI components (ContactList, Form, SearchBox)
  - `redux/` - Redux store and slices
  - `App.jsx` - Main app component

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

This project is for educational purposes.
