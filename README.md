# 📊 HC/PG SA Dashboard (Shared Firebase System)

A real-time reporting system for store performance tracking.

---

## 🚀 Features

- 🌐 Shared live database (Firebase Firestore)
- 📊 Daily + Monthly reports
- 🏪 Store performance totals
- ➕ Add / undo entries
- 📱 Installable as mobile app (PWA)
- ⚡ Real-time updates for all users

---

## 🔥 Tech Stack

- HTML / CSS / JavaScript
- Firebase Firestore (backend)
- Service Worker (offline support)
- PWA manifest

---

## 📦 How It Works

### 1. Daily Entries
Users input:
- Date
- Store
- Total, Signed, Rejected, Cancelled

---

### 2. Shared Database
All entries are stored in:

Firestore → reports

---

### 3. Monthly Totals
Automatically stored in:

Firestore → monthly_totals

✔ Data is APPEND-ONLY  
✔ Never decreases  
✔ Safe for auditing  

---

## 📲 Install as App

On mobile:
1. Open site in Chrome
2. Tap "Add to Home Screen"
3. Install

---

## ⚙️ Setup

1. Create Firebase project
2. Enable Firestore
3. Paste config in `index.html`
4. Set rules:
allow read, write: if true;
---

## 🧠 Important Notes

- Monthly totals are permanent (append-only)
- Deleting entries does NOT affect monthly totals
- Designed for multi-user shared reporting

---

## 🚀 Future Upgrades

- Admin login system
- Charts & analytics
- Export to Excel
- Store ranking system
