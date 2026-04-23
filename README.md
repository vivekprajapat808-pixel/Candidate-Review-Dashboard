# 🚀 Candidate Review Dashboard

A modern **frontend hiring dashboard** designed to help recruiters efficiently review, evaluate, and prioritize candidates using structured scoring and smart comparison tools.

This project simulates a real-world internal recruitment system used to manage and shortlist large volumes of applicants.

---

## ✨ Features

### 📊 Candidate Management

* View candidates in a clean table layout
* Search candidates by name
* Filter by:

  * Assignment score range
  * Video score range
  * ATS score range
  * Review status
* Sort by:

  * Priority
  * Assignment score

---

### 📄 Candidate Detail Panel

* Drawer-based UI for quick inspection
* Displays:

  * ATS Score
  * Assignment Score
  * Video Score
  * GitHub Score
  * Communication Score

---

### 🧠 Assignment Evaluation Panel

* Evaluate candidates using sliders (1–5)
* Covers:

  * UI quality
  * Component structure
  * State handling
  * Edge-case handling
  * Responsiveness
  * Accessibility
* Automatically updates assignment score

---

### 🎥 Video Evaluation Panel

* Evaluate:

  * Clarity
  * Confidence
  * Architecture explanation
  * Tradeoff reasoning
  * Communication
* Optional timestamp notes support
* Live score updates

---

### ⚡ Priority Engine (Core Feature)

Priority Score is calculated as:

```
Priority Score =
30% Assignment +
25% Video +
20% ATS +
15% GitHub +
10% Communication
```

#### Priority Levels:

* 🟢 **P0** → Interview immediately
* 🟡 **P1** → Strong shortlist
* 🟠 **P2** → Review later
* 🔴 **P3** → Reject

> Priority updates **in real-time** when scores are modified.

---

### 📈 Dashboard Summary

* Total candidates
* Reviewed candidates
* Shortlisted candidates
* Pending candidates

---

### ⚖️ Candidate Comparison Mode

* Compare up to **3 candidates side-by-side**
* Smart logic:

  * Selecting a 4th candidate automatically removes the **lowest priority candidate**
* Helps in faster decision-making

---

### 🎨 UI/UX Highlights

* Clean and modern dashboard design
* Fully responsive layout
* Dark mode support 🌙
* Smooth animations using Framer Motion
* Reusable and scalable components

---

## 🛠️ Tech Stack

* **React (Vite)**
* **Zustand** (State Management)
* **Tailwind CSS**
* **Framer Motion**



## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vivekprajapat808-pixel/candidate-dashboard.git
cd candidate-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## ⚠️ Notes

* If port 5173 is busy, Vite will automatically switch to another port
* If you see PostCSS warnings, optionally add this in `package.json`:

```json
"type": "module"
```

---

## 🎯 Purpose

This project was built as a **frontend assignment** to demonstrate:

* Real-world product thinking
* UI/UX design skills
* State management with Zustand
* Dynamic data handling
* Clean and scalable architecture

---

## 👨‍💻 Author

**vivekprajapat808-pixel**

---
