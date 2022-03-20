// @ts-ignore
import GlslCanvas from 'glslCanvas';

let canvas = document.getElementById('glslCanvas') as HTMLCanvasElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

new GlslCanvas(canvas);
