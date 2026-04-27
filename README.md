# 📊 HC/PG SA Monthly Report System

A real-time Firebase web app for tracking store daily reports, including monthly summaries.

---

## 🚀 Features

- 📅 Daily store reporting
- ☁️ Firebase Firestore real-time sync
- 🔁 Undo delete function
- 📊 Monthly totals per store
- 🔘 Non Apps validation system
- 📱 PWA installable (works like an app)
- 💾 Offline caching (basic via Service Worker)

---

## 🧠 Non Apps Rule

- Enabled only when Total Apps = 0 or 1
- Values allowed: Yes / No only
- Auto-disabled otherwise

---

## 📊 Monthly Totals Logic

Monthly table shows:

- Total Apps per store per month
- Signed
- Rejected
- Cancelled

---

## 🔥 Setup Instructions

### 1. Firebase Setup
- Create Firebase project
- Enable Firestore Database
- Set rules (for testing only):
