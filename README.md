# 📊 HC/PG SA Monthly Report System

A web-based reporting system for store performance tracking using Firebase Firestore + PWA support.

---

## 🚀 Features

### 📍 Data Entry System
- Daily store report input
- Auto status detection (Working / Rest Day / Override)
- Tracks:
  - Total Apps
  - Signed
  - Rejected
  - Cancelled
  - Non Apps (conditional enable)

---

### 📦 NEW: Batch Save System (Queue Mode)

Instead of saving one-by-one, users can now:

- ➕ Add multiple entries to a queue
- 📋 Preview all pending entries
- 💾 Save everything at once using **Save All**
- 🔄 Prevents accidental duplicate writes
- ⚡ Faster bulk encoding for monthly reporting

---

### 📊 Reporting Features
- Live Firestore sync
- Auto-updating report table
- Monthly totals per store
- Automatic aggregation per month

---

### ↩️ Undo System
- Restore deleted entries instantly

---

## 🔥 Tech Stack
- HTML + JavaScript
- Firebase Firestore
- Service Worker (PWA support)

---

## 📱 PWA Support
This app supports offline caching using a service worker:
- Loads instantly after first visit
- Works with cached UI
- Auto-updates when new version is deployed

---

## 🛠 Deployment Notes

If updates don’t reflect:
- Hard refresh browser (Ctrl + Shift + R)
- Clear cache / unregister service worker
- Ensure `sw.js` cache version is updated

---

## 📌 Version
v2 - Batch Save System Added

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
