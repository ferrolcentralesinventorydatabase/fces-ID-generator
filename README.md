# FCES School ID Generator

Front-and-back ATM-size ID cards for Ferrol Central Elementary School. Runs entirely in the browser, so it works on free GitHub Pages and no student data is ever uploaded to a server.

## Permanent school settings
- Name, address, school ID, principal's name and title: edit **config.js**.
- School, DepEd, Bagong Pilipinas and District logos, plus the principal's e-signature: upload to the **assets/** folder using the file names in `assets/README.txt`.

These are not editable from the web page, so nobody can change them by accident.

## Saved IDs
Every ID and every print batch is saved automatically in the browser (IndexedDB), so records are still there after closing the page. Go to **4 · Saved IDs** to search, edit or delete records, see the print history, and download or restore a backup.

Browser storage belongs to one browser on one computer. Download a backup (.json) regularly, and use **Restore backup** to move the records to another computer.

## Publish on GitHub Pages
1. Create a repository and upload all files (`index.html`, `config.js`, `README.md`, `assets/`).
2. Go to **Settings > Pages**, set Source to *Deploy from a branch*, choose `main` and `/ (root)`, then Save.
3. Open `https://<your-username>.github.io/<repository-name>/`.

## Privacy note
Student photos and data stay in each user's browser. Do not commit real learner data to a public repository; the backup file should be kept offline.
