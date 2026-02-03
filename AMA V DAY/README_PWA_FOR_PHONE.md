# Heart Pop Love Messages - varianta pentru telefon (PWA)

Acest proiect a fost pregătit ca Progressive Web App (PWA),
astfel încât să-l poți rula ca o aplicație pe telefon.

## Pași

1. Instalează dependențele:
   ```bash
   npm install
   ```

2. Pornește proiectul în modul development:
   ```bash
   npm run dev -- --host
   ```

3. Pe telefon (conectat în aceeași rețea Wi-Fi):
   - deschide browserul (Chrome)
   - mergi la `http://IP-UL-PC-ULUI:5173`
   - deschide meniul (⋮) și apasă **Add to Home screen / Adaugă pe ecranul de pornire**

4. Pentru varianta de producție (host-uită pe un server sau pe un hosting static):
   ```bash
   npm run build
   npm run preview -- --host
   ```
   Sau urcă folderul `dist` pe un hosting HTTPS (Netlify, Vercel, etc.).
   Pe telefon vei putea apoi:
   - deschide site-ul
   - apăsa **Add to Home screen**
   - aplicația va porni full-screen ca un app nativ.