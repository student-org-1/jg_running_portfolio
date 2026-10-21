---
name: "Jamie Student Portfolio"
description: "A personal GitHub-profile portfolio built from Primer semantics and repository patterns."
colors:
  foreground-default: "var(--fgColor-default, #1f2328)"
  foreground-muted: "var(--fgColor-muted, #656d76)"
  canvas-default: "var(--bgColor-default, #ffffff)"
  canvas-muted: "var(--bgColor-muted, #f6f8fa)"
  border-default: "var(--borderColor-default, #d0d7de)"
  border-muted: "var(--borderColor-muted, #d8dee4)"
  accent-link: "var(--fgColor-accent, #0969da)"
  action-green: "#1f883d"
  action-green-hover: "#1a7f37"
  identity-green: "#238636"
  on-emphasis: "#ffffff"
  header-canvas: "#010409"
  header-control: "#21262d"
  header-border: "#30363d"
  header-foreground: "#f0f6fc"
  header-muted: "#b1bac4"
  active-coral: "#f78166"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.04em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "20px"
  micro:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  activity-cell: "2px"
  control: "6px"
  identity-mark: "12px"
  circle: "9999px"
spacing:
  hairline: "4px"
  compact: "8px"
  small: "12px"
  base: "16px"
  comfortable: "20px"
  section: "24px"
  large: "32px"
  spacious: "40px"
  reading: "48px"
components:
  button-primary:
    backgroundColor: "{colors.action-green}"
    textColor: "{colors.on-emphasis}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "5px 16px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "{colors.action-green-hover}"
    textColor: "{colors.on-emphasis}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "5px 16px"
    height: "32px"
  button-secondary:
    backgroundColor: "{colors.canvas-muted}"
    textColor: "{colors.foreground-default}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "5px 16px"
    height: "32px"
  label-chip:
    backgroundColor: "{colors.canvas-default}"
    textColor: "{colors.foreground-default}"
    typography: "{typography.micro}"
    rounded: "{rounded.circle}"
    padding: "0 7px"
    height: "20px"
  repository-card:
    backgroundColor: "{colors.canvas-default}"
    textColor: "{colors.foreground-default}"
    rounded: "0"
    padding: "20px"
  navigation-active:
    backgroundColor: "{colors.header-canvas}"
    textColor: "{colors.header-foreground}"
    typography: "{typography.label}"
    rounded: "0"
    padding: "0 12px"
    height: "64px"
---

# Design System: Jamie Student Portfolio

## Overview

**Creative North Star: "The Personal README"**

The portfolio behaves like a living GitHub profile: personal identity sits beside a readable project record, and repository conventions make the student's work feel inspectable rather than advertised. The interface is compact, factual, and familiar, with Primer semantics supplying the core visual language while the green monogram, progress marks, and profile composition keep the site personal.

The system is intentionally border-led and content-first. Muted canvases separate file headers, project metadata, and secondary states; links and status colors carry meaning rather than decoration. Light and dark themes remain equivalent expressions of the same semantic roles, and the persistent non-affiliation statement keeps the GitHub-inspired presentation honest.

**Key Characteristics:**
- GitHub profile and README composition instead of a marketing hero.
- Semantic Primer colors that remain meaningful across light and dark themes.
- Repository borders, muted file surfaces, compact controls, and readable metadata.
- Personal green identity accents reserved for primary action and progress.
- Explicit presentation as an independent portfolio, not a GitHub property.

## Colors

The palette is a semantic Primer neutral system with blue links, restrained green action and progress accents, and a permanently dark repository-style header.

### Primary
- **Action Green:** The main call-to-action color for primary buttons and completed progress states.
- **Identity Green:** The custom monogram and identity field color; it distinguishes the student from the surrounding Primer chrome.

### Secondary
- **Primer Link Blue:** Links, project titles, skip-link emphasis, and visible focus outlines.
- **Active Coral:** The thin active-page indicator in the dark desktop navigation.

### Neutral
- **Default Canvas:** The main reading surface and card background.
- **Muted Canvas:** File bars, project headers, incomplete states, and secondary surface differentiation.
- **Default Foreground:** Primary reading text and strong row labels.
- **Muted Foreground:** Supporting copy, metadata, usernames, and breadcrumbs.
- **Default and Muted Borders:** Structural dividers, repository grids, sidebars, and card edges.
- **Header Canvas:** Persistent near-black navigation chrome with light foreground and muted inactive links.

### Named Rules

**The Semantic Token Rule.** Use Primer semantic custom properties for foregrounds, canvases, links, focus, and borders so light and dark themes change roles rather than individual selectors.

**The Green Reserve Rule.** Green is for personal identity, primary action, completion, and contribution-style progress; it is not a general decorative fill.

**The Independent Profile Rule.** GitHub colors and patterns describe the portfolio's hosting and interaction language, never endorsement, ownership, or official affiliation.

## Typography

**Display Font:** System UI sans (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, sans-serif)  
**Body Font:** System UI sans (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, sans-serif)  
**Label/Mono Font:** No separate mono family is established; compact metadata remains in the system sans stack.

**Character:** The type system is direct and interface-native. Scale, weight, line length, and metadata density create hierarchy without introducing a separate editorial or brand face that would break the Primer profile world.

### Hierarchy
- **Display** (600, fluid 2.25rem–4.5rem, 1): Page introductions and the 404 statement; tightly tracked and limited to short lines.
- **Headline** (600, fluid 2rem–3.5rem, 1.25): The README greeting and other high-emphasis content inside a repository surface.
- **Title** (600, 1.25rem, 1.25): Project names, contact headings, and profile-adjacent titles.
- **Body** (400, 1rem, 1.5): Default copy, with reading passages generally constrained to 65–72 characters.
- **Lead** (400, 1.125rem, 1.65): Muted introductory copy beneath a page display heading.
- **Label** (600, 0.875rem, 20px): Navigation, file bars, buttons, section headings, and repository names.
- **Micro** (600, 0.75rem, 1.5): Metadata, timeline dates, footer text, and language details.

### Named Rules

**The Repository Voice Rule.** Use the system sans stack at every level; hierarchy comes from restrained scale and weight, not from a contrasting display typeface.

**The Short Display Rule.** Large, tightly tracked headings stay brief and cap their line length at roughly 16–18 characters.

## Layout

The outer shell is centered and capped at 1216px with 16px side gutters. Reading-focused secondary pages narrow to 1012px. The home viewport uses a 220–296px profile column beside a flexible README and project record, while About and Project detail pages use a main reading column plus a compact metadata rail.

Spacing follows a compact 4px/8px foundation, with 16–24px component padding and 32–48px section separation. Reading content uses generous internal padding without loosening the surrounding repository chrome. Borders frequently define alignment between adjacent cards instead of independent floating containers.

At 767px and below, multi-column layouts become single-column, the profile compresses to a small avatar-plus-name row, project metadata moves beneath the narrative, and navigation becomes an explicit menu-controlled vertical list. At 599px and below, labels wrap, controls tighten, project headers stack, and contribution cells reduce from 12px to 10px.

### Named Rules

**The Profile-to-Record Rule.** On the overview, establish the person first and place the README-style work record directly beside them whenever the viewport allows.

**The Collapse, Don't Compress Rule.** When a rail or two-column composition no longer fits, stack it; do not preserve desktop columns by shrinking readable content.

**The Shared Edge Rule.** Repository groups use joined borders and aligned edges before separate card silhouettes.

## Elevation & Depth

The system is flat by default. Depth comes from one-pixel borders, muted surface shifts, sticky header layering, and adjacency rather than from floating cards. The shipped avatar carries a soft ambient shadow as an identity-specific exception; that isolated value is not a general elevation token.

### Named Rules

**The Border-First Rule.** Establish hierarchy with borders and tonal surfaces before considering shadow.

**The Flat Record Rule.** README panels, project records, link rows, and repository cards remain visually attached to the page rather than hovering above it.

## Shapes

Primer's compact 6px radius is the default for controls and bounded containers. Joined repository grids remain square at shared edges. Full circles are reserved for identity avatars, contact marks, status markers, language dots, and contribution-style progress; they do not become a general card shape. The monogram uses a distinct 12px corner at its native 64px size.

### Named Rules

**The Primer Radius Rule.** Use the 6px control radius for buttons, mobile navigation items, and independent bounded panels.

**The Semantic Circle Rule.** Circular geometry signals identity, status, or a data point—not generic decoration.

## Components

### Buttons
- **Shape:** Compact Primer control with gently rounded corners (6px) and a 32px default height.
- **Primary:** Action green with white text and 5px × 16px padding; use for the single strongest next action in a local group.
- **Hover / Focus:** Darken to the established green hover value; preserve the global 2px blue focus outline with a 3px offset.
- **Secondary:** Neutral Primer button styling for supporting navigation and lower-priority actions.
- **Disabled Placeholder:** Keep the button silhouette but reduce opacity and show a non-interactive cursor when starter links have not been replaced.

### Chips
- **Style:** Compact Primer labels use micro text, pill corners, and quiet border/surface contrast.
- **State:** Green success labels are reserved for genuine availability or featured status; ordinary technology and visibility labels remain neutral.

### Cards / Containers
- **Corner Style:** Independent panels use the 6px radius; cards joined in a repository grid use square shared edges.
- **Background:** Default canvas for reading surfaces and muted canvas for file bars, project headers, pending states, and the “next project” placeholder.
- **Shadow Strategy:** Flat and border-led; no routine card shadow.
- **Border:** One-pixel semantic default or muted borders.
- **Internal Padding:** 20px for repository cards, 24–32px for project and contact panels, and a fluid 24–48px for README reading content.

### Navigation
- **Style:** A sticky, near-black 64px header with a compact identity link, semibold labels, muted inactive text, white hover text, and a thin coral active indicator.
- **Mobile Treatment:** At 767px and below, navigation becomes a full-width vertical list opened by a labeled menu button; the active item uses a dark control fill instead of an underline.
- **Theme Control:** The theme control is visually grouped with dark header controls and cycles system, light, and dark modes while retaining an accessible text label when space permits.

### README Panel

The primary content surface combines a muted file bar, filename label, status chip, and padded Markdown body inside a bordered Primer box. It is the defining composition of the overview and should remain more prominent than decorative chrome.

### Repository Card

Repository cards prioritize a linked project name, visibility label, one concise description, and compact metadata. Cards align in a two-column joined grid on larger screens and become a single bordered sequence on mobile.

### Contact Link Row

Contact destinations are full-width bordered rows with a strong service name, muted explanation, and a directional affordance. The row remains plain at rest; hover emphasis is applied to the strong label rather than filling the entire row.

## Do's and Don'ts

### Do:
- **Do** use semantic Primer foreground, background, border, link, and focus roles so both shipped themes remain coherent.
- **Do** present projects like inspectable repository records: name, concise purpose, status, technology, and learning context.
- **Do** use green sparingly for identity, primary action, completion, and contribution-style progress.
- **Do** keep the profile/README relationship recognizable on wide screens and stack it cleanly on small screens.
- **Do** retain the visible statement that the personal portfolio is not affiliated with GitHub.
- **Do** preserve visible focus, semantic landmarks, reduced-motion behavior, and readable line lengths.

### Don't:
- **Don't** turn the site into a generic marketing landing page with oversized promotional chrome.
- **Don't** hard-code theme-specific body colors where a Primer semantic custom property already expresses the role.
- **Don't** scatter green across decorative surfaces or allow multiple primary actions to compete in one group.
- **Don't** add routine shadows to repository cards, README panels, sidebars, or contact rows.
- **Don't** imply that GitHub owns, endorses, or operates the portfolio.
- **Don't** compress desktop rails into narrow unreadable columns; stack them at the established breakpoint.
