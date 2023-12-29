# README

Create a threejs example.  

TODO:

* Fix sizing down
* background gradient
* leva options
* try a glenz example

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

### Tailwind

* A guide to adding gradients with Tailwind CSS [here](https://blog.logrocket.com/guide-adding-gradients-tailwind-css)  

### React-Fiber

* What are React and React Three Fiber [here](https://threejs-journey.com/lessons/what-are-react-and-react-three-fiber#react-three-fiber)
* Pmndrs.docs [here](https://docs.pmnd.rs/)
* Introduction - React-three-fiber is a React renderer for three.js. [here](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
* https://codesandbox.io/p/sandbox/confetti-vl221
* https://github.com/pmndrs/drei#readme

### Leva

* pmndrs/leva repo [here](https://github.com/pmndrs/leva)
* https://codesandbox.io/p/sandbox/leva-ui-45bkg?file=%2Fsrc%2FApp.js%3A27%2C1-32%2C9

https://hypercolor.dev/