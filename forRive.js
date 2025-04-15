const canvasDiv = document.getElementById('riveDiv');

const r = new rive.Rive ({
  src: 'greemzy.riv',
  canvas: document.getElementById('riveCanvas'),
  autoplay: true,
  stateMachines: ['State Machine 1'],
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
    const inputs = r.stateMachineInputs('State Machine 1');
    const animationTrigger = inputs.find(i => i.name === 'tap');
    canvasDiv.onclick = () => animationTrigger.fire();
  }
});