# 📊 HC/PG SA Monthly Report System

A lightweight Firebase-based reporting system for store performance tracking.

---

## 🚀 Features

### 📍 Daily Reporting
- Store-based data entry
- Auto status detection:
  - Working
  - Rest Day
  - Manual override
- Tracks:
  - Total Applications
  - Signed
  - Rejected
  - Cancelled
  - Non Apps (auto-enabled for low totals)

---

### 💾 Simple Save System
- Direct save to Firebase Firestore
- Prevents duplicate entries per store per date
- No queue or batch system (simplified workflow)

---

### 🗑️ Data Management
- Delete entries instantly
- Undo last deletion supported

---

### 📊 Monthly Summary
- Automatic aggregation per store
- Monthly totals include:
  - Total Apps
  - Signed
  - Rejected
  - Cancelled

---

## 🔥 Tech Stack
- HTML + JavaScript
- Firebase Firestore
- Service Worker (PWA caching)

---

## 📱 PWA Support
- Offline-friendly caching (basic)
- Fast load after first visit
- Auto updates when service worker version changes

---

## ⚠️ Deployment Notes

If changes don’t appear:
- Hard refresh browser (Ctrl + Shift + R)
- Clear cache / unregister service worker
- Ensure `sw.js` cache version is updated (v3)

---

## 📌 Version
v3 - Simplified System (No Edit, No Queue, Delete Only)

---

## 📊 Monthly Totals Logic

Monthly table shows:

- Total Apps per store per month
- Signed
- Rejected
- Cancelled

Grouped by:
Month + Store
---

## 🔥 Setup

1. Create Firebase project
2. Enable Firestore Database
3. Use test rules (for development only):

allow read, write: if true;
---

## 📁 Files

- index.html
- sw.js
- manifest.json

---

## 📲 Install App

- Open in Chrome
- Click "Install App"
- Works like mobile app

---

## ⚠️ Notes

- Requires internet (Firebase backend)
- Service Worker caches UI only
- Works best on Chrome / Edge

---

## 🛠 Future upgrades

- Login per user
- Store ranking dashboard
- Charts & analytics
- Export to Excel / PDF
