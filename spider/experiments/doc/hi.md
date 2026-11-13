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

Implement and test these behaviors in the existing project. Do not replace the behavior with a simple cursor-following animation or a decorative spider image.Proceed with the implementation immediately. I have provided the requirements in TASK Rebuild the Website.md and the visual reference images. You do not need to ask me for permission to begin or provide another summary of the requirements.
1. Inspect the existing project first. Review the repository, source code, dependencies, page layout, and reference images. Check the current Git status and preserve existing user changes.
2. Start implementing the actual functionality. Follow your proposed phases, from auditing the codebase to implementing the web geometry, 3D spider, articulated legs, locomotion, adaptive camera perspective, mouse interactions, scrolling behavior, and final verification.
3. Match the reference images. Treat the supplied images as the primary visual specification. Do not substitute a generic web design or a flat spider icon.
4. Make the spider fully interactive. Implement the complete web-construction animation within the specified time limit, the resting behavior, natural movement along connected strands, scroll-aware positioning, mouse detection, investigation, stalking, and attempted catching animations.
5. Use the correct technical approach. Choose an implementation compatible with the existing codebase and GitHub Pages. Keep the code modular, maintainable, and optimized for reasonable performance, including on my laptop's integrated graphics.
6. Work directly in the existing repository. Modify and create the necessary source files instead of producing another plan, a mockup, or isolated demonstration. Preserve the existing website's content and functionality, and avoid unrelated changes.
7. Test the implementation. Run the available build, lint, and test commands. Use browser-based visual testing if available. Check the actual rendering, spider movement, web attachments, scrolling, mouse interactions, responsive layout, and console errors. Fix issues you discover rather than merely listing them.
8. Continue until the implementation is complete. Do not stop after finishing one phase to ask whether you should continue. Make reasonable engineering decisions independently and complete as much of the task as your environment permits.
9. Report the real results. At the end, list the files changed, features implemented, tests performed, test results, and any remaining limitations. Do not claim that a feature works unless you have verified it.
If you encounter a genuine blocker, explain exactly what is preventing progress and continue with the parts that can be completed. Do not claim that changes were made to the remote GitHub repository unless you have actually modified it and verified the result.

Your task now is to execute the implementation, not to explain how you would implement it. Start by inspecting the repository and then proceed through the phases until the working result is ready for review.

<!DOCTYPE html>
<!-- Reference mapping from the supplied i/readme.md:
     hi1.png = overhead body proportions/pattern; hi2.jpeg = front face, eyes and hair;
     hi3.png = side silhouette and articulated leg profile. -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spider Asset Review — Reference-Based 3D Model</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Three.js & OrbitControls -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@300;400;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #090a0f;
            color: #e2e8f0;
            user-select: none;
            overflow: hidden;
        }

        .code-font {
            font-family: 'JetBrains Mono', monospace;
        }

        /* Custom Scrollbars */
        ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }
        ::-webkit-scrollbar-track {
            background: #0f1117;
        }
        ::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 2px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #e65100;
        }

        /* Glassmorphism Panel */
        .hud-panel {
            background: rgba(13, 16, 23, 0.85);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }

        .hud-border {
            border-color: rgba(255, 255, 255, 0.1);
        }

        /* Interactive Dial */
        .dial-container {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 2px solid #e65100;
            position: relative;
            background: radial-gradient(circle, rgba(230,81,0,0.15) 0%, rgba(15,23,42,0.6) 70%);
            cursor: grab;
        }
        .dial-container:active {
            cursor: grabbing;
        }
        .dial-hand {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 2px;
            background: #ff7d00;
            transform-origin: 0% 50%;
            box-shadow: 0 0 8px #ff7d00;
        }

        #canvas-container { min-height: 0; flex: 1 1 auto; overflow: hidden; }
        #canvas-container > canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
        #macro-canvas-container { min-height: 0; flex: 1 1 auto; }
        #macro-canvas-container canvas { display: block; width: 100%; height: 100%; }
        .dial-container.is-dragging { cursor: grabbing; }
        input[type="range"] { accent-color: #f97316; }
        button:focus-visible, input:focus-visible { outline: 2px solid #fb923c; outline-offset: 2px; }
        @media (max-width: 900px) {
            header { padding-left: 0.85rem !important; padding-right: 0.85rem !important; }
            header > div:last-child { gap: 0.65rem !important; }
            header > div:last-child > div:nth-child(3) { display: none; }
            #canvas-container > div:nth-of-type(1) { width: 15rem !important; height: 15rem !important; top: 0.75rem !important; right: 0.75rem !important; }
            #macro-canvas-container { width: auto !important; height: auto !important; right: auto !important; top: auto !important; }
        }
        @media (max-width: 680px) {
            body { overflow: auto; }
            #canvas-container { min-height: 760px; }
            header { align-items: flex-start !important; gap: 0.5rem; flex-direction: column; }
            header > div:first-child { flex-wrap: wrap; }
            header > div:last-child { width: 100%; justify-content: space-between; }
            #canvas-container > div:nth-of-type(1) { width: 10.75rem !important; height: 10.75rem !important; top: 0.75rem !important; right: 0.75rem !important; }
            #macro-canvas-container { width: auto !important; height: auto !important; right: auto !important; top: auto !important; }
            #canvas-container > div:nth-of-type(1) > div:first-child { font-size: 8px !important; }
            #canvas-container > div:nth-of-type(1) > div:last-child { font-size: 8px !important; }
            #canvas-container > div:nth-of-type(2) { top: 0.75rem !important; left: 0.75rem !important; width: 10.75rem !important; }
            #canvas-container > div:nth-of-type(3) { width: 17rem !important; left: 0.75rem !important; bottom: 7.75rem !important; }
            #canvas-container > div:nth-of-type(4) { left: 50% !important; bottom: 0.75rem !important; transform: translateX(-50%) !important; padding: 0.65rem 0.75rem !important; gap: 0.55rem !important; width: max-content; max-width: calc(100% - 1.5rem); }
            #canvas-container > div:nth-of-type(4) #angle-dial { width: 52px; height: 52px; flex-shrink: 0; }
            #canvas-container > div:nth-of-type(4) #btn-reset-cam { font-size: 10px; padding: 0.35rem 0.45rem; }
        }

        input[type="color"] {
            width: 30px;
            height: 21px;
            padding: 1px;
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 5px;
            background: #11151d;
            cursor: pointer;
            flex-shrink: 0;
        }
        #reset-colors:hover { border-color: rgba(251,146,60,.55); }
    </style>
</head>
<body class="w-screen h-screen flex flex-col relative">

    <!-- TOP HEADER / TITLE BAR -->
    <header class="hud-panel z-20 px-6 py-3 flex items-center justify-between border-b hud-border">
        <div class="flex items-center space-x-3">
            <div class="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
            <span class="text-xs font-bold tracking-widest text-orange-500 uppercase code-font">Reference Spider Asset Review</span>
            <span class="text-slate-600">|</span>
            <h1 class="text-sm font-semibold tracking-wide text-slate-100 uppercase">
                Reference-Based Spider <span class="text-xs text-slate-400 normal-case font-normal">(custom procedural model)</span>
            </h1>
        </div>
        
        <div class="flex items-center space-x-6 text-xs code-font text-slate-400">
            <div>STATUS: <span class="text-emerald-400">REFERENCE MODEL · PREVIEW</span></div>
            <div>FPS: <span id="fps-counter" class="text-orange-400">60</span></div>
            <div>RENDER ENGINE: <span class="text-slate-200">Three.js WebGL/PBR</span></div>
        </div>
    </header>

    <!-- MAIN 3D CANVAS VIEWPORT CONTAINER -->
    <div id="canvas-container" class="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <!-- 3D Canvas inserted dynamically -->

        <!-- OCULAR CLUSTER INSET MACRO VIEW (TOP RIGHT) -->
        <div class="absolute top-4 right-4 z-10 w-64 h-64 hud-panel rounded-xl overflow-hidden border border-orange-500/30 flex flex-col shadow-2xl">
            <div class="px-3 py-1.5 bg-slate-900/90 text-slate-300 text-[11px] font-bold code-font flex justify-between items-center border-b border-white/10">
                <span><i class="fa-solid fa-eye text-orange-400 mr-1.5"></i>FRONT FACE · 8 EYES</span>
                <span class="text-[9px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/30">MACRO 4.5X</span>
            </div>
            <div id="macro-canvas-container" class="w-full relative bg-slate-950">
                <!-- Secondary Canvas overlay for eyes -->
            </div>
            <div class="px-2 py-1 bg-slate-900/80 text-[10px] code-font text-slate-400 flex justify-between border-t border-white/5">
                <span>8 ocular points</span>
                <span>dark glossy eyes</span>
            </div>
        </div>

        <!-- MATERIAL PALETTE + MODEL VISIBILITY -->
        <div class="absolute top-4 left-4 z-10 hud-panel p-3 rounded-xl flex flex-col space-y-2 border border-white/10 w-52">
            <span class="text-[10px] font-bold code-font text-slate-400 px-1 pt-1 uppercase tracking-wider">Surface Palette</span>
            <div class="space-y-2">
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="body-color">
                    <span>Abdomen base</span><input id="body-color" type="color" value="#292b25" aria-label="Abdomen base color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="shell-color">
                    <span>Head / shell</span><input id="shell-color" type="color" value="#474038" aria-label="Head and shell color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="legs-color">
                    <span>Legs</span><input id="legs-color" type="color" value="#17191a" aria-label="Leg color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="marking-color">
                    <span>Gold markings</span><input id="marking-color" type="color" value="#a79b52" aria-label="Gold marking color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="stripe-color">
                    <span>Blue-gray bands</span><input id="stripe-color" type="color" value="#58656b" aria-label="Blue gray stripe color">
                </label>
                <label class="flex items-center justify-between gap-2 text-[11px] text-slate-300" for="hair-color">
                    <span>Hair / setae</span><input id="hair-color" type="color" value="#39332a" aria-label="Hair color">
                </label>
            </div>
            <button id="reset-colors" class="mt-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 border border-white/5 text-[10px] text-slate-300 text-left">
                <i class="fa-solid fa-rotate-left text-orange-400 mr-1.5"></i>Reset surface colors
            </button>

            <hr class="border-white/10 my-1">
            <div class="px-1 py-1 space-y-2">
                <div class="flex items-center justify-between text-xs text-slate-300">
                    <span class="text-[11px]"><i class="fa-solid fa-vector-square text-cyan-400 mr-1.5"></i>Wireframe</span>
                    <input type="checkbox" id="wireframe-toggle" class="accent-orange-500 cursor-pointer">
                </div>
                <div class="flex items-center justify-between text-xs text-slate-300">
                    <span class="text-[11px]"><i class="fa-solid fa-spider text-orange-400 mr-1.5"></i>Body hairs</span>
                    <input type="checkbox" id="fur-toggle" checked class="accent-orange-500 cursor-pointer">
                </div>
            </div>

            <hr class="border-white/10 my-1">
            <div class="px-1 py-1 space-y-2">
                <span class="text-[10px] font-bold code-font text-slate-400 uppercase tracking-wider">Studio Light Rig</span>
                <label class="flex justify-between items-center text-[10px] text-slate-300" for="key-light-control">Key light <span id="key-light-value" class="code-font text-orange-300">2.0</span></label>
                <input id="key-light-control" type="range" min="0.3" max="3.5" step="0.1" value="2.0" class="w-full h-1 bg-slate-700 rounded-lg cursor-pointer" aria-label="Key light intensity">
                <label class="flex justify-between items-center text-[10px] text-slate-300" for="fill-light-control">Warm fill <span id="fill-light-value" class="code-font text-orange-300">0.9</span></label>
                <input id="fill-light-control" type="range" min="0" max="2.5" step="0.1" value="0.9" class="w-full h-1 bg-slate-700 rounded-lg cursor-pointer" aria-label="Warm fill light intensity">
                <label class="flex justify-between items-center text-[10px] text-slate-300" for="rim-light-control">Cool rim <span id="rim-light-value" class="code-font text-orange-300">1.2</span></label>
                <input id="rim-light-control" type="range" min="0" max="2.5" step="0.1" value="1.2" class="w-full h-1 bg-slate-700 rounded-lg cursor-pointer" aria-label="Cool rim light intensity">
            </div>
        </div>

        <!-- LEFT SIDEBAR: TECHNICAL ASSET SPECS -->
        <div class="absolute bottom-6 left-4 z-10 hud-panel p-4 rounded-xl border border-white/10 w-72 space-y-3">
            <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-xs font-bold text-orange-400 code-font uppercase tracking-wider"><i class="fa-solid fa-circle-info mr-1.5"></i>Asset Specifications</span>
                <span class="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">LOD 0</span>
            </div>
            <div class="space-y-1.5 text-xs code-font">
                <div class="flex justify-between text-slate-400"><span>Target Poly Budget:</span><span class="text-slate-100 font-bold">165k Tris</span></div>
                <div class="flex justify-between text-slate-400"><span>Setae Instances:</span><span id="setae-count" class="text-orange-400 font-bold">14,800</span></div>
                <div class="flex justify-between text-slate-400"><span>Texture Target:</span><span class="text-slate-100 font-bold">4K PBR</span></div>
                <div class="flex justify-between text-slate-400"><span>Anatomy:</span><span class="text-slate-100 font-bold">8 Legs + 2 Palps</span></div>
                <div class="flex justify-between text-slate-400"><span>Surface System:</span><span class="text-emerald-400 font-bold">Dark shell + markings</span></div>
            </div>

            <!-- ANATOMY HIGHLIGHTS SELECTOR -->
            <div class="pt-2 border-t border-white/10 space-y-2">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Focus Hotspots</span>
                <div class="grid grid-cols-2 gap-1.5 text-xs">
                    <button id="cam-focus-carapace" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Carapace</button>
                    <button id="cam-focus-chelicerae" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Face / Eyes</button>
                    <button id="cam-focus-patella" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Leg Bands</button>
                    <button id="cam-focus-abdomen" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[11px] transition text-left border border-white/5"><i class="fa-solid fa-crosshairs text-orange-500 mr-1"></i>Abdomen / Back</button>
                </div>
                <div class="pt-2 border-t border-white/10 space-y-1.5">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Camera Presets</span>
                    <div class="grid grid-cols-3 gap-1.5">
                        <button id="cam-preset-front" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[10px] transition border border-white/5">Front</button>
                        <button id="cam-preset-side" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[10px] transition border border-white/5">Side</button>
                        <button id="cam-preset-top" class="px-2 py-1 bg-slate-800/80 hover:bg-slate-700 rounded text-slate-300 text-[10px] transition border border-white/5">Top</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- BOTTOM CENTER: TURNTABLE CONTROLS & ANGLE DIAL -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hud-panel px-6 py-3 rounded-2xl border border-white/10 flex items-center space-x-6 shadow-2xl">
            <!-- Turntable Play/Pause -->
            <button id="btn-turntable-toggle" class="w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-900/40 transition">
                <i class="fa-solid fa-pause text-sm" id="turntable-icon"></i>
            </button>

            <!-- Angle Dial -->
            <div class="flex items-center space-x-3">
                <div id="angle-dial" class="dial-container flex items-center justify-center" role="slider" aria-label="Turntable angle dial" tabindex="0">
                    <div id="dial-hand" class="dial-hand"></div>
                    <span class="text-[10px] font-bold code-font text-orange-400 z-10 pointer-events-none" id="angle-display">0°</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-slate-200 uppercase tracking-wider">Turntable Rig</span>
                    <span class="text-[10px] code-font text-slate-400">Speed: <span id="turntable-speed-label" class="text-slate-200">1.0x</span></span>
                    <input type="range" id="turntable-speed" min="0" max="3" step="0.2" value="1" class="w-24 accent-orange-500 mt-1 h-1 bg-slate-700 rounded-lg cursor-pointer">
                </div>
            </div>

            <div class="h-8 w-px bg-white/10"></div>

            <!-- Reset Camera -->
            <button id="btn-reset-cam" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold border border-white/5 transition flex items-center">
                <i class="fa-solid fa-arrows-rotate mr-1.5 text-orange-400"></i>Reset View
            </button>
        </div>
    </div>

    <!-- THREE.JS APPLICATION CODE -->
    <script>
// Three.js CG creature asset-review preview — procedural, single-file scene.
(() => {
    'use strict';

    let scene, camera, renderer, controls;
    let macroScene, macroCamera, macroRenderer;
    let spiderGroup, abdomenMesh, eyeClusterGroup;
    let keyLight, fillLight, rimLight;
    let isTurntableActive = true;
    let turntableSpeed = 0.32;
    let wireframeEnabled = false;
    let furVisible = true;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTime = 0;
    let setaeInstanceCount = 0;
    let baseMaterials = [];
    const clock = new THREE.Clock();

    // Colors are deliberately charcoal/black first, with restrained markings sampled
    // from the reference views: muted olive-gold abdomen bars, slate-blue bands,
    // warm brown facial hairs, and glossy nearly-black eyes.
    const PALETTE = {
        abdomen: 0x292b25,
        abdomenBandGold: 0xa79b52,
        abdomenBandBlue: 0x58656b,
        abdomenBandEdge: 0x171b1a,
        carapace: 0x474038,
        face: 0x494034,
        leg: 0x17191a,
        joint: 0x2d2c28,
        legBandGold: 0xd2a83f,
        legBandWarm: 0xb77829,
        fang: 0x08090a,
        eyes: 0x030405,
        setaeDark: 0x211f1a,
        setaeBrown: 0x594a38,
        setaeGold: 0x8e7741
    };

    let materialsList = {};
    let textures = {};
    const UP = new THREE.Vector3(0, 1, 0);

    window.addEventListener('load', init);

    function init() {
        const mainContainer = document.getElementById('canvas-container');
        const macroContainer = document.getElementById('macro-canvas-container');
        if (!window.THREE || !THREE.OrbitControls) {
            showFatal('Three.js or OrbitControls failed to load. Check your internet connection and reload this page.');
            return;
        }

        try {
            initMainScene(mainContainer);
            initMacroScene(macroContainer);
            textures = generateTextures();
            createMaterials();
            createReferenceSpiderModel();
            rememberBaseMaterials();
            setupUIHandlers();
            updateWireframe();
            updateSetaeReadout();
            animate();
        } catch (error) {
            console.error('Asset preview initialization failed:', error);
            showFatal('The 3D preview could not start. Open the browser console for the error details.');
        }
    }

    function showFatal(message) {
        const warning = document.createElement('div');
        warning.className = 'absolute inset-x-4 bottom-4 z-50 rounded-lg border border-red-500/40 bg-slate-950/95 p-4 text-sm text-red-200';
        warning.textContent = message;
        document.getElementById('canvas-container')?.appendChild(warning);
    }

    function initMainScene(container) {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x090a0f);
        scene.fog = new THREE.FogExp2(0x090a0f, 0.022);

        camera = new THREE.PerspectiveCamera(42, container.clientWidth / Math.max(container.clientHeight, 1), 0.1, 100);
        camera.position.set(5.2, 4.0, 7.3);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.12;
        renderer.domElement.setAttribute('aria-label', 'Interactive 3D dark spider model based on three reference views');
        container.prepend(renderer.domElement);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.055;
        controls.minDistance = 3;
        controls.maxDistance = 19;
        controls.maxPolarAngle = Math.PI * 0.495;
        controls.target.set(0, 0.48, -0.02);
        controls.update();

        scene.add(new THREE.HemisphereLight(0xabb8d1, 0x17100c, 1.15));
        scene.add(new THREE.AmbientLight(0xffffff, 0.26));

        keyLight = new THREE.DirectionalLight(0xffe4c4, 2.0);
        keyLight.position.set(4.5, 8, 6);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(2048, 2048);
        keyLight.shadow.camera.near = 0.5;
        keyLight.shadow.camera.far = 25;
        keyLight.shadow.camera.left = -7;
        keyLight.shadow.camera.right = 7;
        keyLight.shadow.camera.top = 7;
        keyLight.shadow.camera.bottom = -7;
        keyLight.shadow.bias = -0.00018;
        scene.add(keyLight);

        fillLight = new THREE.DirectionalLight(0xff6a27, 0.9);
        fillLight.position.set(-6, 3.4, 2.8);
        scene.add(fillLight);

        rimLight = new THREE.DirectionalLight(0x638cff, 1.15);
        rimLight.position.set(-1.5, 5.5, -6);
        scene.add(rimLight);

        const grid = new THREE.GridHelper(18, 36, 0x873d1c, 0x202a39);
        grid.position.y = -0.155;
        scene.add(grid);

        const stage = new THREE.Mesh(
            new THREE.CylinderGeometry(3.8, 4.0, 0.18, 96),
            new THREE.MeshStandardMaterial({ color: 0x10151d, roughness: 0.72, metalness: 0.18 })
        );
        stage.position.y = -0.085;
        stage.receiveShadow = true;
        stage.castShadow = true;
        scene.add(stage);

        const stageRing = new THREE.Mesh(
            new THREE.TorusGeometry(3.68, 0.012, 8, 128),
            new THREE.MeshBasicMaterial({ color: 0x7f3a1c })
        );
        stageRing.rotation.x = Math.PI / 2;
        stageRing.position.y = 0.009;
        scene.add(stageRing);

        window.addEventListener('resize', onWindowResize);
        renderer.domElement.addEventListener('webglcontextlost', event => {
            event.preventDefault();
            showFatal('The WebGL context was lost. Try reloading the page or lowering browser GPU load.');
        });
    }

    function initMacroScene(container) {
        macroScene = new THREE.Scene();
        macroScene.background = new THREE.Color(0x07090e);
        macroCamera = new THREE.PerspectiveCamera(27, container.clientWidth / Math.max(container.clientHeight, 1), 0.01, 10);
        macroCamera.position.set(0, 0.018, 1.12);
        macroCamera.lookAt(0, 0.015, 0.03);

        macroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
        macroRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        macroRenderer.setSize(container.clientWidth, container.clientHeight);
        macroRenderer.outputEncoding = THREE.sRGBEncoding;
        macroRenderer.toneMapping = THREE.ACESFilmicToneMapping;
        macroRenderer.toneMappingExposure = 1.25;
        container.appendChild(macroRenderer.domElement);
        macroScene.add(new THREE.HemisphereLight(0xc8d6f3, 0x1b0e08, 1.55));
        const macroKey = new THREE.PointLight(0xffffff, 2.7, 5);
        macroKey.position.set(0.4, 0.55, 1.7);
        macroScene.add(macroKey);
        const macroWarm = new THREE.PointLight(0xff6c2d, 1.25, 4);
        macroWarm.position.set(-0.8, -0.2, 0.9);
        macroScene.add(macroWarm);
    }


function generateTextures() {
    // A pale, lightly mottled map lets the user tint the shell without tinting
    // away the fine surface noise.
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#d2d0c4';
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 10500; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const r = 0.35 + Math.random() * 2.2;
        const dark = Math.random() > 0.34;
        ctx.fillStyle = dark
            ? `rgba(23,22,19,${0.025 + Math.random() * 0.085})`
            : `rgba(255,247,215,${0.025 + Math.random() * 0.07})`;
        ctx.beginPath();
        ctx.ellipse(x, y, r * (0.8 + Math.random() * 1.8), r, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }
    const abdomenMap = new THREE.CanvasTexture(canvas);
    abdomenMap.encoding = THREE.sRGBEncoding;
    abdomenMap.wrapS = abdomenMap.wrapT = THREE.RepeatWrapping;
    abdomenMap.repeat.set(1.25, 1.25);

    const normalCanvas = document.createElement('canvas');
    normalCanvas.width = normalCanvas.height = 512;
    const nctx = normalCanvas.getContext('2d');
    nctx.fillStyle = 'rgb(128,128,255)';
    nctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 7200; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const r = 0.35 + Math.random() * 1.8;
        const shift = Math.random() > 0.5 ? 17 : -17;
        nctx.fillStyle = `rgb(${Math.max(0, Math.min(255, 128 + shift))},${Math.max(0, Math.min(255, 128 - shift / 2))},255)`;
        nctx.beginPath();
        nctx.arc(x, y, r, 0, Math.PI * 2);
        nctx.fill();
    }
    const bumpNormalMap = new THREE.CanvasTexture(normalCanvas);
    bumpNormalMap.wrapS = bumpNormalMap.wrapT = THREE.RepeatWrapping;
    bumpNormalMap.repeat.set(3, 3);
    return { abdomenMap, bumpNormalMap };
}


function createMaterials() {
    materialsList.abdomen = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomen, map: textures.abdomenMap, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.38, 0.38), roughness: 0.9, metalness: 0
    });
    materialsList.abdomenBandGold = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomenBandGold, roughness: 0.82, metalness: 0.01, side: THREE.DoubleSide
    });
    materialsList.abdomenBandBlue = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomenBandBlue, roughness: 0.84, metalness: 0.01, side: THREE.DoubleSide
    });
    materialsList.abdomenBandEdge = new THREE.MeshStandardMaterial({
        color: PALETTE.abdomenBandEdge, roughness: 0.9, side: THREE.DoubleSide
    });
    materialsList.carapace = new THREE.MeshStandardMaterial({
        color: PALETTE.carapace, map: textures.abdomenMap, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.27, 0.27), roughness: 0.76, metalness: 0
    });
    materialsList.face = new THREE.MeshStandardMaterial({
        color: PALETTE.face, map: textures.abdomenMap, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.44, 0.44), roughness: 0.94, metalness: 0
    });
    materialsList.legDark = new THREE.MeshStandardMaterial({
        color: PALETTE.leg, normalMap: textures.bumpNormalMap,
        normalScale: new THREE.Vector2(0.18, 0.18), roughness: 0.78, metalness: 0.015
    });
    materialsList.joint = new THREE.MeshStandardMaterial({
        color: PALETTE.joint, roughness: 0.86, metalness: 0
    });
    materialsList.legBandGold = new THREE.MeshStandardMaterial({
        color: PALETTE.legBandGold, roughness: 0.7, metalness: 0
    });
    materialsList.legBandWarm = new THREE.MeshStandardMaterial({
        color: PALETTE.legBandWarm, roughness: 0.76, metalness: 0
    });
    materialsList.eyes = new THREE.MeshPhysicalMaterial({
        color: PALETTE.eyes, roughness: 0.055, metalness: 0.1, clearcoat: 1,
        clearcoatRoughness: 0.025
    });
    materialsList.fang = new THREE.MeshStandardMaterial({
        color: PALETTE.fang, roughness: 0.24, metalness: 0.035
    });
    materialsList.setaeDark = new THREE.MeshStandardMaterial({
        color: PALETTE.setaeDark, roughness: 0.92, metalness: 0
    });
    materialsList.setaeBrown = new THREE.MeshStandardMaterial({
        color: PALETTE.setaeBrown, roughness: 0.9, metalness: 0
    });
    materialsList.setaeGold = new THREE.MeshStandardMaterial({
        color: PALETTE.setaeGold, roughness: 0.9, metalness: 0
    });
}


function createReferenceSpiderModel() {
    spiderGroup = new THREE.Group();
    spiderGroup.name = 'Reference-matched dark spider';
    scene.add(spiderGroup);

    // Abdomen: long, narrow dorsal oval (the proportions in hi1.png).
    const abdomenGeo = new THREE.SphereGeometry(1, 56, 40);
    abdomenGeo.scale(0.64, 0.47, 1.16);
    abdomenMesh = new THREE.Mesh(abdomenGeo, materialsList.abdomen);
    abdomenMesh.name = 'Long oval abdomen';
    abdomenMesh.position.set(0, 0.55, -1.20);
    abdomenMesh.castShadow = abdomenMesh.receiveShadow = true;
    spiderGroup.add(abdomenMesh);
    generateSetaeOnMesh(abdomenMesh, 5600, 0.073, materialsList.setaeDark);
    generateSetaeOnMesh(abdomenMesh, 2200, 0.082, materialsList.setaeBrown,
        (normal, p) => Math.abs(normal.x) > 0.42 || normal.y > 0.45 || p.z < -0.15);

    // Five dorsal bars mimic the top-view markings, but stay muted against the charcoal body.
    const dorsalBars = [
        { z: 0.68, width: 0.135, mat: 'gold', phase: 0.2 },
        { z: 0.29, width: 0.16, mat: 'blue', phase: 1.1 },
        { z: -0.13, width: 0.17, mat: 'gold', phase: 2.0 },
        { z: -0.55, width: 0.16, mat: 'blue', phase: 2.7 },
        { z: -0.84, width: 0.115, mat: 'gold', phase: 3.4 }
    ];
    dorsalBars.forEach(bar => {
        createDorsalStripe(bar.z, bar.width + 0.055, materialsList.abdomenBandEdge, bar.phase, 0.006);
        createDorsalStripe(
            bar.z, bar.width,
            bar.mat === 'gold' ? materialsList.abdomenBandGold : materialsList.abdomenBandBlue,
            bar.phase, 0.014
        );
    });

    // Small rear spinnerets, silhouetted in the side reference.
    for (const side of [-1, 1]) {
        const spinneret = addBone(
            spiderGroup,
            new THREE.Vector3(side * 0.105, 0.39, -2.22),
            new THREE.Vector3(side * 0.14, 0.31, -2.56),
            0.047, 0.022, materialsList.legDark, `Spinneret ${side < 0 ? 'L' : 'R'}`
        );
        generateSetaeOnMesh(spinneret, 80, 0.045, materialsList.setaeDark);
    }

    // Cephalothorax: compact dark shell with a warm, mottled, furry face.
    const carapaceGeo = new THREE.SphereGeometry(1, 48, 32);
    carapaceGeo.scale(0.48, 0.225, 0.63);
    const carapace = new THREE.Mesh(carapaceGeo, materialsList.carapace);
    carapace.name = 'Cephalothorax shell';
    carapace.position.set(0, 0.57, 0.02);
    carapace.castShadow = carapace.receiveShadow = true;
    spiderGroup.add(carapace);
    generateSetaeOnMesh(carapace, 1050, 0.055, materialsList.setaeBrown);
    generateSetaeOnMesh(carapace, 420, 0.045, materialsList.setaeDark);

    const faceGeo = new THREE.SphereGeometry(1, 36, 28);
    faceGeo.scale(0.365, 0.255, 0.265);
    const face = new THREE.Mesh(faceGeo, materialsList.face);
    face.name = 'Mottled front face';
    face.position.set(0, 0.445, 0.49);
    face.castShadow = face.receiveShadow = true;
    spiderGroup.add(face);
    generateSetaeOnMesh(face, 1900, 0.075, materialsList.setaeBrown);
    generateSetaeOnMesh(face, 850, 0.067, materialsList.setaeDark);

    // Slight raised face brow and clypeus, giving the eyes a readable face plane.
    const browGeo = new THREE.SphereGeometry(1, 28, 20);
    browGeo.scale(0.27, 0.10, 0.115);
    const brow = new THREE.Mesh(browGeo, materialsList.carapace);
    brow.position.set(0, 0.625, 0.64);
    brow.name = 'Ocular brow';
    brow.castShadow = true;
    spiderGroup.add(brow);
    generateSetaeOnMesh(brow, 190, 0.045, materialsList.setaeBrown);

    // Exactly eight glossy eyes; cloned into the inset for a close face inspection.
    eyeClusterGroup = createEyeCluster();
    eyeClusterGroup.position.set(0, 0.62, 0.675);
    spiderGroup.add(eyeClusterGroup);
    const macroEyes = eyeClusterGroup.clone(true);
    macroEyes.position.set(0, 0, 0);
    macroScene.add(macroEyes);

    // Chelicerae and curved black fangs beneath the front face.
    for (const side of [-1, 1]) {
        const cheliceraGeo = new THREE.SphereGeometry(1, 24, 18);
        cheliceraGeo.scale(0.145, 0.16, 0.19);
        const chelicera = new THREE.Mesh(cheliceraGeo, materialsList.legDark);
        chelicera.name = `Chelicera ${side < 0 ? 'L' : 'R'}`;
        chelicera.position.set(side * 0.19, 0.31, 0.715);
        chelicera.rotation.y = side * -0.15;
        chelicera.castShadow = chelicera.receiveShadow = true;
        spiderGroup.add(chelicera);
        generateSetaeOnMesh(chelicera, 185, 0.052, materialsList.setaeBrown);

        addBone(spiderGroup,
            new THREE.Vector3(side * 0.19, 0.29, 0.81),
            new THREE.Vector3(side * 0.215, 0.13, 0.94),
            0.052, 0.033, materialsList.fang, 'Fang base');
        addBone(spiderGroup,
            new THREE.Vector3(side * 0.215, 0.13, 0.94),
            new THREE.Vector3(side * 0.20, 0.035, 1.00),
            0.033, 0.003, materialsList.fang, 'Fang tip');
    }

    // Two pedipalps sit close to the face and remain smaller than the eight legs.
    for (const side of [-1, 1]) {
        const pts = [
            new THREE.Vector3(side * 0.29, 0.38, 0.63),
            new THREE.Vector3(side * 0.40, 0.32, 0.79),
            new THREE.Vector3(side * 0.43, 0.23, 0.94),
            new THREE.Vector3(side * 0.37, 0.14, 1.03),
            new THREE.Vector3(side * 0.30, 0.12, 1.07)
        ];
        const radii = [0.073, 0.063, 0.050, 0.036];
        for (let i = 0; i < 4; i++) {
            const palpSegment = addBone(
                spiderGroup, pts[i], pts[i + 1],
                radii[i], radii[i] * 0.68, materialsList.legDark, `Pedipalp ${side} segment ${i + 1}`
            );
            generateSetaeOnMesh(palpSegment, 52, 0.052, materialsList.setaeBrown);
            if (i > 0) addJoint(spiderGroup, pts[i], 0.043, materialsList.joint);
        }

        // Small orange/gold rings on the distal palp joints from the references.
        addLegBand(spiderGroup, pts[1], pts[2], radii[1], 0.58, 0.075, materialsList.legBandGold);
    }

    // Eight long, narrow, sharply articulated legs. Every leg has seven named sections.
    // Coordinates were laid out symmetrically to preserve the top-view silhouette while
    // the raised patella/tibia points create the bent side/front profile from hi2/hi3.
    const legAnchors = [
        [ // Leg I — forward, long and diagonally swept
            [0.31, 0.49, 0.40], [0.50, 0.49, 0.55], [0.77, 0.66, 0.78], [1.05, 0.77, 1.03],
            [1.37, 0.53, 1.31], [1.70, 0.28, 1.63], [1.99, 0.13, 1.98], [2.16, 0.065, 2.22]
        ],
        [ // Leg II — forward-lateral
            [0.34, 0.48, 0.12], [0.56, 0.47, 0.16], [0.89, 0.64, 0.23], [1.28, 0.77, 0.33],
            [1.67, 0.51, 0.36], [2.13, 0.28, 0.30], [2.56, 0.13, 0.23], [2.90, 0.065, 0.17]
        ],
        [ // Leg III — lateral / rearward
            [0.33, 0.46, -0.17], [0.55, 0.44, -0.28], [0.90, 0.59, -0.42], [1.30, 0.70, -0.60],
            [1.68, 0.48, -0.77], [2.10, 0.27, -0.97], [2.48, 0.12, -1.15], [2.79, 0.06, -1.32]
        ],
        [ // Leg IV — rear-swept
            [0.29, 0.44, -0.45], [0.49, 0.42, -0.61], [0.80, 0.56, -0.87], [1.11, 0.68, -1.14],
            [1.44, 0.45, -1.47], [1.76, 0.24, -1.82], [2.05, 0.11, -2.13], [2.25, 0.055, -2.36]
        ]
    ];
    const segmentNames = ['Coxa', 'Trochanter', 'Femur', 'Patella', 'Tibia', 'Metatarsus', 'Tarsus'];
    const segmentRadii = [0.090, 0.068, 0.078, 0.071, 0.056, 0.039, 0.025];
    const hairCounts = [30, 26, 40, 44, 48, 36, 28];
    const hairLengths = [0.038, 0.033, 0.047, 0.048, 0.052, 0.043, 0.034];

    legAnchors.forEach((anchors, legIndex) => {
        for (const side of [-1, 1]) {
            const points = anchors.map(([x, y, z]) => new THREE.Vector3(x * side, y, z));
            for (let seg = 0; seg < 7; seg++) {
                const startRadius = segmentRadii[seg];
                const endRadius = startRadius * (seg === 3 ? 0.82 : 0.70);
                const legSeg = addBone(
                    spiderGroup, points[seg], points[seg + 1],
                    startRadius, endRadius, materialsList.legDark,
                    `Leg ${legIndex + 1} ${side < 0 ? 'L' : 'R'} ${segmentNames[seg]}`
                );
                legSeg.receiveShadow = true;
                const hairMat = (seg === 2 || seg === 3) ? materialsList.setaeBrown : materialsList.setaeDark;
                generateSetaeOnMesh(legSeg, hairCounts[seg], hairLengths[seg], hairMat);
                if (seg > 0) addJoint(spiderGroup, points[seg], seg === 4 ? 0.062 : 0.048, materialsList.joint);
            }
            addJoint(spiderGroup, points[7], 0.026, materialsList.legDark);

            // Fine ochre bands, narrow and localized rather than entire bright-red knees.
            addLegBand(spiderGroup, points[3], points[4], segmentRadii[3], 0.62, 0.072, materialsList.legBandGold);
            addLegBand(spiderGroup, points[4], points[5], segmentRadii[4], 0.19, 0.080, materialsList.legBandWarm);
            addLegBand(spiderGroup, points[4], points[5], segmentRadii[4], 0.69, 0.075, materialsList.legBandGold);
            if (legIndex < 3) {
                addLegBand(spiderGroup, points[5], points[6], segmentRadii[5], 0.22, 0.075, materialsList.legBandGold);
            }
        }
    });
}


function createEyeCluster() {
    const group = new THREE.Group();
    group.name = 'Eight-eye front ocular cluster';

    const plateGeo = new THREE.SphereGeometry(1, 28, 20);
    plateGeo.scale(0.215, 0.125, 0.105);
    const plate = new THREE.Mesh(plateGeo, materialsList.face);
    plate.position.set(0, 0.002, 0.0);
    plate.name = 'Mottled ocular plate';
    plate.castShadow = true;
    group.add(plate);
    generateSetaeOnMesh(plate, 150, 0.038, materialsList.setaeBrown,
        normal => normal.y < 0.65 || Math.abs(normal.x) > 0.55);

    // Eight individual eyes: two larger forward median eyes and six smaller surrounding eyes.
    const bigEye = new THREE.SphereGeometry(0.046, 20, 16);
    const smallEye = new THREE.SphereGeometry(0.030, 16, 12);
    const eyes = [
        { x: -0.055, y: 0.022, z: 0.091, big: true },
        { x:  0.055, y: 0.022, z: 0.091, big: true },
        { x: -0.145, y: 0.000, z: 0.059 },
        { x:  0.145, y: 0.000, z: 0.059 },
        { x: -0.132, y: 0.046, z: -0.016 },
        { x:  0.132, y: 0.046, z: -0.016 },
        { x: -0.063, y: 0.066, z: -0.047 },
        { x:  0.063, y: 0.066, z: -0.047 }
    ];
    eyes.forEach((eye, index) => {
        const mesh = new THREE.Mesh(eye.big ? bigEye : smallEye, materialsList.eyes);
        mesh.position.set(eye.x, eye.y, eye.z);
        mesh.name = `Eye ${index + 1} of 8`;
        mesh.castShadow = true;
        group.add(mesh);

        const highlight = new THREE.Mesh(
            new THREE.SphereGeometry(eye.big ? 0.007 : 0.0045, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xe2e6e2 })
        );
        highlight.position.set(eye.x - 0.011, eye.y + 0.012, eye.z + (eye.big ? 0.033 : 0.021));
        highlight.name = 'Small corneal catchlight';
        group.add(highlight);
    });
    return group;
}


function createDorsalStripe(centerOffset, bandWidth, material, phase = 0, lift = 0.01) {
    // Build a thin grid that hugs the upper ellipsoid instead of drawing a flat decal.
    const rx = 0.64, ry = 0.47, rz = 1.16;
    const centerY = abdomenMesh.position.y;
    const centerZ = abdomenMesh.position.z;
    const across = 4;
    const along = 44;
    const zEdge = Math.min(rz * 0.96, Math.max(Math.abs(centerOffset - bandWidth * 0.5),
                                                Math.abs(centerOffset + bandWidth * 0.5)));
    const xExtent = rx * Math.sqrt(Math.max(0.08, 1 - Math.pow(zEdge / rz, 2))) * 0.98;
    const positions = [];
    const indices = [];

    for (let ix = 0; ix <= along; ix++) {
        const u = ix / along;
        const x = -xExtent + 2 * xExtent * u;
        const irregularity = 0.022 * Math.sin((u * 5.2 + phase) * Math.PI) +
                             0.009 * Math.sin((u * 13.0 + phase * 1.7) * Math.PI);
        for (let iz = 0; iz <= across; iz++) {
            const v = iz / across;
            const zLocal = centerOffset + (v - 0.5) * bandWidth + irregularity;
            const normalized = (x * x) / (rx * rx) + (zLocal * zLocal) / (rz * rz);
            const y = centerY + ry * Math.sqrt(Math.max(0.045, 1 - normalized)) + lift;
            positions.push(x, y, centerZ + zLocal);
        }
    }
    for (let ix = 0; ix < along; ix++) {
        for (let iz = 0; iz < across; iz++) {
            const a = ix * (across + 1) + iz;
            const b = a + across + 1;
            indices.push(a, a + 1, b, b, a + 1, b + 1);
        }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const patch = new THREE.Mesh(geometry, material);
    patch.name = 'Curved dorsal abdomen band';
    patch.castShadow = false;
    patch.receiveShadow = true;
    spiderGroup.add(patch);
    return patch;
}

function addLegBand(parent, start, end, baseRadius, t, relativeWidth, material) {
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    if (length < 0.01) return null;
    const height = Math.max(0.012, length * relativeWidth);
    const ring = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius * 1.025, baseRadius * 1.025, height, 10, 1, false),
        material
    );
    ring.position.copy(start).addScaledVector(direction, t);
    ring.quaternion.setFromUnitVectors(UP, direction.normalize());
    ring.name = 'Narrow ochre leg band';
    ring.castShadow = true;
    ring.receiveShadow = true;
    parent.add(ring);
    return ring;
}

    function addBone(parent, start, end, radiusStart, radiusEnd, material, name) {
        const direction = new THREE.Vector3().subVectors(end, start);
        const length = Math.max(direction.length(), 0.001);
        const geometry = new THREE.CylinderGeometry(radiusEnd, radiusStart, length, 12, 1, false);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(start).add(end).multiplyScalar(0.5);
        mesh.quaternion.setFromUnitVectors(UP, direction.normalize());
        mesh.name = name || 'Tapered segment';
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh);
        return mesh;
    }

    function addJoint(parent, position, radius, material) {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 12, 10), material);
        mesh.position.copy(position);
        mesh.name = 'Leg articulation joint';
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh);
        return mesh;
    }

    function generateSetaeOnMesh(targetMesh, count, hairLength, hairMaterial, filterFn = null) {
        const geometry = targetMesh.geometry;
        const positions = geometry.attributes.position;
        if (!positions || !count) return;
        if (!geometry.attributes.normal) geometry.computeVertexNormals();
        const normals = geometry.attributes.normal;
        const index = geometry.index;
        const triangleCount = index ? index.count / 3 : positions.count / 3;
        if (!triangleCount) return;

        // Area-weighted triangle selection avoids the vertex-ring clumping produced by
        // sampling only the few vertices of cylindrical leg segments.
        const triangles = [];
        let totalArea = 0;
        const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
        const ab = new THREE.Vector3(), ac = new THREE.Vector3();
        for (let tri = 0; tri < triangleCount; tri++) {
            const i0 = index ? index.getX(tri * 3) : tri * 3;
            const i1 = index ? index.getX(tri * 3 + 1) : tri * 3 + 1;
            const i2 = index ? index.getX(tri * 3 + 2) : tri * 3 + 2;
            a.fromBufferAttribute(positions, i0);
            b.fromBufferAttribute(positions, i1);
            c.fromBufferAttribute(positions, i2);
            ab.subVectors(b, a);
            ac.subVectors(c, a);
            const area = ab.cross(ac).length() * 0.5;
            if (area <= 1e-9) continue;
            totalArea += area;
            triangles.push({ i0, i1, i2, cumulative: totalArea });
        }
        if (!triangles.length) return;

        const hairRadius = Math.max(0.0022, Math.min(0.0056, hairLength * 0.065));
        const hairGeometry = new THREE.ConeGeometry(hairRadius, hairLength, 4, 1, false);
        hairGeometry.translate(0, hairLength / 2, 0);
        const instances = new THREE.InstancedMesh(hairGeometry, hairMaterial, count);
        instances.name = 'Fine setae / hair instances';
        instances.userData.isSetae = true;
        instances.castShadow = false;
        instances.receiveShadow = false;

        const dummy = new THREE.Object3D();
        const p = new THREE.Vector3(), n = new THREE.Vector3();
        const pA = new THREE.Vector3(), pB = new THREE.Vector3(), pC = new THREE.Vector3();
        const nA = new THREE.Vector3(), nB = new THREE.Vector3(), nC = new THREE.Vector3();
        let placed = 0;
        let attempts = 0;
        const maxAttempts = count * 18;
        while (placed < count && attempts < maxAttempts) {
            attempts++;
            const roll = Math.random() * totalArea;
            let lo = 0, hi = triangles.length - 1;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (roll <= triangles[mid].cumulative) hi = mid;
                else lo = mid + 1;
            }
            const tri = triangles[lo];
            pA.fromBufferAttribute(positions, tri.i0);
            pB.fromBufferAttribute(positions, tri.i1);
            pC.fromBufferAttribute(positions, tri.i2);
            nA.fromBufferAttribute(normals, tri.i0);
            nB.fromBufferAttribute(normals, tri.i1);
            nC.fromBufferAttribute(normals, tri.i2);

            const r1 = Math.sqrt(Math.random());
            const r2 = Math.random();
            const w0 = 1 - r1;
            const w1 = r1 * (1 - r2);
            const w2 = r1 * r2;
            p.copy(pA).multiplyScalar(w0).addScaledVector(pB, w1).addScaledVector(pC, w2);
            n.copy(nA).multiplyScalar(w0).addScaledVector(nB, w1).addScaledVector(nC, w2).normalize();
            if (filterFn && !filterFn(n, p)) continue;

            dummy.position.copy(p);
            dummy.quaternion.setFromUnitVectors(UP, n);
            dummy.rotateY((Math.random() - 0.5) * 0.8);
            dummy.rotateX((Math.random() - 0.5) * 0.48);
            const scale = 0.48 + Math.random() * 1.02;
            dummy.scale.set(scale, scale, scale);
            dummy.updateMatrix();
            instances.setMatrixAt(placed++, dummy.matrix);
        }

        // The filter is aesthetic only; fill any rejected spots without it to retain the setae budget.
        while (placed < count) {
            const tri = triangles[Math.floor(Math.random() * triangles.length)];
            pA.fromBufferAttribute(positions, tri.i0);
            pB.fromBufferAttribute(positions, tri.i1);
            pC.fromBufferAttribute(positions, tri.i2);
            const r1 = Math.sqrt(Math.random()), r2 = Math.random();
            p.copy(pA).multiplyScalar(1 - r1).addScaledVector(pB, r1 * (1 - r2)).addScaledVector(pC, r1 * r2);
            nA.fromBufferAttribute(normals, tri.i0);
            nB.fromBufferAttribute(normals, tri.i1);
            nC.fromBufferAttribute(normals, tri.i2);
            n.copy(nA).multiplyScalar(1 - r1).addScaledVector(nB, r1 * (1 - r2)).addScaledVector(nC, r1 * r2).normalize();
            dummy.position.copy(p);
            dummy.quaternion.setFromUnitVectors(UP, n);
            dummy.rotateY((Math.random() - 0.5) * 0.8);
            dummy.scale.setScalar(0.6 + Math.random() * 0.7);
            dummy.updateMatrix();
            instances.setMatrixAt(placed++, dummy.matrix);
        }
        instances.instanceMatrix.needsUpdate = true;
        instances.visible = furVisible;
        targetMesh.add(instances);
        setaeInstanceCount += count;
    }

function rememberBaseMaterials() {
    baseMaterials = [];
    spiderGroup.traverse(object => {
        if (!(object.isMesh || object.isInstancedMesh) || !object.material) return;
        object.userData.baseMaterial = object.material;
        baseMaterials.push(object);
    });
}

function updateWireframe() {
    baseMaterials.forEach(object => {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach(material => {
            if (material && 'wireframe' in material) material.wireframe = wireframeEnabled;
        });
    });
    macroScene?.traverse(object => {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach(material => {
            if (material && 'wireframe' in material) material.wireframe = wireframeEnabled;
        });
    });
}

function setMaterialColor(keys, value) {
    const names = Array.isArray(keys) ? keys : [keys];
    names.forEach(name => {
        const material = materialsList[name];
        if (material && material.color) {
            material.color.set(value);
            material.needsUpdate = true;
        }
    });
}

function resetMaterialColors() {
    const defaults = {
        'body-color': '#292b25',
        'shell-color': '#474038',
        'legs-color': '#17191a',
        'marking-color': '#a79b52',
        'stripe-color': '#58656b',
        'hair-color': '#39332a'
    };
    Object.entries(defaults).forEach(([id, value]) => {
        const input = document.getElementById(id);
        if (input) input.value = value;
    });
    setMaterialColor('abdomen', defaults['body-color']);
    setMaterialColor(['carapace', 'face'], defaults['shell-color']);
    setMaterialColor(['legDark', 'joint'], defaults['legs-color']);
    setMaterialColor(['abdomenBandGold', 'legBandGold', 'legBandWarm', 'setaeGold'], defaults['marking-color']);
    setMaterialColor('abdomenBandBlue', defaults['stripe-color']);
    setMaterialColor(['setaeDark'], defaults['hair-color']);
    setMaterialColor('setaeBrown', '#594a38');
    setMaterialColor('setaeGold', '#8e7741');
}



function setupUIHandlers() {
    document.getElementById('wireframe-toggle').addEventListener('change', event => {
        wireframeEnabled = event.target.checked;
        updateWireframe();
    });
    document.getElementById('fur-toggle').addEventListener('change', event => {
        furVisible = event.target.checked;
        baseMaterials.forEach(object => {
            if (object.userData.isSetae) object.visible = furVisible;
        });
        macroScene.traverse(object => {
            if (object.userData && object.userData.isSetae) object.visible = furVisible;
        });
    });

    document.getElementById('body-color').addEventListener('input', event => setMaterialColor('abdomen', event.target.value));
    document.getElementById('shell-color').addEventListener('input', event => setMaterialColor(['carapace', 'face'], event.target.value));
    document.getElementById('legs-color').addEventListener('input', event => setMaterialColor(['legDark', 'joint'], event.target.value));
    document.getElementById('marking-color').addEventListener('input', event => {
        setMaterialColor(['abdomenBandGold', 'legBandGold', 'legBandWarm', 'setaeGold'], event.target.value);
    });
    document.getElementById('stripe-color').addEventListener('input', event => setMaterialColor('abdomenBandBlue', event.target.value));
    document.getElementById('hair-color').addEventListener('input', event => setMaterialColor(['setaeDark', 'setaeBrown', 'setaeGold'], event.target.value));
    document.getElementById('reset-colors').addEventListener('click', resetMaterialColors);

    const turntableButton = document.getElementById('btn-turntable-toggle');
    turntableButton.addEventListener('click', () => {
        isTurntableActive = !isTurntableActive;
        document.getElementById('turntable-icon').className = isTurntableActive
            ? 'fa-solid fa-pause text-sm' : 'fa-solid fa-play text-sm';
        turntableButton.setAttribute('aria-label', isTurntableActive ? 'Pause turntable' : 'Resume turntable');
    });

    document.getElementById('turntable-speed').addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        turntableSpeed = 0.32 * value;
        document.getElementById('turntable-speed-label').textContent = `${value.toFixed(1)}x`;
    });

    document.getElementById('key-light-control')?.addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        keyLight.intensity = value;
        document.getElementById('key-light-value').textContent = value.toFixed(1);
    });
    document.getElementById('rim-light-control')?.addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        rimLight.intensity = value;
        document.getElementById('rim-light-value').textContent = value.toFixed(1);
    });
    document.getElementById('fill-light-control')?.addEventListener('input', event => {
        const value = parseFloat(event.target.value);
        fillLight.intensity = value;
        document.getElementById('fill-light-value').textContent = value.toFixed(1);
    });

    document.getElementById('cam-focus-carapace').addEventListener('click', () => focusCameraOn(0, 0.57, 0.06, 3.9));
    document.getElementById('cam-focus-chelicerae').addEventListener('click', () => focusCameraOn(0, 0.43, 0.72, 2.2));
    document.getElementById('cam-focus-patella').addEventListener('click', () => focusCameraOn(1.35, 0.55, 0.45, 2.7));
    document.getElementById('cam-focus-abdomen').addEventListener('click', () => focusCameraOn(0, 0.55, -1.22, 3.4));
    document.getElementById('cam-preset-front')?.addEventListener('click', () => setCameraPreset('front'));
    document.getElementById('cam-preset-side')?.addEventListener('click', () => setCameraPreset('side'));
    document.getElementById('cam-preset-top')?.addEventListener('click', () => setCameraPreset('top'));
    document.getElementById('btn-reset-cam').addEventListener('click', () => setCameraPreset('three-quarter'));

    const dial = document.getElementById('angle-dial');
    let isDraggingDial = false;
    dial.addEventListener('pointerdown', event => {
        isDraggingDial = true;
        dial.classList.add('is-dragging');
        if (dial.setPointerCapture) dial.setPointerCapture(event.pointerId);
        updateDialFromPointer(event);
        event.preventDefault();
    });
    window.addEventListener('pointermove', event => {
        if (isDraggingDial) updateDialFromPointer(event);
    });
    const finishDial = () => {
        isDraggingDial = false;
        dial.classList.remove('is-dragging');
    };
    window.addEventListener('pointerup', finishDial);
    window.addEventListener('pointercancel', finishDial);
}

    function updateDialFromPointer(event) {
        const dial = document.getElementById('angle-dial');
        const rect = dial.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rad = Math.atan2(event.clientY - cy, event.clientX - cx);
        let deg = Math.round(rad * 180 / Math.PI);
        if (deg < 0) deg += 360;
        if (spiderGroup) spiderGroup.rotation.y = rad;
        updateDialUI(deg);
    }

    function focusCameraOn(x, y, z, distance) {
        const target = new THREE.Vector3(x, y, z);
        const direction = new THREE.Vector3().subVectors(camera.position, controls.target);
        if (direction.lengthSq() < 0.01) direction.set(0.5, 0.35, 1);
        direction.normalize();
        controls.target.copy(target);
        camera.position.copy(target).add(direction.multiplyScalar(distance));
        camera.lookAt(target);
        controls.update();
    }


function setCameraPreset(preset) {
    const target = new THREE.Vector3(0, 0.48, -0.02);
    let offset;
    if (preset === 'front') {
        camera.up.set(0, 1, 0);
        offset = new THREE.Vector3(0, 3.5, 8.0);
    } else if (preset === 'side') {
        camera.up.set(0, 1, 0);
        offset = new THREE.Vector3(10.8, 2.6, 0);
    } else if (preset === 'top') {
        // Set a stable screen-up vector so the abdomen is at the top of the top view
        // and the face is at the bottom, matching the provided overhead reference.
        camera.up.set(0, 0, -1);
        offset = new THREE.Vector3(0, 13.3, 0.015);
    } else {
        camera.up.set(0, 1, 0);
        offset = new THREE.Vector3(5.2, 4.0, 7.3);
    }
    controls.target.copy(target);
    camera.position.copy(target).add(offset);
    camera.lookAt(target);
    controls.update();
}

    function updateDialUI(degrees) {
        const deg = ((Math.round(degrees) % 360) + 360) % 360;
        document.getElementById('angle-display').textContent = `${deg}°`;
        document.getElementById('dial-hand').style.transform = `rotate(${deg}deg)`;
    }

    function updateSetaeReadout() {
        const output = document.getElementById('setae-count');
        if (output) output.textContent = setaeInstanceCount.toLocaleString('en-US');
    }

    function onWindowResize() {
        if (!renderer || !camera || !macroRenderer || !macroCamera) return;
        const container = document.getElementById('canvas-container');
        camera.aspect = container.clientWidth / Math.max(container.clientHeight, 1);
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        const macroContainer = document.getElementById('macro-canvas-container');
        macroCamera.aspect = macroContainer.clientWidth / Math.max(macroContainer.clientHeight, 1);
        macroCamera.updateProjectionMatrix();
        macroRenderer.setSize(macroContainer.clientWidth, macroContainer.clientHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        const delta = Math.min(clock.getDelta(), 0.05);
        const elapsed = clock.elapsedTime;
        if (isTurntableActive && spiderGroup) {
            spiderGroup.rotation.y += turntableSpeed * delta;
            let degrees = spiderGroup.rotation.y * 180 / Math.PI;
            degrees = ((degrees % 360) + 360) % 360;
            updateDialUI(degrees);
        }
        if (spiderGroup) spiderGroup.position.y = Math.sin(elapsed * 1.4) * 0.008;
        if (abdomenMesh) abdomenMesh.scale.y = 1 + Math.sin(elapsed * 1.8) * 0.008;

        controls?.update();
        renderer.render(scene, camera);
        macroRenderer.render(macroScene, macroCamera);

        frameCount++;
        const now = performance.now();
        if (now - lastTime >= 1000) {
            document.getElementById('fps-counter').textContent = String(frameCount);
            frameCount = 0;
            lastTime = now;
        }
    }
})();

    </script>
</body>
</html>
