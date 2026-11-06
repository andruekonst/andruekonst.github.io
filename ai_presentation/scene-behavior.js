// Shared maze geometry for the 3D illustration and its top-down diagram.
export const MAZE_WALLS = [
  [-3, 0, 0, .1, 6], [3, 0, 0, .1, 6],
  [0, 0, -3, 6, .1], [0, 0, 3, 6, .1],
  [-1, 0, -1, .1, 4], [1, 0, 1, .1, 4],
  [-2, 0, 1, 2, .1], [2, 0, -1, 2, .1]
];
export const MOUSE_RADIUS = .22;
export const MOUSE_SPEED = .85;
// The open corridor route is traversed forwards, then backwards.
// Never connect its final point directly to its first point.
export const MAZE_ROUTE = [
  [-2.5, .4, 2.5], [0, .4, 2.5], [0, .4, -2.5], [2.5, .4, -2.5]
];
export function samplePingPongPath(points, distance) {
  const lengths = points.slice(1).map((p,i)=>Math.hypot(...p.map((x,j)=>x-points[i][j])));
  const total = lengths.reduce((a,b)=>a+b,0);
  if (!total) return [...points[0]];
  const cycle = ((distance % (2*total)) + 2*total) % (2*total);
  let remaining = cycle <= total ? cycle : 2*total-cycle;
  for (let i=0; i<lengths.length; i++) {
    if (remaining <= lengths[i] || i===lengths.length-1) {
      const fraction = lengths[i] ? remaining/lengths[i] : 0;
      return points[i].map((x,j)=>x+(points[i+1][j]-x)*fraction);
    }
    remaining -= lengths[i];
  }
}
// Materials are shared by the original scene builders. Give each station its
// own copies so dimming a neighbour cannot alter the selected station.
export function createStationFocus(group) {
  const copies = new Map();
  group.traverse(object=>{
    if (!object.material) return;
    const copy = original=>{
      if (!copies.has(original)) copies.set(original,original.clone());
      return copies.get(original);
    };
    object.material = Array.isArray(object.material) ? object.material.map(copy) : copy(object.material);
  });
  return {
    value: 1, target: 1,
    entries: [...copies.values()].map(material=>({material,color:material.color?.clone(),emissive:material.emissive?.clone()}))
  };
}
export function updateStationFocus(state, dt, immediate=false) {
  if (state.value===state.target) return;
  state.value = immediate ? state.target : state.value+(state.target-state.value)*(1-Math.exp(-7*dt));
  if (Math.abs(state.value-state.target)<.001) state.value=state.target;
  for (const {material,color,emissive} of state.entries) {
    if (color) material.color.copy(color).multiplyScalar(state.value);
    if (emissive) material.emissive.copy(emissive).multiplyScalar(state.value);
  }
}
export const INACTIVE_STATION_BRIGHTNESS = .24;
