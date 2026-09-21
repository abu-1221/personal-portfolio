
## Contact and testimonial forms on static hosting

This project builds with `output: "export"` (GitHub Pages style static hosting).
The Next.js API routes (`/api/send-email`, `/api/submit-testimonial`) only run
when the app is deployed on a Node server (e.g. Vercel). On static hosting the
forms automatically fall back to opening the visitor's email client with the
message prefilled, so nothing is lost.
