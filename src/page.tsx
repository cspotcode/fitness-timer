import {Howler, Howl} from 'howler';
import * as React from 'react';
import {render} from 'react-dom';
import {State, Ui} from './logic';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const sounds = {
    start: new Howl({
      src: ['start.mp3']
    }),
    stop: new Howl({
      src: ['stop.mp3']
    }),
}

const state = new State();
render(
  <Ui state={state}/>,
  document.getElementById('root')
);
