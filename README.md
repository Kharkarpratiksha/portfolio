# Pratiksha Kharkar — Portfolio

Multi-page React portfolio with animations, separate routes, and a polished dark design.

## Setup

```bash
# 1. Install dependencies (react-router-dom is required)
npm install react-router-dom

# 2. Start dev server
npm start
```

## File Structure

```
src/
├── App.jsx                  ← Router root
├── App.css                  ← All global styles & animations
├── components/
│   └── Navbar.jsx           ← Fixed navigation bar
├── pages/
│   ├── Home.jsx             ← Hero section + stats bar
│   ├── Experience.jsx       ← Timeline + education card
│   ├── Projects.jsx         ← Project cards with mock screenshots
│   ├── Skills.jsx           ← Categorised skill grid
│   └── Contact.jsx          ← Contact info + message form
└── images/                  ← Drop your images here
    ├── Myprofile.jpeg
    ├── Project1_mockup.png
    ├── Project2_mockup.png
    └── Project3_mockup.png
```

## Swapping in Your Photos

### Profile photo
In `src/pages/Home.jsx`:
1. Uncomment `import profile from "../images/Myprofile.jpeg";`
2. Replace the `<!-- OPTION A -->` placeholder div with:
   ```jsx
   <img src={profile} alt="Pratiksha Kharkar" className="hero-img" />
   ```

### Project screenshots
In `src/pages/Projects.jsx`:
1. Uncomment the three import lines at the top.
2. Add `img: project1` (etc.) to the matching project object.
   The `<MockCard />` placeholder is replaced automatically when `proj.img` exists.

## Adding Email to the Contact Form

In `src/pages/Contact.jsx`, replace the `setTimeout` inside `handleSubmit` with
your preferred service, for example **EmailJS**:

```js
import emailjs from "@emailjs/browser";

emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
  .then(() => setStatus("sent"))
  .catch(() => setStatus("idle"));
```

## Animations

- Hero text: CSS `@keyframes fadeUp` with staggered `animation-delay`
- Hero image: CSS `@keyframes float` (gentle up/down loop)
- Experience items: `IntersectionObserver` → adds `.visible` class → CSS transition
- Skill cards: same observer with 50 ms per-card stagger
- Project cards: same observer with 200 ms per-card stagger
- Badge dot: CSS `@keyframes pulse` (cyan glow)
