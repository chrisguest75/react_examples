import styles from './testcard.module.css';
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';

type CardDimensions = {
  width: number;
  height: number;
}

export default function TestCard( dimensions: CardDimensions ) {
    const canvasRef = useRef(null)

    function card4_3(ctx: CanvasRenderingContext2D, width: number, height: number) {
      const boxWidth = 72;
      const boxHeight = 72;
      const xInset = (boxWidth / 3) * 2;
      const yInset = (boxHeight / 2) * 1;
      const xMargin = 6;
      const yMargin = 6;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // borders
      let yOdd = false
      for (let y = -yInset; y < height; y += boxHeight) {
        let xOdd = false
        for (let x = -xInset; x < width; x += boxWidth) {
          if (y === -yInset || x === -xInset || x + boxWidth > width || y + boxHeight > height) {
            if (yOdd) {
              if (xOdd) {
                ctx.fillStyle = '#000000';
              } else {  
                ctx.fillStyle = '#FFFFFF';
              }
            } else {
              if (xOdd) {
                ctx.fillStyle = '#FFFFFF';
              } else {  
                ctx.fillStyle = '#000000';
              }
            }
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
          xOdd == false ? xOdd = true: xOdd = false
        }
        yOdd == false ? yOdd = true: yOdd = false
      }
    }

    function card16_9(ctx: CanvasRenderingContext2D, width: number, height: number) {
      const boxWidth = 72;
      const boxHeight = 72;
      const xInset = (boxWidth / 3) * 2;
      const yInset = (boxHeight / 2) * 1;
      const xMargin = 6;
      const yMargin = 6;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // borders
      let yOdd = false
      for (let y = -yInset; y < height; y += boxHeight) {
        let xOdd = false
        for (let x = -xInset; x < width; x += boxWidth) {
          if (y === -yInset || x === -xInset || x + boxWidth > width || y + boxHeight > height) {
            if (yOdd) {
              if (xOdd) {
                ctx.fillStyle = '#000000';
              } else {  
                ctx.fillStyle = '#FFFFFF';
              }
            } else {
              if (xOdd) {
                ctx.fillStyle = '#FFFFFF';
              } else {  
                ctx.fillStyle = '#000000';
              }
            }
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
          xOdd == false ? xOdd = true: xOdd = false
        }
        yOdd == false ? yOdd = true: yOdd = false
      }

      // big boxes
      const boxes = [
        [ (boxWidth * 3) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#888888'],
        [ (boxWidth * 3) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#888888'],
        [ (boxWidth * 23) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#888888'],
        [ (boxWidth * 23) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#888888'],
        [ (boxWidth * 6) - xInset, (boxHeight * 2) - yInset, (boxWidth), (boxHeight * 6), '#13836C'],
        [ (boxWidth * 7) - xInset, (boxHeight * 2) - yInset, (boxWidth), (boxHeight * 2), '#4D66A9'],
        [ (boxWidth * 6) - xInset, (boxHeight * 8) - yInset, (boxWidth), (boxHeight * 6), '#B54E68'],
        [ (boxWidth * 7) - xInset, (boxHeight * 12) - yInset, (boxWidth), (boxHeight * 2), '#927227'],
        [ (boxWidth * 20) - xInset, (boxHeight * 2) - yInset, (boxWidth), (boxHeight * 2), '#4D66A9'],
        [ (boxWidth * 21) - xInset, (boxHeight * 2) - yInset, (boxWidth), (boxHeight * 6), '#6A8328'],
        [ (boxWidth * 21) - xInset, (boxHeight * 8) - yInset, (boxWidth), (boxHeight * 6), '#655A9D'],

        [ (boxWidth * 20) - xInset, (boxHeight * 12) - yInset, (boxWidth), (boxHeight * 2), '#927227'],

      ]
      
      for (let index = 0; index < boxes.length; index++)
      {
        let x = boxes[index][0];
        let y = boxes[index][1];
        let w = boxes[index][2];
        let h = boxes[index][3];
        ctx.fillStyle = boxes[index][4];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + w - xMargin, y);
        ctx.lineTo(x + w - xMargin, y + h - yMargin);
        ctx.lineTo(x, y + h - yMargin);
        ctx.closePath();
        ctx.fill();  
      }

      // grills
      const grills = [
        [ (boxWidth * 3) - xInset, (boxHeight * 5) - yInset + ((boxHeight / 5) * 0), (boxWidth * 1), (boxHeight / 5), '#000000'],
        [ (boxWidth * 3) - xInset, (boxHeight * 5) - yInset + ((boxHeight / 5) * 1), (boxWidth * 1), (boxHeight / 5), '#FFFFFF'],
        [ (boxWidth * 3) - xInset, (boxHeight * 5) - yInset + ((boxHeight / 5) * 2), (boxWidth * 1), (boxHeight / 5), '#000000'],
        [ (boxWidth * 3) - xInset, (boxHeight * 5) - yInset + ((boxHeight / 5) * 3), (boxWidth * 1), (boxHeight / 5), '#FFFFFF'],
        [ (boxWidth * 3) - xInset, (boxHeight * 5) - yInset + ((boxHeight / 5) * 4), (boxWidth * 1), (boxHeight / 5), '#000000'],
      ]
      
      for (let index = 0; index < grills.length; index++)
      {
        let x = grills[index][0];
        let y = grills[index][1];
        let w = grills[index][2];
        let h = grills[index][3];
        ctx.fillStyle = grills[index][4];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.closePath();
        ctx.fill();  
      }


      // circles
      const circles = [
        [ (boxWidth * 4) - xInset, (boxHeight * 3) - yInset ],
        [ (boxWidth * 4) - xInset, (boxHeight * 13) - yInset ],
        [ (boxWidth * 24) - xInset, (boxHeight * 3) - yInset ],
        [ (boxWidth * 24) - xInset, (boxHeight * 13) - yInset ],
      ]

      for (let index = 0; index < circles.length; index++)
      {
        let x = circles[index][0];
        let y = circles[index][1];
        ctx.fillStyle = '#000000';
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(x, y, (boxHeight * 1.5), 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = '#FFFFFF';
        ctx.lineWidth = (boxHeight);
        ctx.beginPath();
        ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 8) * 0, ((2 * Math.PI) / 8) * 1);
        ctx.stroke();
        ctx.closePath();
        // ctx.fillStyle = '#FF0000';
        // ctx.lineWidth = (boxHeight);
        // ctx.beginPath();
        // ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 16) * 0, ((2 * Math.PI) / 16) * 2);
        // ctx.stroke();
        // ctx.closePath();

        ctx.fillStyle = '#FFFFFF';
        ctx.lineWidth = (boxHeight);
        ctx.beginPath();
        ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 8) * 2, ((2 * Math.PI) / 8) * 3);
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = '#FFFFFF';
        ctx.lineWidth = (boxHeight);
        ctx.beginPath();
        ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 8) * 4, ((2 * Math.PI) / 8) * 5);
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = '#FFFFFF';
        ctx.lineWidth = (boxHeight);
        ctx.beginPath();
        ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 8) * 6, ((2 * Math.PI) / 8) * 7);
        ctx.stroke();
        ctx.closePath();


        /*ctx.beginPath();
        ctx.arc(x, y, (boxHeight), ((2 * Math.PI) / 8) * 2, ((2 * Math.PI) / 8) * 1);
        ctx.stroke();
        ctx.closePath();*/

        /*ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(x, y, (boxHeight), 0.125, 0.20 * Math.PI);
        ctx.stroke();*/


        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(x, y, (boxHeight * 0.5), 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(x, y, (boxHeight * 0.40), 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(x, y, (boxHeight * 0.30), 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(x, y, (boxHeight * 0.20), 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
      }

      // big circle
      const inside = [
        [ (boxWidth * 8) - xInset, (boxHeight * 2) - yInset, (boxWidth * 12), (boxHeight * 2), '#FFFFFF'],

        [ (boxWidth * 8) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#AAAAAA'],
        [ (boxWidth * 9) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#000000'],
        [ (boxWidth * 10) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#AAAAAA'],
        [ (boxWidth * 11) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#000000'],
        [ (boxWidth * 12) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#AAAAAA'],
        [ (boxWidth * 13) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#000000'],
        [ (boxWidth * 14) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#AAAAAA'],
        [ (boxWidth * 15) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#000000'],
        [ (boxWidth * 16) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#AAAAAA'],
        [ (boxWidth * 17) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#000000'],
        [ (boxWidth * 18) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#AAAAAA'],
        [ (boxWidth * 19) - xInset, (boxHeight * 4) - yInset, (boxWidth * 1), (boxHeight * 2), '#000000'],

        [ (boxWidth * 8) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#B3B604'],
        [ (boxWidth * 10) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#19B6B2'],
        [ (boxWidth * 12) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#17B803'],
        [ (boxWidth * 14) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#AF00B3'],
        [ (boxWidth * 16) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#B10004'],
        [ (boxWidth * 18) - xInset, (boxHeight * 5) - yInset, (boxWidth * 2), (boxHeight * 2), '#0900B2'],

        [ (boxWidth * 8) - xInset, (boxHeight * 7) - yInset, (boxWidth * 12), (boxHeight * 1), '#000000'],

        [ (boxWidth * 8) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#000000'],
        [ (boxWidth * 10) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#888888'],
        [ (boxWidth * 12) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#000000'],
        [ (boxWidth * 14) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#888888'],
        [ (boxWidth * 16) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#000000'],
        [ (boxWidth * 18) - xInset, (boxHeight * 8) - yInset, (boxWidth * 2), (boxHeight * 2), '#888888'],

        [ (boxWidth * 8) - xInset, (boxHeight * 10) - yInset, (boxWidth * 2), (boxHeight * 1), '#000000'],
        [ (boxWidth * 10) - xInset, (boxHeight * 10) - yInset, (boxWidth * 2), (boxHeight * 1), '#333333'],
        [ (boxWidth * 12) - xInset, (boxHeight * 10) - yInset, (boxWidth * 2), (boxHeight * 1), '#666666'],
        [ (boxWidth * 14) - xInset, (boxHeight * 10) - yInset, (boxWidth * 2), (boxHeight * 1), '#999999'],
        [ (boxWidth * 16) - xInset, (boxHeight * 10) - yInset, (boxWidth * 2), (boxHeight * 1), '#CCCCCC'],
        [ (boxWidth * 18) - xInset, (boxHeight * 10) - yInset, (boxWidth * 2), (boxHeight * 1), '#FFFFFF'],

        [ (boxWidth * 8) - xInset, (boxHeight * 11) - yInset, (boxWidth * 11), (boxHeight * 1), '#FFFFFF'],

        [ (boxWidth * 8) - xInset, (boxHeight * 12) - yInset, (boxWidth * 5), (boxHeight * 2), '#B3B604'],
        [ (boxWidth * 13) - xInset, (boxHeight * 12) - yInset, (boxWidth * 2), (boxHeight * 2), '#B10004'],
        [ (boxWidth * 15) - xInset, (boxHeight * 12) - yInset, (boxWidth * 5), (boxHeight * 2), '#B3B604'],

        [ (boxWidth * 11.5) - xInset, (boxHeight * 2.5) - yInset, (boxWidth * 4.5), (boxHeight * 1.5), '#000000'],
        [ (boxWidth * 11) - xInset, (boxHeight * 11) - yInset, (boxWidth * 5.5), (boxHeight * 1), '#000000'],
      ]

      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, (height / 2) - boxHeight * 1.5, 0, 2 * Math.PI);
      ctx.clip();
     for (let index = 0; index < inside.length; index++)
      {
        let x = inside[index][0];
        let y = inside[index][1];
        let w = inside[index][2];
        let h = inside[index][3];
        ctx.fillStyle = inside[index][4];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.closePath();
        ctx.fill();  
      }

      ctx.font = "50px Roboto Condensed";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center"
      ctx.fillText("TRINT TEST", (boxWidth * 13) , (boxHeight * 3.5) - yInset);
      ctx.fillText(`${width}*${height} 16:9`, (boxWidth * 13) , (boxHeight * 11.75) - yInset);

      ctx.restore()
    }

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number, width: number, height: number) => {
      if (width == 1920 && height == 1080) {
        card16_9(ctx, width, height);
      } else {
        card4_3(ctx, width, height);
      }
    }
  
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

        // 16:9
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        // 9:16
        // canvas.width = 1080;
        // canvas.height = 1920;

        // 4:3
        // canvas.width = 1440;
        // canvas.height = 1080;
        
        // 5:4
        // canvas.width = 1350;
        // canvas.height = 1080;


        const render = () => {
          //console.log({width: canvas.width, height:canvas.height });
          frameCount++;
          draw(context, frameCount, canvas.width, canvas.height);
          animationFrameId = window.requestAnimationFrame(render);
        };
        render();
        return () => {
          window.cancelAnimationFrame(animationFrameId);
        };
      }, []);

   
    return (
        <canvas className={styles.canvas} style={{ width: '100%', height: '100%' }} ref={canvasRef} />
    );
}