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

  // ✅ ROOT (your hint applied correctly)
  const root = elementFactory.createRoot({ id: 'root' });
  canvas.setRootElement(root);

  // =========================
  // Assignment 2 (includes 1)
  // =========================
  const width = 120;
  const height = 60;
  const startX = 150;
  const startY = 100;
  const gap = 40;

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

  // =========================
  // Assignment 3
  // =========================
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

  // =========================
  // Assignment 4
  // =========================
  canvas.zoom('fit-viewport');

  return { canvas };
}