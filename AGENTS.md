# Couch Drops public website: instructions for AI assistants (ChatGPT/Codex, Claude, anyone)

The public inventory website for **Dylan's Couch Drops**, a couch reselling business in Columbus, GA / Phenix City / Fort Benning. Customers browse available couches, open a couch to see photos, video and details, read reviews, and book a warehouse visit. Dylan isn't a developer and edits from his phone, so keep explanations plain and short.

- Live: https://couch-inventory.pages.dev
- Hosting: Cloudflare Pages, **free plan**. **Merging to `main` deploys within about a minute.** Work on a branch and open a PR. Cloudflare also builds a preview link for each branch, so check that before merging.
- **This repo is public.** Never commit secrets, PINs, tokens, API keys or private business numbers.

## Files
- `index.html`: the whole site. Plain HTML, CSS and JS with no framework and no build step. Brand colors are CSS variables in `:root` (navy `#00203F`, blue `#007BD8`). Fonts are Poppins for headings and Inter for body text.
- `functions/api/reviews.js`: a Cloudflare Pages Function at `/api/reviews`. It forwards to the admin app's `/public/reviews` (positive Facebook reviews).
- `app/index.html`: a shortcut page that sends Dylan to his admin app (https://couch-drops.consultwithdylan.workers.dev). It's what's saved on his home screen.
- `logo-web.png`: the logo.

## Where the data comes from
- **Inventory:** `CSV_URL` = `https://couch-drops.consultwithdylan.workers.dev/public/live.csv`. That's the admin app (repo `couch-drops-fast`), which is the source of truth. The columns are Timestamp, Couch Title, Things to note, Price ($), Photos, Video (optional), Status, Dimensions, Listing ID. The site reads columns by header name and shows an on-page error if a required column is missing. It refreshes every 60 seconds and hides sold couches.
- **Photos:** in `driveImageUrl(id)`, an ID shaped like a UUID loads from the admin app (`/img/<id>?w=1000`). Older IDs are Google Drive files, loaded from Drive thumbnails.
- **Videos:** a UUID ID plays from the admin app (`/video/<id>`, a `<video>` tag). An older Drive ID uses a Drive preview iframe.
- **Booking:** `BOOKING_URL` is Dylan's LeadConnector/GoHighLevel booking widget.

To change what data exists (new fields, prices, statuses), change the admin app (`couch-drops-fast`), not this site. The old Google Sheet and Apps Script are retired, so don't point anything back at them.

## Ground rules
- Keep it a single `index.html` with no build step and no npm packages.
- Check it on a phone-width screen. Most visitors are on phones.
- Don't change Dylan's wording (headlines, delivery and pickup info, church rebate) unless he asks.
