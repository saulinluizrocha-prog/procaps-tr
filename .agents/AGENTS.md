# COD Landing Page Standard Structure (Geo-targeted)

This document registers the standardized structure and rules for cash-on-delivery (COD) landing pages and backends.

## 1. Directory Structure Pattern
For each geographic target (e.g., `/tr` for Turkey, `/it` for Italy), use the following naming convention:
- **Landing Page**: `/geo/index.php` (e.g., `/tr/index.php`)
- **Backend Send Script**: `/geo-send.php` (mapped to `api/geo-send.php` on Vercel, e.g., `/tr-send.php` -> `/api/tr-send.php`)
- **Success Page**: `/geo-success.html` (e.g., `/tr-success.html`)

## 2. Forms & Frontend Requirements
- **Placeholders**: Standardize input placeholders to the target language (e.g., in Turkish: `"İsim"` for Name, `"Telefon Numarası"` for Phone).
- **Tracking Capture**: Include hidden inputs for the following tracking parameters and populate them from the URL parameters on page load:
  - `gclid`
  - `sub_1` to `sub_5`
  - `utm_campaign`, `utm_source`, `utm_medium`, `utm_term`, `utm_content`
- **Intelligent Phone Normalization (JS)**:
  - Remove all non-numeric characters.
  - Strip double country codes or local leading zeroes (e.g., for Turkey, strip `0090`, `90` prefix, or `0` prefix).
  - Re-add the country code (e.g., `90` for Turkey) to construct a normalized international number (e.g., `905XXXXXXXXX`).
  - Validate the normalized format against the official mobile layout of the country before letting the form submit. If invalid, display a clear warning. If valid, update the input value with the normalized string.

## 3. Backend (PHP) Requirements
- **Error Suppression**: Always set `error_reporting(0);` and `ini_set('display_errors', '0');` at the top of the backend script to prevent notices/deprecation warnings from polluting headers and breaking redirects.
- **Double Normalization**: Clean and normalize the phone number in PHP to match the target country format.
- **No Silent Lead Loss**: If the phone number does not pass strict validation, fall back to the cleaned numeric input and still attempt to send it to the cURL API.
- **Always Show Success**: Always redirect the user to the success page (`/geo-success.html`), even if the API returns an error or a "duplicate" lead response.
- **Track Parameter Propagation**: Collect all tracking fields (`gclid`, `sub_1` to `sub_5`, etc.) from POST, submit them to the API, and append them as query parameters in the success page redirect header.

## 4. Success Page Requirements
- **Urgent Warnings**: Always display stock limits and urgency indicators (e.g., in Turkish: *"DİKKAT: Stok Seviyeleri Düşük!"*).
- **Clear Instructions**:
  1. Keep the phone close.
  2. Answer calls from unknown numbers.
  3. Expect contact within 30 minutes.
- **Lead Info Card**: Dynamically display the customer's name and phone number (extracted via JS from query params) so they can verify their entries.
- **Contextual Cross-sell**:
  - Show a complementary product block (e.g., *Prostamen Ultra* for *ProCaps*).
  - Dynamically read the current URL parameters and append them to the cross-sell button tracker link (e.g., `https://tl-track.com/...`) to preserve ad attribution.

## 5. Vercel Routing Configuration
In `vercel.json`, ensure PHP files are routed to the serverless function runtime (`vercel-php`) under `/api`, mapping the root `/`, `/index.php`, and `/geo` paths properly:
```json
{
  "functions": {
    "api/**/*.php": {
      "runtime": "vercel-php@0.9.0"
    }
  },
  "routes": [
    { "src": "/geo-send.php", "dest": "/api/geo-send.php" },
    { "src": "/geo", "dest": "/api/geo/index.php" },
    { "src": "/geo/", "dest": "/api/geo/index.php" },
    { "src": "/geo/index.php", "dest": "/api/geo/index.php" },
    ...
  ]
}
```
