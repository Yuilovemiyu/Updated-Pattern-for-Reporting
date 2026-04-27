# 📊 HC/PG SA Monthly Report System

A Firebase-powered web app for daily store reporting with batch saving, auto-recovery, and real-time monthly totals.

---

## 🚀 Core Features

### 📍 Daily Data Entry
- Input store performance per day
- Auto-detect:
  - Working
  - Rest Day
- Manual override available

Tracks:
- Total Apps
- Signed
- Rejected
- Cancelled
- Non Apps (enabled only if total = 0 or 1)

---

## 📦 Preview System (Before Saving)
- Displays all entries for the day before submission
- Remove incorrect entries easily
- Prevents duplicate store entries per day

---

## 💾 Save System

### ➕ Add Entry
- Saves data locally (not yet in Firebase)
- Allows batch encoding

### 💾 Save All (Today)
- Saves all entries in one batch to Firebase
- Prevents duplicates in database
- Clears data after successful save

---

## 🔄 Auto-Save & Recovery
- Uses **localStorage**
- Protects data when:
  - Page is refreshed
  - Browser is closed
  - Internet is lost

### 🔁 Auto Restore
- Unsaved entries are restored automatically on reload

---

## 🧹 Smart Reset After Save
After saving:
- Clears preview entries
- Clears local storage
- Resets input fields
- Ready for next day encoding

---

## 🗑️ Data Management
- Delete saved records
- Undo last delete action

---

## 📊 Monthly Totals (Per Store)

- Auto-updates in real-time
- Groups data by:
  - Month
  - Store

### ✔ Includes:
- Total Apps
- Signed
- Rejected
- Cancelled

### ❌ Excludes:
- Rest Day
- Absent entries

### ✔ Features:
- Clean accumulation per month
- Sorted output (Month → Store)
- Updates automatically after each save

---

## 📱 Progressive Web App (PWA)

- Installable on mobile/desktop
- Works like a native app
- Cached shell for fast loading
- Network-first strategy for fresh data

---

## 🛠 Tech Stack

- HTML / CSS / JavaScript
- Firebase Firestore
- Service Worker
- LocalStorage

---

## ⚠️ Deployment Tips

If updates are not visible:

1. Hard refresh:
   - `Ctrl + Shift + R`
2. Clear browser cache
3. Unregister Service Worker:
   - DevTools → Application → Service Workers
4. Update `CACHE_NAME` in `sw.js`

---

## 📌 Version

**v5 – Preview + Batch Save + Auto-Recovery + Clean Monthly Totals**

Includes:
- Preview table before saving
- Local auto-save protection
- Batch Firebase saving
- Monthly totals filtering (working days only)
- Full reset after save
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
