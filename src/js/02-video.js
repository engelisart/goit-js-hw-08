import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframeElemVideo = document.querySelector('#vimeo-player');

const player = new Player(iframeElemVideo, {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
     
    localStorage.setItem("videoplayer-current-time", event.seconds)
}

player.on('loaded',async(event)=>{
    secs = localStorage.getItem('videoplayer-current-time')
    try{

        await player.setCurrentTime(secs)
    }
    catch(e){
        console.log(e)
    }

})





