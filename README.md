# Lefa Arts & Crafts Catalogue

A lightweight, dependency-free catalogue website for displaying handmade arts and
crafts. Customers can build an enquiry basket and send it through WhatsApp.
Availability, delivery and payment are confirmed manually.

## Run locally

From this directory:

```bash
python3 -m http.server 8090
```

Open `http://127.0.0.1:8090`.

## Configure contact details

Edit `config.js`:

- `businessName`
- `whatsappNumber` in international format without `+` or spaces
- `phoneDisplay`
- `email`
- `currency`
- `locale`

The default WhatsApp number and email are placeholders and must be replaced before
publishing.

## Update the catalogue

Edit the `products` array near the top of `app.js`. Each product has:

- `id`
- `name`
- `category`
- `categoryLabel`
- `price`
- `description`
- `palette`
- optional `badge`

The current products and prices are sample content.

## Ordering model

This first version intentionally has no payment gateway or automatic order
processing. The customer:

1. Adds products to the enquiry basket.
2. Sends the prepared list through WhatsApp.
3. Receives confirmation of availability, delivery and final price.
4. Receives payment instructions directly.

## Hosting

Because the website is static, it can be hosted inexpensively on:

- Amazon S3 with CloudFront
- AWS Amplify Hosting
- GitHub Pages
- Netlify
- Cloudflare Pages
