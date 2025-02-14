---
title: Creating a Popover in React with Pure CSS
template: post
topic: Engineering
date: Aug 08, 2024
---

## Creating a Popover in React (Without the `<popover>` Tag... Yet!)

The HTML `<popover>` element is on its way to becoming a standard way to create dismissible overlays, but browser support is still evolving. While we wait for full adoption, we can easily create similar functionality in React using a combination of state, CSS, and event handling. This post will guide you through building a simple yet effective popover component.

**The Challenge:**

We want to create a small information box that appears when a user hovers over an element. This is a common UI pattern used for tooltips, help text, and other contextual information. Since the `<popover>` tag isn't universally available yet, we'll implement this ourselves.

**The Basic HTML/CSS Approach (as a starting point):**

Let's first look at the basic HTML and CSS structure that achieves this effect:

```html
<div class="tooltip-container">
  Instant Capital
  <div class="tooltip">Lorem ipsum</div>
</div>
```

```css
.tooltip-container {
  position: relative;
  width: fit-content;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  top: -2px;
  left: 100%;
  display: none;
  transform: translateY(-100%) translateX(-16px); /* Adjust positioning as needed */
  background-color: #333; /* Example styling */
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  white-space: nowrap; /* Prevent text wrapping */
  z-index: 1; /* Ensure it's on top */
}

.tooltip-container:hover .tooltip {
  display: inline;
}
```

This works by hiding the .tooltip element by default (display: none;) and then showing it on hover of the .tooltip-container using the :hover pseudo-class.

**Further Enhancements**

- Positioning: You can use JavaScript to dynamically calculate the popover position to prevent it from going off-screen. Libraries like react-popper or floating-ui can help with this.
- Click to Toggle: Instead of hover, you could use a click event to toggle the popover.
- Dismiss on Outside Click: Add an event listener to the document to close the popover when the user clicks outside of it.
- Animations: Use CSS transitions or animations for a smoother user experience.

As the `<popover>` element gains wider browser support, we can eventually transition to it, but for now, this approach offers a reliable alternative.
