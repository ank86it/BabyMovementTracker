# ❤️ Baby Movement Tracker

A simple Progressive Web App (PWA) to record fetal movements during pregnancy.

The application records each movement with date and time and stores it in a Google Sheet using Google Apps Script.

---

# Features

* 🫧 Flutters & Bubbles

* 👣 Kicks & Jabs

* 🔄 Rolls & Turns

* 💓 Hiccups

* 🤲 Stretches

* Automatic Date & Time

* Mobile Friendly

* Google Sheet Integration

* Local Storage Backup

* Installable as a PWA

---

# Project Structure

```
BabyMovementTracker/

index.html

style.css

app.js

config.js

manifest.json

sw.js

README.md

icon-192.png

icon-512.png
```

---

# Google Apps Script

Replace the Apps Script with the provided `Code.gs`.

Deploy it as:

* Execute As: Me
* Access: Anyone

Copy the Web App URL.

Update `config.js`:

```javascript
const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

---

# Google Sheet

Create a sheet named:

```
MovementLog
```

Columns:

| Date | Time | Movement | Notes | PregnancyWeek | Device | Timestamp |
| ---- | ---- | -------- | ----- | ------------- | ------ | --------- |

---

# GitHub Pages

Enable GitHub Pages.

Settings

→ Pages

→ Deploy from Branch

→ main

→ /(root)

Website URL:

```
https://YOUR_USERNAME.github.io/BabyMovementTracker
```

---

# Installation

Open the website in Chrome.

Tap

```
Add to Home Screen
```

The application behaves like a native Android app.

---

# Version 1

Current Features

* Record baby movement
* Local timeline
* Today's movement count
* Last movement
* Google Sheets synchronization
* Offline cache
* PWA support

---

# Planned Features

* Daily Statistics
* Weekly Statistics
* Calendar View
* Search
* PDF Export
* CSV Export
* Kick Count Mode
* Pregnancy Week Tracker
* Dark Mode
* Doctor Report

---

# Author

Created for personal pregnancy tracking.

Developed using:

* HTML5
* CSS3
* JavaScript
* Google Apps Script
* Google Sheets
* GitHub Pages
