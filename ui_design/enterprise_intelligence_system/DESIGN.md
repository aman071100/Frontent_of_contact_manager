---
name: Enterprise Intelligence System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#4d556b'
  on-tertiary: '#ffffff'
  tertiary-container: '#656d84'
  on-tertiary-container: '#eef0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1280px
  sidebar-width: 280px
---

## Brand & Style

This design system is built for high-stakes enterprise productivity, where clarity and speed are paramount. The brand personality is **Precise, Systematic, and Facilitative**. It aims to evoke a sense of calm control, positioning the AI as a high-performance tool rather than a novelty.

The design style is **Modern Corporate Minimalism**, heavily influenced by the "Work OS" aesthetic. It utilizes a restrained color palette, purposeful whitespace, and a clear information hierarchy. By stripping away non-functional ornamentation, the system prioritizes the user's content and the AI's insights, creating a "quiet" interface that supports deep focus and complex document analysis.

## Colors

The color strategy uses a **Functional Monochrome** base with a high-action primary blue. 

- **Primary (#2563EB):** Reserved exclusively for primary actions, active states, and critical AI indicators.
- **Background (#F8FAFC):** A cool, neutral grey that reduces eye strain during long reading sessions and distinguishes the application frame from the content.
- **Surface (#FFFFFF):** Used for cards, chat bubbles, and sidebars to create a layered effect against the background.
- **Border (#E5E7EB):** A subtle, low-contrast divider used to define structure without creating visual noise.
- **Status Colors:** Use standard semantic greens (Success), reds (Error), and ambers (Warning) in desaturated tones to maintain the professional atmosphere.

## Typography

The typography system relies on **Inter** for its exceptional legibility and systematic feel. For code blocks and technical citations within AI responses, **JetBrains Mono** is introduced to provide a clear visual distinction.

- **Scale:** High contrast between headlines and body text is avoided to keep the interface grounded. 
- **Readability:** Body-lg (16px) is the standard for AI-generated long-form responses to ensure a comfortable reading experience.
- **Hierarchy:** Use FontWeight 600 for sub-headers and Label-sm for metadata or utility navigation to maintain a compact, efficient density.

## Layout & Spacing

This design system employs an **8px linear scale** to ensure consistent alignment and rhythm. 

- **The Three-Pane Architecture:** 
  1. **Navigation Rail/Sidebar (Fixed):** 280px width, containing history and workspace settings.
  2. **Main Content Area (Fluid):** The primary workspace for chat and document viewing.
  3. **Context/Inspector Panel (Optional):** A right-aligned panel for document metadata or citations.
- **Grids:** Use a 12-column grid for dashboard views. For the chat interface, use a centered "max-width" container (800px) to optimize the line length for readability.
- **Mobile:** Sidebars collapse into a hamburger menu or bottom sheet. Padding reduces from 24px (Desktop) to 16px (Mobile).

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Soft Ambient Shadows**. 

- **Level 0 (Background):** #F8FAFC. The lowest layer.
- **Level 1 (Surface):** #FFFFFF. Used for the main chat canvas or document cards. Includes a 1px border (#E5E7EB).
- **Level 2 (Raised):** Use for active elements like dropdowns, popovers, or floating action buttons. Apply a soft shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`.
- **Level 3 (Overlay):** Used for Modals. Apply a more diffused shadow and a background backdrop blur (8px) on the Level 0 layer to maintain focus.

## Shapes

The shape language is **Refined and Modern**, utilizing a consistent 12px (0.75rem) corner radius for most UI components.

- **Standard (12px):** Default for buttons, input fields, and chat bubbles.
- **Large (16px):** Used for primary containers, cards, and modals.
- **Full (Pill):** Used exclusively for chips, tags, and toggle switches to differentiate them from actionable buttons.

## Components

- **Buttons:** Primary buttons use a solid #2563EB fill with white text. Secondary buttons use a #FFFFFF fill with a #E5E7EB border. All buttons have a height of 40px for desktop and 48px for touch targets.
- **Chat Bubbles:** AI responses should be distinguished by a subtle #F1F5F9 (slightly darker than background) surface, while user prompts remain white with a border.
- **Input Fields:** The main chat input should be a multi-line auto-expanding field with a 12px radius, a 1px #E5E7EB border, and a subtle inner shadow to suggest depth.
- **Cards:** Used for document previews. Include a 1px border and a subtle hover state that shifts the border color to #CBD5E1.
- **Lists:** Workspace and history items use a 4px vertical gap. Active items are indicated by a 2px vertical "pill" of Primary color on the left edge and a light blue tinted background.
- **Chips:** Used for document tags or suggested prompts. Use a "Pill" shape with #F1F5F9 background and #475569 text.