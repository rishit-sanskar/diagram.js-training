import Diagram from 'diagram-js';
import { customRenderModule } from './renderer';

export function createDiagram(container) {
  const diagram = new Diagram({
    canvas: { container },
    modules: [customRenderModule]
  });

  const canvas = diagram.get('canvas');
  const elementFactory = diagram.get('elementFactory');
  const elementRegistry = diagram.get('elementRegistry');

  // =========================
  // Root, Shapes & Connections
  // =========================
  const root = elementFactory.createRoot({ id: 'root' });
  canvas.setRootElement(root);

  const width = 120, height = 60, startX = 150, startY = 100, gap = 40;

  for (let i = 0; i < 3; i++) {
    const shape = elementFactory.createShape({
      id: `shape${i + 1}`,
      x: startX + i * (width + gap),
      y: startY,
      width,
      height
    });
    canvas.addShape(shape, root);
  }

  const shape1 = elementRegistry.get('shape1');
  const shape2 = elementRegistry.get('shape2');
  const shape3 = elementRegistry.get('shape3');

  const connections = [
    ['connection1', shape1, shape2],
    ['connection2', shape2, shape3]
  ];

  connections.forEach(([id, source, target]) => {
    const conn = elementFactory.createConnection({
      id,
      source,
      target,
      waypoints: [
        { x: source.x + source.width, y: source.y + source.height / 2 },
        { x: target.x, y: target.y + target.height / 2 }
      ]
    });
    canvas.addConnection(conn, root);
  });

  return { canvas };
}

const container = document.getElementById('diagram-container');
const { canvas } = createDiagram(container);

// 1. Fit Viewport Button
document.getElementById('btn-fit').addEventListener('click', () => {
  canvas.zoom('fit-viewport');
});

// 2. Zoom In (+) Button
document.getElementById('btn-zoom-in').addEventListener('click', () => {
  const currentZoom = canvas.zoom();
  // Step zoom in by 0.25
  canvas.zoom(currentZoom + 0.25); 
});

// 3. Zoom Out (-) Button
document.getElementById('btn-zoom-out').addEventListener('click', () => {
  const currentZoom = canvas.zoom();
  // Step zoom out by 0.25
  canvas.zoom(currentZoom - 0.25); 
});