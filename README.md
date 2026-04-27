# HC/PG SA Monthly Report System

## FEATURES
- Daily entry encoding
- Edit & delete before saving
- Batch Save All system
- Previous data viewer
- Monthly totals auto-recalculated
- Real-time date update
- Auto form reset

---

## DATA LOGIC
- `reports` = raw daily entries
- `monthly_totals` = fully recalculated from reports

No manual editing allowed on monthly totals.

---

## SYSTEM BEHAVIOR
- Add entries → preview list
- Save All → batch upload
- After save → rebuild monthly totals
- View history anytime

---

## PWA
- Installable app
- Offline UI caching (service worker)
