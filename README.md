# 📊 HC/PG Admin Report System

A secure Firebase-based reporting system with real admin authentication.

---

## 🔐 Features

- Firebase Auth login
- Secure Admin via custom claims
- Store-based access control
- Real-time Firestore updates
- Monthly auto computation
- Edit / Delete system
- PWA support

---

## 👑 Admin System

Admins are NOT selectable.

They are assigned via Firebase custom claims:
admin: True

Only backend (Firebase Admin SDK) can assign admin.

---

## 🏪 Roles

### Staff
- Only their store data

### Admin
- All stores
- Can delete/edit anything

---

## 🔥 Security Model

- No frontend role selection
- Role comes from Firebase token
- Fully protected against tampering

---

## 🚀 Deployment

1. Add Firebase config (already included)
2. Deploy to GitHub Pages or Firebase Hosting
3. Add icons for PWA
