# MEYDA

Demonstrate setting up `meyda` and process audio.  

TODO:

* Work out signals for triggering gfx.  
* Select input from microphone or file.  
* Override playback controls.  
* Is it possible to add this to a webrtc page?  

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
```

## Created

```sh
npx create-next-app --typescript 14_meyda
npx shadcn@latest init


```

## Resources

* https://ui.shadcn.com/docs/installation/next
* https://meyda.js.org/audio-features
* https://github.com/meyda/meyda
* https://meyda.js.org/guides/online-web-audio
* https://codesandbox.io/p/sandbox/using-beatdetektor-with-meyda-forked-lvlpu?file=%2Fsrc%2Findex.js
* https://github.com/maximux13/waveform-renderer
* https://waveform-renderer.vercel.app/