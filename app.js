/**
 * Main Application Coordinator
 */


document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Three.js 3D Particle Field Canvas
    try {
        const bg3d = new Background3D('bg-canvas');
        console.log('3D Particle Background initialized successfully.');
    } catch (error) {
        console.error('Failed to initialize Three.js 3D Background:', error);
    }

    // 2. Initialize UI Interactions & GSAP Animations
    try {
        const animator = new UIAnimator();
        console.log('UI Animations and Interactions initialized successfully.');
    } catch (error) {
        console.error('Failed to initialize UI Animations:', error);
    }
});
