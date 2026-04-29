# 📊 HC/PG SA Monthly Report System

A Firebase-powered reporting system for store performance tracking.

---

# 🚀 Features

- 🔐 Email Login / Signup (Firebase Auth)
- 🏪 Store selection per user
- 📅 Daily reporting system
- 📊 Monthly auto-calculated totals
- 👤 Tracks who reported each entry
- ⚡ Real-time updates (Firestore onSnapshot)
- 💾 Edit & update reports
- 📱 PWA installable (mobile/desktop)
- 📴 Offline support (service worker)

---

# 🔧 Setup Instructions

## 1. Firebase Setup

Enable in Firebase Console:

- Authentication → Email/Password
- Firestore Database → Start in production mode

---

## 2. Add Firebase Config

Already included in code:

```js
firebase.initializeApp({
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT"
});
