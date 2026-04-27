# 📊 HC/PG SA Monthly Report System

A Firebase-powered reporting system with batch saving, real-time previews, and fully recalculated monthly totals.

---

# 🚀 FEATURES

## 📦 Daily Encoding System
- Add multiple store entries per day
- Auto-detect rest day based on schedule
- Preview entries before saving
- Prevent duplicate entry errors

---

## 💾 Save All (Batch System)
- Saves all entries in one transaction
- Clears daily input after successful save
- Refreshes preview table automatically

---

## 📊 Monthly Totals (100% ACCURATE SYSTEM)

Instead of incrementing values, the system:

✔ Reads all `reports` data  
✔ Recalculates totals from scratch  
✔ Rebuilds `monthly_totals` collection  

### Benefits:
- No duplication bugs
- No inflation errors
- Always correct data

---

## 📂 View Previous Data
- Shows full history of all saved entries
- Sorted by newest first
- Useful for auditing and corrections

---

## 📱 PWA SUPPORT
- Installable on mobile/desktop
- Works offline for UI shell
- Fast loading with caching system

---

# 🧠 DATA STRUCTURE

## reports collection
Each entry:
- date
- store
- status
- total
- signed
- rejected
- cancelled
- nonapps
- timestamp

---

## monthly_totals collection
Auto-generated:
- month
- store
- total
- signed
- rejected
- cancelled

---

# ⚠️ IMPORTANT NOTES

- Monthly totals are NOT manually edited
- They are fully rebuilt after every save
- This ensures 100% accuracy
- Do NOT modify monthly_totals directly

---

# 🔧 DEPLOYMENT

If updates don’t reflect:

1. Clear browser cache
2. Hard refresh (Ctrl + Shift + R)
3. Update service worker version in `sw.js`

---

# 📌 VERSION

v6 - Fully Recalculated Reporting System
