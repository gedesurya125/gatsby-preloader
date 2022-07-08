const rive = require('@rive-app/canvas');
// rive.RuntimeLoader.setWasmUrl('../../rive.wasm');
new rive.Rive({
  src: '../../static/soup.riv',
  canvas: document.getElementById('rive-canvas'),
  autoplay: true
});
console.log('this is the rive', rive);
