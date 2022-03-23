console.log('hello THREE');
console.log(THREE);
// const THREE = require('./three.min.js')

const scene = new THREE.Scene()


const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color:0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, )
scene.add(camera)