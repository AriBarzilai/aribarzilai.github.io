LAUNCH INSTRUCTIONS: Open the site from a web server, NOT from file (for example run ``python -m http.server`` in your terminal)

This is a personal site about me. My site has several pages, detailing who I am, what I aspire to do, projects I've done, et cetera.

**Q1:**:

cv.css

index.html

logic.js

nav.css

no-transition-on-resize.js

**Q2:**

jQuery is a Javascript library which simplifies many of the complex tasks in JavaScript into methods that can be called with just a few lines of code. It handles things like DOM manipulation, event handling, animation, etc.

**Q3:**

I detail below what each of my javascript files do:

* _/scripts/header.js:_ Responsible for fetching the header, which is stored in /content/header.html; we use this on every single page. I use javascript to remove reuse of code and enable quickly updating this element on all pages.

- EASTER EGG: We hid in header.js a script which, upon entering the classic code "up up down down left right left right b a", sets the background color across the site to a changing disco; this can be toggled off by re-entering the code.

* _/scripts/no-transition-on-resize.js:_ Disables unwanted CSS transitions during resize of the window.

* _/scripts/detectWebServer.js:_ Ensures that the site is not loaded from file; if it is, displays an error message and instructs the user to open a local http server.


**Q4:**

I would add a Contact Me form, which would send queries to my email directly, without requiring the user to open a mail app (I would maybe also add a captcha to lower spam)