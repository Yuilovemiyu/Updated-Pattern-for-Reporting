# 📊 HC/PG SA Monthly Report System

A real-time Firebase web app for tracking daily store reports with monthly summaries.

---

## 🚀 Features

- 📅 Real-time auto date (always today)
- ☁️ Firebase Firestore live sync
- ➕ Daily store reporting
- 🔘 Smart Non Apps system
  - Only active when Total Apps = 0 or 1
  - Values: Yes / No only
- 📊 Monthly totals per store
- ↩️ Undo delete function
- 📱 Installable as PWA (mobile app style)

---

## 🧠 Non Apps Rule

- Enabled ONLY if Total Apps = 0 or 1
- Disabled otherwise
- Stored in Firebase per entry

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
