# babanepedia.com

Minecraft server website. Yotsuba-style CSS.

## File structure

```
babanepedia/
├── index.html        ← home / welcome
├── rules.html        ← server rules
├── gallery.html      ← screenshot gallery
├── players.html      ← leaderboard
├── contact.html      ← discord + FAQ
├── CNAME             ← custom domain (babanepedia.com)
├── css/
│   └── yotsuba.css   ← all styles
├── js/
│   └── site.js       ← shared header/nav/footer
└── images/           ← put your screenshots here
    ├── banner.png         ← homepage banner (shown in op-post)
    ├── screenshot1.png
    ├── screenshot2.png
    └── ...
```

## How to add screenshots (gallery)

1. Drop your `.png` or `.jpg` into the `images/` folder.
2. Open `gallery.html` and copy one of the `.gallery-item` blocks.
3. Change `src="images/YOUR-FILE.png"` and the caption text.
4. Commit and push.

## How to update the leaderboard

Open `players.html` and edit the table rows directly.  
Copy an existing `<tr>` block for a new row.

## How to deploy to GitHub Pages

1. Create a GitHub repository (e.g. `babanepedia-site`).
2. Push this folder to the `main` branch.
3. Go to repo **Settings → Pages**.
4. Set source to **Deploy from branch → main → / (root)**.
5. Under **Custom domain**, enter `babanepedia.com` (the CNAME file handles this).
6. At your domain registrar, set:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` `www` → `yourgithubusername.github.io`
7. Wait up to 24 hours for DNS to propagate. GitHub will issue an SSL cert automatically.

## Change your Discord invite link

Search for `YOURINVITE` in `contact.html` and replace with your real invite code.

## Change the server IP shown in the header

Open `js/site.js` and change `play.babanepedia.com` to your actual server address (two places).
