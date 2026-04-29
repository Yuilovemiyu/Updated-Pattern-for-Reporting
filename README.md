# 📊 HC/PG SA Monthly Report System

A Firebase-based reporting system for daily store entries and automatic monthly totals.

---

## 🚀 Features

### 📌 Daily Reporting
- Add store entries per day
- Includes:
  - Total Apps
  - Signed
  - Rejected
  - Cancelled
  - Non Apps
- Tracks who reported using `reportedBy`

---

### 📊 Monthly Totals (AUTO)
- Automatically recalculates from all reports
- Groups by:
  - Month
  - Store
- Updates after:
  - Add Entry
  - Update Entry
  - Save All

---

### ✏️ Edit System
- Edit any daily report entry
- Changes automatically reflect in monthly totals

---

### 🛠 Admin System (OPTION 2)
- Admin users can promote other users to admin
- Only visible if `admin: true`

---

## 🔐 Firebase Structure

### users collection
