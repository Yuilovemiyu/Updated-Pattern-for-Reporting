# 📊 HC/PG SA Monthly Report System

A lightweight Firebase-based reporting web app with batch save and auto-recovery.

---

## 🚀 Features

### 📍 Daily Data Entry
- Input store performance data
- Auto-detect:
  - Working
  - Rest Day
  - Manual override available

Tracks:
- Total Apps
- Signed
- Rejected
- Cancelled
- Non Apps (auto-enabled for 0–1 total)

---

## 💾 Smart Save System

### ➕ Add Entry
- Stores entry locally (not yet saved to Firebase)
- Prevents duplicate store per day

### 💾 Save All (Today)
- Saves all entries in one batch to Firebase
- Fast and efficient
- Prevents duplicate records in database

---

## 🔄 Auto-Save Protection

- Entries are automatically saved in **localStorage**
- Works when:
  - Page is refreshed
  - Browser is closed
  - Internet disconnects

### 🔁 Auto Restore
- Unsaved entries are restored when the user returns

---

## 🗑️ Data Controls
- Delete saved entries
- Undo last deletion

---

## 📊 Monthly Reporting
- Auto-calculated totals per store
- Aggregates:
  - Total Apps
  - Signed
  - Rejected
  - Cancelled

---

## 📱 PWA Support
- Installable web app
- Fast loading via service worker
- Basic offline support (UI cached)

---

## 🛠 Tech Stack
- HTML / CSS / JavaScript
- Firebase Firestore
- Service Worker
- LocalStorage (offline-safe queue)

---

## ⚠️ Deployment Tips

If updates don’t reflect:
1. Hard refresh (Ctrl + Shift + R)
2. Clear browser cache
3. Unregister service worker (DevTools → Application tab)
4. Ensure `CACHE_NAME` is updated in `sw.js`

---

## 📌 Version

**v4 - Batch Save + Auto-Recovery System**
- Save All (Today)
- Local auto-save
- No edit mode
- Simplified workflow

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
