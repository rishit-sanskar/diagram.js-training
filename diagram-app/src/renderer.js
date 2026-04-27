export default function CustomRenderer(eventBus) {

  // Shapes
  eventBus.on('render.shape', function(event) {
    const { gfx, element } = event;

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', element.width);
    rect.setAttribute('height', element.height);
    rect.setAttribute('fill', 'white');
    rect.setAttribute('stroke', '#333');
    rect.setAttribute('stroke-width', '2');
    rect.setAttribute('rx', '4');

    gfx.appendChild(rect);
    return rect;
  });

  // Connections (Assignment 3+)
  eventBus.on('render.connection', function(event) {
    const { gfx, element } = event;

    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    const points = element.waypoints.map(w => `${w.x},${w.y}`).join(' ');

    polyline.setAttribute('points', points);
    polyline.setAttribute('fill', 'none');
    polyline.setAttribute('stroke', '#333');
    polyline.setAttribute('stroke-width', '2');

    gfx.appendChild(polyline);
    return polyline;
  });
}

CustomRenderer.$inject = ['eventBus'];

export const customRenderModule = {
  __init__: ['customRenderer'],
  customRenderer: ['type', CustomRenderer]
};