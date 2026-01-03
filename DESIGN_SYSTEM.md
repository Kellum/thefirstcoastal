# The First Coastal - Design System

## Brand Overview
The First Coastal helps Northeast Florida businesses make better decisions about their online presence through web design, development, SEO, and strategic consulting. Our brand identity reflects the coastal environment and straightforward technical expertise.

## Logo & Brand Mark

### Logo File
- **File:** `the_first_coastal_logo_highres.png`
- **Location:** `/media_assets/` (source), `/public/logo.png` (web)
- **Dimensions:** 50x50px (navigation), scalable for other uses
- **Usage:** Primary brand identifier in navigation, headers, and site materials

### Logo Guidelines
- Always maintain clear space around the logo (minimum 10px padding)
- Use the logo with the brand name "The First Coastal" in Montserrat font
- Logo appears on the left side of the navigation with the brand name
- Hover effect: Brand name transitions to coastal teal color

---

## Color Palette

### Primary Colors

#### Coastal Teal (Primary Brand Color)
- **Hex:** `#5D878C`
- **RGB:** `rgb(93, 135, 140)`
- **Usage:** Primary CTAs, brand accents, links, active states
- **Tailwind:** `coastal-500` (default)
- **Psychology:** Trust, professionalism, stability, coastal connection

#### Charcoal (Primary Dark)
- **Hex:** `#222326`
- **RGB:** `rgb(34, 35, 38)`
- **Usage:** Primary text, headers, high-contrast backgrounds
- **Tailwind:** `charcoal`
- **Psychology:** Sophistication, authority, clarity

### Secondary Colors

#### Slate Gray (Secondary Dark)
- **Hex:** `#3B3C40`
- **RGB:** `rgb(59, 60, 64)`
- **Usage:** Secondary text, borders, subtle backgrounds
- **Tailwind:** `slate-gray`
- **Psychology:** Balance, neutrality, professionalism

#### Sand Beige (Accent)
- **Hex:** `#BFB195`
- **RGB:** `rgb(191, 177, 149)`
- **Usage:** Accent elements, secondary CTAs, highlights
- **Tailwind:** `sand`
- **Psychology:** Warmth, approachability, coastal aesthetic

#### Cream (Light Background)
- **Hex:** `#F2F2F0`
- **RGB:** `rgb(242, 242, 240)`
- **Usage:** Backgrounds, cards, subtle containers
- **Tailwind:** `cream`
- **Psychology:** Cleanliness, spaciousness, calm

### Color Scale Extensions

#### Coastal Teal Scale
```
coastal-50:  #F0F4F5  (lightest - backgrounds)
coastal-100: #D9E5E7  (very light - hover states)
coastal-200: #B3CBCE  (light - borders)
coastal-300: #8DB1B6  (medium-light)
coastal-400: #75999E  (medium)
coastal-500: #5D878C  (DEFAULT - primary brand)
coastal-600: #4A6C70  (medium-dark - hover on dark)
coastal-700: #385154  (dark - text on light)
coastal-800: #253638  (very dark)
coastal-900: #131B1C  (darkest)
```

---

## Color Theory & Application

### Call-to-Action (CTA) Hierarchy

1. **Primary CTA** (Highest priority - main conversion actions)
   - **Color:** Coastal Teal (`#5D878C`) background
   - **Text:** White (`#FFFFFF`)
   - **Hover:** Darker teal (`coastal-700: #385154`)
   - **Shadow:** Medium shadow that expands on hover (shadow-md → shadow-lg)
   - **Examples:** "Get Started", "Start Your Project", "Contact Us", "Send Message"
   - **Reasoning:** Teal provides strong contrast against both light and dark backgrounds, draws eye attention
   - **Use on:** Any background (white, cream, charcoal)

2. **Secondary CTA** (Medium priority - alternative actions)
   - **Color:** Sand Beige (`#BFB195`) background
   - **Text:** Charcoal (`#222326`)
   - **Hover:** Slight opacity reduction (hover:bg-opacity-90)
   - **Shadow:** Medium shadow that expands on hover (shadow-md → shadow-lg)
   - **Examples:** "Get In Touch", "Learn More", "View Portfolio"
   - **Reasoning:** Warm, visible color that complements the coastal teal without competing
   - **Use on:** Light backgrounds (white, coastal-50) or dark backgrounds (charcoal)

3. **Tertiary CTA** (Low priority - subtle actions)
   - **Color:** Transparent background
   - **Text:** Coastal Teal (`#5D878C`)
   - **Hover:** Darker teal with underline
   - **Examples:** "Back to Work", "Skip", navigation links
   - **Reasoning:** Present but non-intrusive
   - **Use on:** Light backgrounds primarily

### Background Color Usage

- **Primary Background:** White (`#FFFFFF`)
- **Secondary Background:** Cream (`#F2F2F0`)
- **Accent Background:** Coastal Teal 50 (`coastal-50`)
- **Dark Background:** Charcoal (`#222326`) for contrast sections
- **Never use:** Pure black (#000000) - use Charcoal instead for softer appearance

### Text Color Hierarchy

1. **Primary Text:** Charcoal (`#222326`)
2. **Secondary Text:** Slate Gray (`#3B3C40`)
3. **Tertiary Text:** Gray 500 (`#6B7280`)
4. **Links:** Coastal Teal (`#5D878C`)
5. **Disabled Text:** Gray 400 (`#9CA3AF`)

### Contrast Guidelines

All color combinations must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text):

✅ **Accessible Combinations:**
- Charcoal text on White background (16.8:1)
- Charcoal text on Cream background (15.2:1)
- White text on Coastal Teal background (4.7:1)
- White text on Charcoal background (16.8:1)
- Coastal Teal text on White background (3.6:1 - large text only)

❌ **Avoid:**
- Sand Beige text on Cream background (insufficient contrast)
- Coastal Teal text on Sand Beige background (insufficient contrast)

---

## Typography

### Font Families

#### Primary Font: Montserrat (Google Fonts)
```css
font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
```
**Implementation:** Next.js Google Fonts (`next/font/google`)
**Weights Available:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
**Usage:** All text, navigation, headings, buttons - site-wide default
**Characteristics:** Clean, modern, professional, excellent readability
**Brand Name Styling:** Font-semibold (600), tracking-tight, with hover effect to coastal teal

### Type Scale

```
text-xs:    0.75rem  (12px)  - Captions, labels
text-sm:    0.875rem (14px)  - Small text, metadata
text-base:  1rem     (16px)  - Body text
text-lg:    1.125rem (18px)  - Lead paragraphs
text-xl:    1.25rem  (20px)  - Subheadings
text-2xl:   1.5rem   (24px)  - Section titles
text-3xl:   1.875rem (30px)  - Card headings
text-4xl:   2.25rem  (36px)  - Page headings
text-5xl:   3rem     (48px)  - Major headings
text-6xl:   3.75rem  (60px)  - Hero headings (mobile)
text-7xl:   4.5rem   (72px)  - Hero headings (desktop)
```

### Font Weights

```
font-light:     300  - Subtext, quotes
font-normal:    400  - Body text
font-medium:    500  - Emphasized text, buttons
font-semibold:  600  - Subheadings
font-bold:      700  - Headings, strong emphasis
font-extrabold: 800  - Hero text (optional)
```

### Line Heights

```
leading-tight:   1.25  - Headlines
leading-snug:    1.375 - Subheadings
leading-normal:  1.5   - Body text
leading-relaxed: 1.625 - Long-form content
leading-loose:   2.0   - Spaced content
```

---

## Spacing System

Use Tailwind's spacing scale (based on 0.25rem = 4px increments):

```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
24:  96px
32:  128px
```

### Common Patterns

- **Component padding:** `p-6` (24px) or `p-8` (32px)
- **Section padding vertical:** `py-16` (64px) mobile, `py-24` (96px) desktop
- **Section padding horizontal:** `px-6` (24px)
- **Button padding:** `px-8 py-4` (32px x 16px)
- **Card gap:** `gap-8` (32px)
- **Grid gap:** `gap-6` or `gap-8` (24-32px)

---

## Components

### Buttons

#### Primary Button (Main CTAs)
Use for the most important actions on any page.
```tsx
className="px-8 py-4 bg-coastal text-white rounded-lg hover:bg-coastal-700
           transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
```

#### Secondary Button (Alternative Actions)
Use on dark backgrounds or as secondary CTAs. Provides contrast and warmth.
```tsx
className="px-8 py-4 bg-sand text-charcoal rounded-lg hover:bg-opacity-90
           transition-all duration-200 font-medium shadow-md hover:shadow-lg"
```

#### Tertiary Button (Text Links)
Use for low-priority actions or navigation.
```tsx
className="text-coastal hover:text-coastal-700 underline-offset-4
           hover:underline transition-colors duration-200"
```

### Cards

```tsx
className="p-8 bg-white border border-gray-200 rounded-lg
           hover:border-coastal hover:shadow-lg transition-all duration-300"
```

### Input Fields

```tsx
className="w-full px-4 py-3 border border-gray-300 rounded-lg
           focus:outline-none focus:ring-2 focus:ring-coastal
           focus:border-transparent transition-all"
```

### Navigation Links

```tsx
className="text-charcoal hover:text-coastal transition-colors duration-200"
```

---

## Shadows

```
shadow-sm:  0 1px 2px 0 rgb(0 0 0 / 0.05)           - Subtle elevation
shadow:     0 1px 3px 0 rgb(0 0 0 / 0.1)            - Cards at rest
shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1)         - Cards on hover
shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1)       - Modals, dropdowns
shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1)       - Heavy emphasis
```

---

## Border Radius

```
rounded-sm:   0.125rem (2px)   - Subtle rounding
rounded:      0.25rem  (4px)   - Small elements
rounded-md:   0.375rem (6px)   - Inputs
rounded-lg:   0.5rem   (8px)   - Buttons, cards (DEFAULT)
rounded-xl:   0.75rem  (12px)  - Large cards
rounded-2xl:  1rem     (16px)  - Hero sections
rounded-full: 9999px           - Pills, avatars
```

**Standard:** Use `rounded-lg` for most interactive elements

---

## Animation & Transitions

### Timing

```
duration-100: 100ms  - Instant feedback (hovers)
duration-200: 200ms  - Standard transitions (DEFAULT)
duration-300: 300ms  - Smooth transitions (panels)
duration-500: 500ms  - Deliberate animations
```

### Easing

```css
transition-all      /* All properties */
transition-colors   /* Color changes only */
transition-transform /* Transforms only */
transition-opacity  /* Opacity changes */
```

**Standard:** Use `duration-200` for most interactions

---

## Grid & Layout

### Container Widths

```
max-w-7xl: 80rem (1280px) - Main content container
max-w-4xl: 56rem (896px)  - Centered content, forms
max-w-2xl: 42rem (672px)  - Long-form text
```

### Responsive Grid

```tsx
// Services/Features Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"

// Two Column Layout
className="grid grid-cols-1 lg:grid-cols-2 gap-12"

// Blog/Portfolio Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

---

## Best Practices

### Do's ✅

1. Use Coastal Teal for primary CTAs and brand emphasis
2. Maintain consistent spacing using the spacing scale
3. Use Charcoal instead of pure black for text
4. Ensure all text meets WCAG AA contrast standards
5. Use Cream for subtle background differentiation
6. Apply hover states to all interactive elements
7. Use `transition-colors duration-200` for smooth interactions
8. Maintain visual hierarchy with font sizes and weights

### Don'ts ❌

1. Don't use pure black (#000000) - use Charcoal instead
2. Don't mix too many colors in one section
3. Don't use Sand Beige for text (insufficient contrast)
4. Don't skip hover/focus states on interactive elements
5. Don't use color as the only indicator (accessibility)
6. Don't exceed 3 CTA colors per view
7. Don't use inconsistent border radius values

---

## Accessibility Requirements

1. **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
2. **Focus States:** All interactive elements must have visible focus indicators
3. **Alt Text:** All images must have descriptive alt text
4. **Semantic HTML:** Use proper heading hierarchy (h1-h6)
5. **Keyboard Navigation:** All interactions must be keyboard accessible
6. **Screen Readers:** Use ARIA labels where appropriate

---

## Implementation Guide

### In Tailwind Config

See `tailwind.config.ts` for color definitions:
- `coastal` - Primary brand color with full scale
- `charcoal` - Primary dark color
- `slate-gray` - Secondary dark
- `sand` - Accent color
- `cream` - Light background

### In CSS Variables

See `globals.css` for CSS custom properties if needed for dynamic theming.

### In Components

Import colors via Tailwind utility classes:
```tsx
bg-coastal         // Background
text-coastal       // Text color
border-coastal     // Border color
hover:bg-coastal-600  // Hover state
```

---

## File Reference

- **Tailwind Config:** `/tailwind.config.ts`
- **Global Styles:** `/app/globals.css`
- **Components:** `/components/*`

---

**Version:** 1.0
**Last Updated:** December 19, 2024
**Maintained By:** The First Coastal Development Team
