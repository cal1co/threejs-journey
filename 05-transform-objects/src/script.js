import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff34f5})
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xfff9f5})
)
cube2.position.x = 2
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff99f0})
)
cube3.position.x = -2 
group.add(cube1, cube2, cube3)


// Position
// mesh.position.y = 0.7
// mesh.position.z = -0.6
// mesh.position.x = 1

// mesh.position.set(0.7, -0.6, 1)

// const a = new THREE.Vector3(0.7, -0.6, 1)
// console.log(mesh.position.length())
// console.log(mesh.position.distanceTo(new THREE.Vector3(0,1,2)))
// mesh.position.normalize()
// console.log(mesh.position.length())


// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)


// Rotation
// mesh.rotation.reorder('YXZ') // problem with locked axes <--- axes order 
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// camera.lookAt(new THREE.Vector3(0, -1, 0))


// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

// camera.lookAt(mesh.position)

// console.log('Distance to camera POS:', mesh.position.distanceTo(camera.position))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)