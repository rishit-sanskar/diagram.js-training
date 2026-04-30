# Static Flowchart Renderer

A browser-based static flowchart rendering mini-project built with vanilla JavaScript, [Vite](https://vitejs.dev/), and [diagram-js](https://github.com/bpmn-io/diagram-js).

This project demonstrates how to use the core `diagram-js` engine alongside a custom SVG renderer to programmatically generate shapes and connections, completely independent of complex modeling formats like BPMN.

## ✨ Features

* **Custom SVG Rendering:** Uses `document.createElementNS` to draw custom shapes (rectangles) and connections (polylines) without relying on external UI drawing libraries.
* **Programmatic Layout:** Automatically generates a 3-step flowchart (Shape 1 → Shape 2 → Shape 3) mapped to specific coordinates and gaps.
* **Modular Architecture:** The core diagram logic (`createDiagram`) is cleanly separated from the DOM and UI event listeners.
* **Granular Camera Controls:** Includes interactive UI buttons to manipulate the `diagram-js` viewport:
  * **Fit Viewport:** Dynamically calculates the bounding box of all shapes and centers the camera so everything is visible.
  * **Zoom In (+):** Steps the current zoom level up by 25%.
  * **Zoom Out (-):** Steps the current zoom level down by 25%.

## 🚀 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (which includes `npm`) installed on your machine.

### Installation & Setup

1. Clone or download this repository.
2. Navigate to the project folder in your terminal:
   ```bash
   cd flowchart-app
   npm install
   npm run dev