# README

Create a threejs example.  

TODO:

* Fix sizing down
* Turn on and off arrows
* Add a textured and shader example.
* Morphing meshes

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
npm run dev
npm run test
npm run lint

# docker build
#npm run docker:build
#npm run docker:run
```

## Created

NOTE: "use client"; must be added to the pages.  

```sh
npx create-next-app --typescript 12_threejs
#npm i -D daisyui@latest
npm install --save  @react-three/fiber @react-three/drei
npm install --save leva
npm install --save-dev @types/three  
```

## Resources

### React

* Conditional rendering [here](https://react.dev/learn#conditional-rendering)
* https://gist.github.com/aarosil/c370d8beb6aa0f7166bf6ba4a4270928

### Tailwind

* Get started with Tailwind CSS [here](https://tailwindcss.com/docs/installation)
* A guide to adding gradients with Tailwind CSS [here](https://blog.logrocket.com/guide-adding-gradients-tailwind-css)  
* A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image. [here](https://hypercolor.dev/)

### React-Fiber

* React Three Fiber Docs [here](https://gracious-keller-98ef35.netlify.app/docs/)
* What are React and React Three Fiber [here](https://threejs-journey.com/lessons/what-are-react-and-react-three-fiber#react-three-fiber)
* Pmndrs.docs [here](https://docs.pmnd.rs/)
* Introduction - React-three-fiber is a React renderer for three.js. [here](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
* https://codesandbox.io/p/sandbox/confetti-vl221
* https://github.com/pmndrs/drei#readme
* https://stackoverflow.com/questions/69891379/react-three-fiber-to-draw-custom-vertices
* https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/

### Leva

* pmndrs/leva repo [here](https://github.com/pmndrs/leva)
* leva ui sandbox [here](https://codesandbox.io/p/sandbox/leva-ui-45bkg?file=%2Fsrc%2FApp.js%3A27%2C1-32%2C9)
