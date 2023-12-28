# README

Create a canvas exporter.  

TODO:

* Resizing canvas maintaing aspect ratio
  * (600 / 1920) * 1080.
  * width = 600, height = 337
* Saving mulitple images
* Toast appearing and fading out

## Install

```sh
# switch versions
nvm use  

# install modules
npm install

# run
npm run dev
```

Now click the hyperlink.  

## How to run

```sh
nvm use
npm install

# use typescript compiler
npm run tsc -- --version  

# run targets
npm run start:dev
npm run test
npm run lint

# docker build
#npm run docker:build
#npm run docker:run


# give info on image
file ~/Downloads/canvas.png
open  ~/Downloads/canvas.png
```

## Created

```sh
npx create-next-app --typescript 11_canvas_exporter
npm i -D daisyui@latest
```

## Resources

* Canvas with React.js [here](https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258)
* The most popular component library for Tailwind CSS [here](https://daisyui.com/)  

* https://github.com/joschan21/canvas-drawing-app

* https://julien-decharentenay.medium.com/how-to-save-html-canvas-animation-as-a-video-421157c2203b

* https://ninza7.medium.com/i-built-a-whiteboard-canvas-drawing-app-using-next-js-and-react-7eb0a1a490ba

* https://borstch.com/blog/development/integrating-tailwind-css-with-nextjs-14
