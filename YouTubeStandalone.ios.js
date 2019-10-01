import React from 'react';
import { NativeModules } from 'react-native';

const { YouTubeStandalone } = NativeModules;

export const YouTubeStandaloneIOS = !YouTubeStandalone
    ? null
    : {
        playVideo: (videoId, startTime = 0) =>
            new Promise((resolve, reject) => {
                YouTubeStandalone.playVideo(videoId, startTime)
                .then(() => resolve())
                .catch(errorMessage => reject(errorMessage));
            }),
    };