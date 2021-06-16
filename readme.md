# Soundboard

This project is fully written in React-Native and it is a Soundboard that displays sounds in order to make music.

## Packages used

Expo-av (playing and recording sounds)
React-Navigation
Axios
Redux
Ionicons

## What can you do on the app ?

In this actual state, you can play a sound on the Sampler, handle the sound you want to display on the Sampler by long pressing a button.

You have a Library of sounds, where you can see all your sounds, and you can also record a new sound with your phone's microphone.

You can search a sound as we're using the Freesound API on the Search screen.

## State management

Redux is the solution we're using on our app to deal with state management.

## Difficulties

It was hard to use the Freesound API as the 0Auth is a hard thing to deal with, because of that on our Search view, we can only search the sound but not download it.
Expo was also really weird, and not working for some days, when scanning the QR Code on my phone it would not let me launch the app (without showing errors), so it was really frustrating working with Expo.
