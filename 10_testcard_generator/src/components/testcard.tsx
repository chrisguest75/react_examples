import styles from 'testcard.module.css';
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';


export default function TestCard( {} ) {
    const canvasRef = useRef(null)

    function lines(ctx) {
      const lines = 100;
      const width = 300;
      const height = 3000;

      const line0_width = width;
      let line0_coords = [];
      let linex = 0;
      let boxwidth = line0_width / lines;
      for (var i = 0; i < (lines * 2); i+=2){
          let x1 = i * boxwidth;
          let x2 = (i + 1) * boxwidth;
          let x3 = (i + 2) * boxwidth;
          line0_coords.push([x1 - (line0_width /2 ) - (boxwidth / 2), 
                              x2 - (line0_width / 2 ) - (boxwidth / 2),
                              x3 - (line0_width / 2 ) - (boxwidth / 2)
                          ])                
      }
      const line1_width = width * 15;
      let line1_coords = [];
      boxwidth = line1_width / lines;
      for (var i = 0; i < (lines * 2); i+=2){
          let x1 = i * boxwidth;
          let x2 = (i + 1) * boxwidth;
          let x3 = (i + 3) * boxwidth;
          line1_coords.push([x1 - (line1_width /2 ) - (boxwidth / 2), 
                              x2 - (line1_width / 2 ) - (boxwidth / 2),
                              x3 - (line1_width / 2 ) - (boxwidth / 2)
                          ])                
      }

      // Create a linear gradient
      var gradient1 = ctx.createLinearGradient(0, 0, width,height);

      // gradient.addColorStop(0, 'black');
      // gradient.addColorStop(1, 'white');

      // gradient.addColorStop(0, 'hsla(190,70%,50%,0.3)');
      // gradient.addColorStop(.5, 'hsla(90,60%,70%,5.0)');
      // gradient.addColorStop(1, 'hsla(60,60%,70%,5.3)');

      gradient1.addColorStop(0, 'purple');
      gradient1.addColorStop(.10, 'blue');
      //gradient.addColorStop(.5, 'yellow');
      gradient1.addColorStop(.80, 'red');
      gradient1.addColorStop(1, 'yellow');

      var gradient2 = ctx.createLinearGradient(0, 0, width,height);

      gradient2.addColorStop(0, 'purple');
      gradient2.addColorStop(.10, 'darkblue');
      gradient2.addColorStop(.80, 'darkred');
      gradient2.addColorStop(1, 'orange');


      for (var i = 0; i < line0_coords.length; i++){
          ctx.fillStyle = '#ffffff';
          let line0 = line0_coords[i];
          let line1 = line1_coords[i];
          ctx.beginPath();
          ctx.moveTo(line0[0] + (width /2), 0);
          ctx.lineTo(line1[0] + (width /2), height);
          ctx.lineTo(line1[1] + (width /2), height);
          ctx.lineTo(line0[1] + (width /2), 0);
          ctx.closePath();
          ctx.fillStyle = gradient1;                
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(line0[1] + (width /2), 0);
          ctx.lineTo(line1[1] + (width /2), height);
          ctx.lineTo(line1[2] + (width /2), height);
          ctx.lineTo(line0[2] + (width /2), 0);
          ctx.closePath();
          ctx.fillStyle = gradient2;                
          ctx.fill();
      }
    }

    function card(ctx, width: number, height: number) {
      const boxWidth = 72;
      const boxHeight = 72;
      const xInset = (boxWidth / 4) * 3;
      const yInset = (boxHeight / 4) * 3;
      const xMargin = 6;
      const yMargin = 6;

      for (let y = -yInset; y < height; y += boxHeight) {
        for (let x = -xInset; x < width; x += boxWidth) {
          if (y === -yInset || x === -xInset || x + boxWidth > width || y + boxHeight > height) {
            ctx.fillStyle = '#000000';
          } else {
            ctx.fillStyle = '#888888';
          }
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + boxWidth - xMargin, y);
          ctx.lineTo(x + boxWidth - xMargin, y + boxHeight - yMargin);
          ctx.lineTo(x, y + boxHeight - yMargin);
          ctx.closePath();
          //ctx.fillStyle = gradient1;                
          ctx.fill();
        }
      }

      let x = 0;
      let y = 0;
      ctx.fillStyle = '#888888';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (boxWidth * 2) - xMargin, y);
      ctx.lineTo(x + (boxWidth * 2) - xMargin, y + (boxHeight * 2) - yMargin);
      ctx.lineTo(x, y + (boxHeight * 2) - yMargin);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc((boxWidth * 4), (boxHeight * 4), (boxHeight * 1.5), 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

    }

    const draw = (ctx, frameCount: number) => {
      //lines(ctx);
      card(ctx, 1920, 1080);
    }        
 


    /*
    const draw = (ctx, frameCount: number) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(170, 50, 30 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
      ctx.fill();
    };
    */
   
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId = 0;

        // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        // let canvas = document.querySelector('#canvas_container');
        // const lines = 100;
        // const width = vw;
        // const height = 3000;
        canvas.width = 1920;
        canvas.height = 1080;


        const render = () => {
          //console.log({width: canvas.width, height:canvas.height });
          frameCount++;
          draw(context, frameCount);
          animationFrameId = window.requestAnimationFrame(render);
        };
        render();
        return () => {
          window.cancelAnimationFrame(animationFrameId);
        };
      }, []);

   
    return (
        <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef} />
    );
}