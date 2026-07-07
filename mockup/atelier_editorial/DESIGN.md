---
name: Atelier Editorial
colors:
  surface: '#fdf9f4'
  surface-dim: '#ddd9d5'
  surface-bright: '#fdf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ee'
  surface-container: '#f1ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e6e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0eb'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#ffffff'
  on-primary-container: '#747676'
  inverse-primary: '#c6c6c7'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffff'
  on-tertiary-container: '#747676'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fdf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e6e2dd'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 84px
    fontWeight: '600'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: 0em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.03em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.2em
  button-text:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.15em
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 24px
  stack-xl: 160px
  stack-lg: 80px
  stack-md: 40px
---

## Brand & Style

The design system is a digital expression of high-end event artistry. It merges the structured elegance of a luxury fashion house with the spacious, intentional layout of a premium editorial magazine. The brand personality is sophisticated, authoritative, and visionary, catering to a high-net-worth clientele who value precision and creative excellence.

The design style is **Modern Editorial Minimalism**. It leverages expansive white space, a restricted color palette, and high-contrast typography to create a sense of exclusivity. The UI recedes to allow the designer's portfolio of work to take center stage. Subtle influences of **Glassmorphism** are used for interactive overlays to maintain a light, airy feel, while thin borders and sharp alignment evoke a sense of architectural structure.

## Colors

The palette is rooted in a monochromatic foundation to emphasize timelessness. **Pure White (#FFFFFF)** serves as the primary canvas, providing a crisp, high-fashion backdrop. **Deep Black (#111111)** is used for primary typography and structural lines, ensuring maximum legibility and gravitas.

**Soft Beige (#F7F3EE)** acts as a gentle secondary neutral, used for section backgrounds and container fills to add warmth and depth without breaking the minimalist aesthetic. **Champagne Gold (#C8A96A)** is the designated accent; it must be used with extreme restraint—reserved for active states, small call-to-action details, or subtle decorative ornaments to signify luxury.

## Typography

This design system utilizes a high-contrast typographic pairing. Headlines feature **Bodoni Moda**, a sophisticated serif with vertical stress and dramatic stroke contrast, echoing the mastheads of premium fashion magazines.

The body and UI labels use **Montserrat**. To maintain the "lightweight" luxury feel, weights are kept at 300 (Light) and 400 (Regular). Tracking (letter spacing) is increased across all sans-serif roles to create an open, breathable reading experience. **Label-caps** should be used for category tags and small headers to add a rhythmic, structured feel to the layout.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a central container that scales with the viewport but caps at 1440px to preserve intentional whitespace. A 12-column grid is used for desktop, with extreme "stacking" margins (`stack-xl`) between major editorial sections to simulate the turning of a magazine page.

Margins are generous, pushing content inward to create a "frame" effect. Mobile layouts transition to a 4-column grid with reduced margins, but maintain vertical spacing to ensure the brand's sense of "air" is not lost on smaller screens. Masonry layouts for galleries should use irregular column spans (e.g., a 2-column image next to a 1-column image) to create visual interest.

## Elevation & Depth

Hierarchy is established primarily through scale and contrast rather than heavy shadows. The design system employs **Low-contrast outlines** and **Tonal layering**. Surfaces use 1px solid borders in a very light grey or Soft Beige to define boundaries.

**Glassmorphism** is used for floating panels, such as the "Inspiration Board." These elements should feature a high-density backdrop blur (20px - 30px) and a semi-transparent White (#FFFFFF80) fill. This creates a "frosted lens" effect that feels premium and tactile. Subtle ambient shadows (5% opacity) may be used only on floating interactive elements to distinguish them from the background.

## Shapes

The shape language is strictly **Sharp (0)**. Right angles communicate architectural precision, formality, and modernism. All buttons, cards, image containers, and input fields must feature 0px border-radii. 

The only exception to the sharp rule is the use of circular decorative elements or icons, which should be used sparingly to contrast against the rigid grid. Horizontal lines should be thin (1px) and used to separate editorial content or define the navigation bar.

## Components

### Buttons
Primary buttons are rectangular with a 1px Black border, transparent background, and Black text. Upon hover, the background fills with Black and text transitions to White. A secondary "Luxury" variant uses a 1px Champagne Gold border with Gold text. All transitions must be slow and elegant (300ms ease).

### Masonry Gallery Cards
Cards consist of full-bleed imagery with no visible borders. On hover, a subtle 1px inner Gold border appears, and a small `label-caps` caption fades in at the bottom.

### Inspiration Board
A floating glassmorphic panel pinned to the right edge of the screen. It uses a high backdrop blur and contains small, square thumbnails of "collected" items.

### Navigation
The navigation is centered and minimalist. The logo is the focal point, with menu items in `button-text` style distributed evenly on either side or hidden behind a "Menu" label to maximize whitespace.

### Input Fields
Inputs are represented by a single 1px Black bottom-border (underline style). Placeholders use `body-md` in a light grey. Upon focus, the underline transitions to Champagne Gold.

### Lists
Editorial lists use `headline-md` for items, often preceded by a "01, 02, 03" numbering system in `label-caps` style to create an organized, curated feel.