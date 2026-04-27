# HC/PG SA Monthly Report System

## Features
- Daily encoding per store
- Edit & delete before saving
- Batch save (Save All)
- Full report viewer
- Monthly totals auto-recalculated from reports

## System Logic
- Monthly totals are NOT manually stored
- They are recalculated from `reports` collection
- Ensures 100% accuracy (no duplication bugs)

## Functions
- Add Entry
- Edit Entry (before saving)
- Delete Entry (before saving)
- Save All (batch upload)
- View previous data
- Auto monthly rebuild

## Firestore Collections
### reports
Stores all daily entries

### monthly_totals
Auto-generated summary (recomputed)

## Notes
- Do NOT manually edit monthly_totals
- Always use Save All for consistency
