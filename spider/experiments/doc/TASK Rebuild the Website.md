# TASK: Rebuild the Website's Spider-Web Animation and Create a Realistic 3D Spider

## 1. Project Overview

I want you to redesign and implement the spider-web visual system on my existing website. The current spider-web structure does not look professional or resemble a real spider web closely enough. I want a visually convincing, animated spider web with a detailed 3D spider that moves naturally across the web, climbs vertical strands, attaches itself to elements on the page, and interacts visually with the web structure.

This is an implementation task, not just a design proposal. Inspect the existing codebase, understand the current implementation, and make the necessary changes directly in the project.

### Project links

- **Live website:** https://abr-ahamis.github.io/
- **GitHub repository:** https://github.com/abr-ahamis/abr-ahamis.github.io

I will provide a reference image showing the spider-web structure I want. Treat that image as the primary visual specification.

**Important:** Study the reference image before implementing the new design. Reproduce its web geometry, shape, spacing, proportions, and visual arrangement as closely as possible. Do not substitute a generic spider-web pattern or simply place the image behind the website as a static background. The web must be rendered as an actual dynamic structure that can animate, respond to page elements, and support the spider's movement.

---

## 2. Inspect the Existing Project Before Making Changes

Before modifying any code:

1. Inspect the repository structure, README, existing application framework, dependencies, stylesheets, scripts, and current spider or web-related components.
2. Identify how the existing website renders its content, including headings, text, tickets, cards, containers, tables, and other page elements.
3. Locate the existing spider-web implementation and determine which parts should be redesigned, reused, or replaced.
4. Review the supplied reference image and map its visual characteristics to the appropriate implementation.
5. Check the current Git status and preserve any existing user changes. Do not overwrite unrelated work.
6. Choose an implementation compatible with the existing project and GitHub Pages deployment environment.

Do not create a separate, unrelated application. Implement the new spider-web system within the existing repository and preserve the website's existing content, routes, functionality, and overall identity.

Do not introduce unnecessary dependencies or rewrite unrelated components.

---

## 3. Spider-Web Geometry and Structure

The spider web is the most important part of this task. Its appearance must follow the supplied reference image closely.

### 3.1 Overall structure

Create a recognizable, interconnected spider web consisting of:

- A distinct starting or anchor point from which the web develops.
- Multiple radial strands extending outward from that point.
- Connected circular or curved rings that intersect the radial strands.
- Consistent but natural spacing between adjacent strands.
- Clearly visible gaps between the web lines.
- A balanced overall pattern that resembles a real spider web rather than random crossing lines.
- Additional strands that extend toward suitable edges of website elements where appropriate.

The pattern should reproduce the arrangement shown in the reference image, including the relative positions, proportions, curvature, density, and spacing of its strands.

Avoid excessive line density. Every strand should contribute to the overall web structure.

### 3.2 Web generation animation

The web should appear to be constructed progressively rather than being fully visible immediately.

Implement an animation that creates the web outward from its selected starting point. Radial strands should develop first or in a logically coordinated sequence, followed by the connecting circular strands, producing a convincing web-construction effect.

Requirements:

- The complete web should form in approximately **14–30 seconds**, with a default duration of around 20 seconds.
- Animate the growth of individual strands along their paths, rather than simply fading in the entire web.
- Use smooth timing and natural transitions.
- Preserve the correct geometry throughout the animation.
- Make the timing configurable so it can be adjusted later without rewriting the animation system.

The animation must remain smooth and must not freeze, block, or noticeably slow down the website.

### 3.3 Different starting points on page reload

Every full page reload should select a new starting location or anchor point for the web construction.

The new anchor should influence where the web begins and how the construction animation develops. The resulting structure must remain visually coherent and faithful to the reference image.

Requirements:

- Select a new starting point on each page load.
- Randomize the initial construction direction or starting angle where appropriate.
- Keep each generated web structurally valid, with properly connected strands.
- Avoid placing the starting point directly over important text or controls when that would harm readability.
- Do not randomly change the structure every animation frame.
- Keep the selected configuration stable during that page session.
- Handle viewport resizing and scrolling without breaking the geometry.

Randomness must affect the starting position and construction sequence, not destroy the recognizable spider-web design.

### 3.4 Web strands attached to website content

The web should appear to occupy the same visual space as the website rather than behaving like a completely separate overlay.

Some strands should naturally attach to the edges of existing page elements, such as:

- Headings and selected letters.
- Text containers and content boxes.
- Cards containing tickets or other information.
- Table borders and corners.
- Other suitable interface elements.

Use approximately three or four strategically selected accent strands or attachment points where appropriate, rather than connecting every strand to every component.

These attachments should look intentional. A strand should reach an appropriate edge or corner, connect naturally, and continue along a believable path when needed.

Some accent strands may use a darker red color or slightly greater thickness to create visual emphasis. Keep the overall design restrained and professional.

Do not allow attachment lines to cut randomly through paragraphs, obscure important information, hide buttons, or make the page difficult to navigate.

If the content changes or the window is resized, the attachment positions should update appropriately.

---

## 4. Build a Detailed, Three-Dimensional Spider Model

Do not use a flat spider icon, emoji, simple silhouette, or an image that remains rigid while moving.

Create a custom spider model with convincing three-dimensional shape, proportions, articulation, shading, and animation.

### 4.1 Body structure

The spider should have recognizable anatomical sections:

**Cephalothorax (front body):**
- A compact, rounded front body section.
- Natural three-dimensional volume and shading.
- A defined connection between the body and the legs.
- Appropriate details that make the spider recognizable from different viewing angles.

**Abdomen (rear body):**
- A distinct abdomen with a rounded, slightly elongated shape.
- Natural proportions relative to the front body.
- Subtle movement as the spider walks, climbs, or changes direction.
- Enough volume and surface detail to make it look three-dimensional.

**Eight articulated legs:**
- Exactly eight legs arranged around the front body.
- Four legs on each side, with sensible proportions and spacing.
- Visible joints and distinguishable upper and lower segments.
- Natural bending and extension as the spider moves.
- Feet that can reach, grip, release, and reposition themselves along web strands.

The legs must not behave like rigid spokes attached to the body. Their joints and movement should change continuously during locomotion.

Add subtle pedipalps and spinnerets if they improve the model without unnecessarily increasing complexity.

### 4.2 Colors and materials

Use a predominantly dark spider with carefully controlled reddish accents.

The main palette should include:

- Dark charcoal and near-black for the main body.
- Muted dark red or burgundy markings.
- Subtle variations in tone across the legs and body.
- Soft highlights that reveal the model's three-dimensional shape.
- Natural shadows and restrained surface reflections.

Do not make the entire spider pure black. Its legs, body segments, and joints must remain distinguishable against both light and dark backgrounds.

The red details should complement the spider-web strands without making the spider look cartoonish, excessively bright, or artificial.

### 4.3 Three-dimensional appearance

The spider must maintain visible depth as it moves.

Use appropriate perspective, lighting, shading, and camera positioning to distinguish the body, individual legs, and web strands.

The spider should not look like a two-dimensional image sliding across the screen. The viewer should be able to perceive the body volume, leg articulation, and the spatial relationship between the spider and the web.

---

## 5. Realistic Spider Movement and Web Interaction

The spider's movement is a core feature. Implement coordinated body and leg animation rather than moving the entire model along a path without articulating its limbs.

### 5.1 Walking on horizontal strands

When the spider travels along a horizontal strand:

- Show primarily a side or three-quarter side view of its body.
- Do not use a permanently overhead camera angle.
- Align the spider's body with the direction of travel.
- Alternate leg movements in a coordinated walking pattern.
- Lift and reposition individual feet as the spider advances.
- Make the legs visibly contact the strand where they are supporting the body.
- Add subtle movement to the body and abdomen.

The spider should appear to walk along the strand, not float above it or slide through it.

### 5.2 Climbing vertical strands

When the spider climbs upward or downward along a vertical strand:

- Adjust the spider's orientation to match the vertical path.
- Use an appropriate elevated, overhead, or three-quarter viewing angle when necessary to make the climbing movement clear.
- Preserve visible three-dimensional depth instead of flattening the model.
- Coordinate the legs so they alternately reach, grip, pull, release, and reposition.
- Keep the body balanced relative to the strand.
- Make the upward and downward movements visibly distinct from horizontal walking.

The viewing angle should help the user understand the spider's position and direction while keeping the body and legs recognizable.

### 5.3 Movement around edges and intersections

The spider must be able to navigate more than one straight line.

Support natural transitions when it:

- Reaches a junction between web strands.
- Turns onto another strand.
- Moves from a horizontal strand onto a vertical strand.
- Climbs around a suitable edge of a card or content container.
- Approaches, leaves, or crosses an attachment point.
- Changes direction or pauses briefly before continuing.

When the spider changes its direction of travel, its body and legs must adapt to the new path. Transitions should be smooth, without sudden rotations, teleportation, or unnatural snapping.

### 5.4 Foot placement and contact

Use path-aware foot placement wherever practical.

The spider's feet should appear to make contact with nearby strands during the walking cycle. Supporting legs should remain connected to the web for appropriate portions of the movement, while other legs reach toward their next positions.

Avoid obvious visual problems such as:

- Legs passing through web strands.
- Feet floating far away from the web.
- The body intersecting the page or a card.
- All eight legs moving identically at the same time.
- The spider sliding without meaningful leg movement.
- Legs stretching unnaturally during turns.

Use a lightweight approximation of real spider locomotion when a full physical simulation would be unnecessarily expensive.

---

## 6. Adaptive Camera Perspective and Orientation

The camera and the spider's orientation must work together. This is necessary to achieve the requested three-dimensional appearance.

Implement an orientation system that considers the direction of the strand, the spider's direction of travel, and the position of nearby web intersections.

Use the following visual rules:

| Spider's situation | Preferred viewing perspective |
|---|---|
| Walking on a horizontal strand | Side or three-quarter side view |
| Climbing a vertical strand | Elevated or three-quarter overhead view when it improves visibility |
| Moving around a junction | Smoothly changing three-quarter view |
| Moving along a strand beside a content box | Angle that clearly reveals the body and the relationship between its feet and the strand |
| Changing from horizontal to vertical movement | Smooth transition between the appropriate orientations |

Do not force a single camera angle onto every movement.

When the spider moves to the opposite side of a strand or changes its position relative to the viewer, its orientation should update so the legs and body continue to look spatially coherent.

Keep camera transitions controlled and subtle. Avoid sudden spinning, excessive zooming, or camera movement that makes the page uncomfortable to view.

The goal is to make the spider feel like a small three-dimensional creature moving across the actual geometry of the web.

---

## 7. Visual Integration With the Website

The spider web and spider must look like intentional parts of the existing website.

### Layering and visibility

- Keep the web strands visually distinct without overpowering the content.
- Render the spider clearly above or in front of its supporting strands where appropriate.
- Use suitable layering so neither the web nor the spider accidentally disappears behind unrelated elements.
- Preserve the readability of headings, text, tables, tickets, and cards.
- Prevent the animation layer from blocking normal clicks, scrolling, selection, or keyboard interaction.
- Keep interactive website controls usable.
- Respect the existing site's design and color palette while applying the requested spider-web theme.

The web should feel integrated with the page's layout, not like an unrelated canvas placed over it.

### Attachment behavior

If a strand attaches to a card, heading, or table edge, its endpoint should remain visually anchored to that element.

The strand must not drift away from its attachment point when the page resizes, scrolls, or content changes.

Prefer attachment calculations based on real element positions or suitable geometry instead of hardcoded pixel coordinates that only work at one screen size.

---

## 8. Technical Implementation and Performance

Inspect the existing technology stack before choosing the implementation.

Use a suitable rendering approach, such as Canvas, SVG, Three.js, or a combination of technologies, based on the actual requirements and the existing project. Use WebGL or Three.js if a proper 3D model and perspective require it, but avoid adding a large framework when the existing stack can support the feature efficiently.

The implementation must meet these requirements:

- Keep the website lightweight and responsive.
- Aim for smooth animation, ideally around 60 frames per second on capable hardware.
- Avoid unnecessary DOM elements, repeated layout calculations, and excessive per-frame allocations.
- Avoid creating a new animation loop during every component update or resize.
- Properly clean up event listeners, animation loops, and rendering resources.
- Reuse geometry and materials where practical.
- Ensure the animation can scale to different screen sizes.
- Handle browser resizing, page scrolling, and changes to content.
- Avoid creating excessive numbers of strands or objects.
- Keep the site usable on lower-powered devices and integrated graphics.
- Support reduced-motion preferences with an appropriate simplified or static presentation.
- Avoid unnecessary external image downloads and remote runtime dependencies.
- Preserve compatibility with the project's GitHub Pages build and deployment setup.

The solution should be well structured and maintainable. Separate the web geometry, spider model, animation, camera behavior, and page integration into logical components or modules where that fits the existing architecture.

Do not hardcode a large collection of disconnected animation coordinates when the movement can be derived from the web geometry.

---

## 9. Responsive Behavior and Browser Compatibility

Test the implementation at different viewport sizes.

Ensure that:

- The web scales correctly on desktop and mobile.
- The starting point stays within an appropriate visible area.
- Web lines remain connected after resizing.
- Content attachments follow their corresponding elements.
- The spider remains proportionate to the web and page content.
- The model is not clipped unexpectedly.
- Scrolling does not cause the web to detach from its intended content.
- The construction animation remains functional after a full reload.
- The website's existing navigation, links, forms, buttons, and other features continue to work.

If the existing site uses a particular positioning or scrolling model, account for it instead of assuming that every page is a single fixed viewport.

---

## 10. Implementation Workflow

Complete the task in the following order.

**Phase 1 — Audit**

Inspect the repository, current implementation, reference image, framework, and existing page layout. Identify the actual files and components responsible for the web and animation.

**Phase 2 — Design the geometry**

Translate the reference image into a connected web structure with a clear anchor, radial strands, curved connecting rings, deliberate spacing, and appropriate page-edge attachments.

**Phase 3 — Implement the web**

Build the animated web-generation system, including the approximately 14–30 second construction sequence and a new starting point on each full page reload.

**Phase 4 — Implement the spider**

Create the three-dimensional spider model with eight articulated legs, dark charcoal and burgundy coloring, realistic gait, and appropriate body proportions.

**Phase 5 — Implement movement and perspective**

Make the spider follow actual web paths, maintain contact with strands, navigate intersections, and transition smoothly between horizontal and vertical movement.

**Phase 6 — Integrate with page content**

Connect selected strands to the appropriate content elements. Check layering, text readability, scrolling, interaction, and resizing.

**Phase 7 — Test and refine**

Run the project's available build, lint, and test commands. Start the website locally if the environment supports it. Check the browser rendering and correct visible defects.

Verify the web's geometry against the supplied reference image, confirm that the spider's legs animate correctly, and check that the starting point changes after a full reload.

Do not claim that a feature is working merely because the code was written. Verify it using the available tools and report any checks that could not be performed.

---

## 11. Acceptance Criteria

Consider the task complete only when the following conditions are satisfied:

1. The old spider-web design has been replaced or substantially improved.
2. The new web closely matches the supplied reference image.
3. The web has a coherent anchor, radial spokes, connected curved rings, and appropriate spacing.
4. The web progressively forms over approximately 14–30 seconds.
5. The starting position or direction changes on each full page reload without breaking the geometry.
6. Selected strands can naturally attach to headings, content containers, cards, tickets, and table edges.
7. The spider is a recognizable, three-dimensional model with exactly eight articulated legs.
8. The model uses mostly dark charcoal and black, with restrained reddish accents and enough shading to reveal its shape.
9. The spider walks convincingly on horizontal strands and climbs vertical strands.
10. Its legs, body, and feet respond to the direction and position of the web path.
11. The viewing perspective adapts smoothly between horizontal and vertical movement.
12. The spider can navigate strand junctions without sudden or unnatural movement.
13. Web lines do not significantly obstruct text or interfere with normal website interactions.
14. Performance remains acceptable on ordinary hardware, including systems with integrated graphics.
15. The existing website's functionality and GitHub Pages compatibility are preserved.
16. The implementation builds successfully, or any pre-existing or newly encountered build failures are clearly documented.

---

## 12. Final Report

After completing the implementation, provide a concise but informative report containing:

- **Files changed:** Each modified or created file and its purpose.
- **Web implementation:** How the geometry, line spacing, construction animation, and random starting location work.
- **Spider model:** How the body, eight legs, colors, shading, and 3D appearance were implemented.
- **Movement system:** How walking, climbing, foot placement, junction navigation, and adaptive perspective work.
- **Performance:** Any optimizations and reduced-motion behavior.
- **Verification:** Which build commands, tests, reload checks, and visual checks were actually completed, including their results.
- **Known limitations:** Any behavior that could not be fully implemented or verified.

Do not stop after proposing a plan or creating a mockup. Implement the actual functionality in the existing project, verify as much as the environment allows, and explain any remaining limitations honestly.

### Final instruction

**Prioritize fidelity to the supplied reference image, believable three-dimensional spider movement, clean integration with the existing website, and maintainable code.** The finished result should feel like a professionally designed interactive spider web with a real three-dimensional spider moving across it, not a decorative background with a flat animated icon.## 13. Spider Behavior, Scrolling, and Interactive Mouse Hunting

Implement an additional interactive behavior system that makes the spider feel like a living creature inhabiting the website. The spider must not simply walk randomly across the web. It should react to the user's scrolling, mouse movement, and interaction with individual web strands.

### 13.1 Web Construction Time and Completion Behavior

The complete spider-web construction animation must finish within **30 seconds under normal conditions**, with an absolute maximum target of **40 seconds**.

Requirements:
- Aim for a construction duration of approximately 20–30 seconds.
- Do not let the animation continue indefinitely.
- Ensure the radial strands and connecting rings finish forming before the spider enters its idle state.
- Once construction is complete, transition naturally into the spider's normal behavior.
- The spider should travel to a suitable ticket, content card, or nearby thick web strand and settle into a natural resting position.
- Prefer a prominent, thicker strand or a suitable edge or corner of a ticket or card as its resting location.
- The spider must remain attached to the actual web geometry or resting surface rather than floating in space.
- Use a smooth transition from construction to movement and then to resting. Do not abruptly teleport the spider to its destination.

The spider should remain animated even while resting, with subtle leg adjustments, occasional body movement, and small exploratory movements that make it feel alive without distracting the user.

If the web finishes constructing while the spider is already interacting with the mouse, finish the construction correctly and then transition into the appropriate interaction or resting state.

### 13.2 Dynamic Behavior During Page Scrolling

The spider must respond naturally when the user scrolls either up or down the page.

Requirements:
- Maintain correct alignment between the spider, its web strands, and the corresponding page content while scrolling.
- Allow the spider to walk or climb along connected strands to reach suitable positions near the currently visible content.
- When the user scrolls to another section, the spider should be able to move toward an appropriate visible web strand, ticket, or content card.
- If its current position moves outside the viewport, allow it to follow a connected path back into view when appropriate.
- Use smooth movement and realistic leg animation during these transitions.
- Preserve the existing web geometry and attachment points as the page moves.
- Recalculate attachment positions when necessary, especially after scrolling, resizing, or content changes.

**Important:** The spider must not teleport to the user's screen, remain incorrectly fixed to the viewport, or become detached from the web. Its movement should be consistent with the page's coordinate system and actual web connections.

If the current strand does not provide a natural route to the visible section, the spider may remain where it is until an appropriate route or transition is available. Do not invent impossible paths through disconnected strands.

### 13.3 Mouse Detection and Web-Strand Interaction

Implement an interaction system that allows the spider to notice the mouse when it approaches or touches a spider-web strand.

The system must identify when the cursor comes close to an individual web strand, crosses it, or moves along it.

Use a configurable interaction threshold so the spider can detect nearby cursor activity without requiring the user to hit a single pixel precisely.

When the cursor interacts with a strand:

1. Identify the specific strand being touched or approached.
2. Determine the cursor's position relative to the strand.
3. Notify the spider's behavior controller that a possible interaction has occurred.
4. Let the spider decide whether to investigate, approach, follow, or attempt to catch the cursor.
5. Animate the spider's body, orientation, legs, and movement accordingly.

The spider should interact with the actual web geometry rather than following arbitrary screen coordinates without regard to the strand structure.

### 13.4 Investigate and Follow the Mouse

When the mouse touches or approaches one of the web strands, the spider should react as though it has sensed movement on its web.

Implement the following behavior:

- The spider notices the disturbance and briefly pauses its current activity.
- It turns its body toward the relevant strand or cursor location.
- It may raise, extend, or reposition its front legs as if sensing vibrations.
- It travels along the connected web strands toward the disturbance.
- It follows the selected strand toward the cursor when a valid path exists.
- It can pause at a nearby junction and change direction when the cursor moves onto another connected strand.
- It may briefly inspect the point where the cursor touched the web before continuing.

When the cursor moves from one strand to another, the spider should reassess its target rather than continuing indefinitely toward an outdated position.

If the cursor leaves the web, the spider may investigate the nearest strand endpoint, pause briefly, or return to its previous resting position.

Avoid constant chasing. The spider should exhibit believable curiosity, occasional hesitation, and controlled movement instead of immediately reacting to every tiny cursor movement.

### 13.5 Hunting and Attempting to Catch the Mouse Pointer

Add a playful hunting behavior that makes the spider appear to regard the cursor as a moving target.

When the cursor travels along or near a strand, the spider may enter a hunting state.

During this state, the spider should:

- Orient its head and front body toward the cursor.
- Lower or adjust its body into a convincing stalking posture.
- Move its legs in a coordinated way as it approaches the target.
- Follow a suitable route along the web.
- Track changes in the cursor's position.
- Occasionally pause, observe, and make a short, quick approach toward the cursor.
- Extend its front legs in an apparent attempt to touch or catch the pointer.
- Perform a brief pouncing or grabbing motion when the cursor is within an appropriate interaction distance.
- Return to a searching or idle state if the cursor escapes.

The hunting animation must include meaningful leg movement. Do not simply move the whole spider rapidly toward the cursor while leaving the legs rigid.

The behavior should resemble a spider investigating and attempting to catch a small moving target, not a cartoon character continuously attacking the user.

**Pointer interaction constraint:** The spider must never block normal mouse usage. It must not intercept clicks, move the real cursor, disable controls, or prevent the user from selecting text or interacting with the website. All hunting and catching behavior must be visual and simulated.

### 13.6 Realistic Leg Animation During Interactions

Every interaction must use the same articulated 3D spider model and locomotion system established in the main implementation.

Implement appropriate animation states for:

- Idle resting.
- Detecting a disturbance.
- Turning toward the cursor.
- Walking toward a target.
- Climbing a strand.
- Investigating a strand.
- Stalking the cursor.
- Extending the front legs.
- Attempting a catch.
- Recovering after a failed catch.
- Returning to the resting position.

Each state must coordinate the spider's body, abdomen, joints, and eight legs.

The legs should not repeat one identical animation regardless of the spider's movement. The animation must respond to the direction of travel, the current strand orientation, the body's position, and whether individual feet are supporting the spider or reaching for a new position.

When the spider is attached to a web strand, maintain believable contact between its supporting feet and the web whenever practical.

### 13.7 Behavior Priorities and State Management

Implement a clear behavior-state system to prevent conflicting animations.

Use sensible priorities:

1. **Web construction:** Complete the web before entering normal idle behavior, while still allowing necessary rendering and interaction handling.
2. **Active hunting:** When a meaningful cursor interaction triggers hunting, prioritize the approach and catch sequence.
3. **Investigation:** When the cursor disturbs a strand without triggering hunting, allow the spider to investigate.
4. **Navigation:** Allow the spider to move between connected strands and suitable page elements.
5. **Resting:** When no meaningful interaction is occurring, return to a suitable resting position.
6. **Idle animation:** Use subtle movement when the spider has nothing else to do.

These states must transition smoothly. A new cursor target may update an active investigation, but it should not restart the entire animation system or create overlapping movement loops.

Avoid repeatedly interrupting the spider for tiny cursor movements. Use sensible detection thresholds, brief cooldowns, and stable target selection.

If the user moves the cursor away or stops interacting, the spider should eventually end its hunting behavior and return to a natural idle state or its designated resting position.

### 13.8 Performance and Interaction Reliability

The new behavior must remain lightweight and responsive.

- Use efficient cursor-position tracking.
- Avoid running expensive calculations unnecessarily on every mouse event.
- Use the existing animation loop where possible.
- Keep the spider's movement connected to the web's actual path geometry.
- Ensure scrolling does not introduce coordinate errors.
- Clean up event listeners and animation resources appropriately.
- Provide a reduced-motion alternative that minimizes sudden approaches and rapid movement.
- Preserve all existing website interactions and responsive behavior.

### 13.9 Acceptance Tests

Verify the following behaviors in the actual browser:

1. The web finishes constructing within 30 seconds under normal conditions and never exceeds the 40-second target in the intended implementation.
2. After construction, the spider settles naturally on an appropriate thick web strand or ticket/card edge.
3. Scrolling up and down preserves correct web alignment and allows the spider to travel into view where a valid route exists.
4. Moving the cursor across a web strand causes the spider to notice and investigate it.
5. Moving the cursor along connected strands causes the spider to follow a valid route toward it.
6. Rapid cursor changes do not cause teleportation, broken leg animation, or uncontrolled movement.
7. When hunting is triggered, the spider performs coordinated stalking, leg extension, and attempted catching animations.
8. When the cursor escapes, the spider eventually stops hunting and returns to a suitable resting or exploratory state.
9. The spider never blocks clicks, scrolling, text selection, or other normal website interactions.
10. All interactions work at different viewport sizes without detaching the spider from the web.

### Final Requirement

The finished result must behave like a living, interactive spider inhabiting a real web: it completes constructing the web, settles on a suitable strand or ticket, responds to scrolling, detects disturbances caused by the mouse, follows connected strands to investigate them, and occasionally attempts to catch the moving pointer through believable three-dimensional movement.

Implement and test these behaviors in the existing project. Do not replace the behavior with a simple cursor-following animation or a decorative spider image.
