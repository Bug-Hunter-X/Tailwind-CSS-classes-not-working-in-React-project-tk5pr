# Tailwind CSS classes not working in React project

This repository demonstrates a common issue encountered when using Tailwind CSS in React projects: Tailwind CSS classes not being applied correctly.

## Bug

The provided code snippet shows a simple counter component. Despite using Tailwind CSS classes like `p-4`, `bg-blue-500`, etc., the button does not render with the expected styles. 

## Solution

The solution involves ensuring that the Tailwind directives are correctly configured in your `tailwind.config.js` file and that the `@tailwind` directives are present in your CSS file (e.g., `global.css`).  Additionally, make sure that the CSS file is imported into your main app file.