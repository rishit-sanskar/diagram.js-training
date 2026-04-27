import { createDiagram } from './diagram';

const container = document.getElementById('diagram-container');
const { canvas } = createDiagram(container);

// Zoom button
document.getElementById('zoom-btn').addEventListener('click', () => {

  canvas.zoom(2);

  const viewbox = canvas.viewbox();

  canvas.viewbox({
    x: 370 - viewbox.width / 2,
    y: 130 - viewbox.height / 2,
    width: viewbox.width,
    height: viewbox.height
  });
});