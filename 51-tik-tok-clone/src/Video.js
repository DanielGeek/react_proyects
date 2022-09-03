import React, { useRef } from 'react'
import './Video.css'

function Video() {
  const videoRef = useRef(null);

  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/8d1c5e4e73a574c478e782b1abe4f06c/6312dd65/video/tos/useast2a/tos-useast2a-pve-0068/a3c5a030477741af973b873a76dd32b1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4182&bt=2091&cs=0&ds=3&ft=gKSYZ88Uo0PD1aRnYyg9w.U2O5LiaQ2D~18&mime_type=video_mp4&qs=0&rc=aDRnZjk8aTZnOzs2OztmaEBpM2tqOGY6ZmlvZTMzNzczM0A0LmMuNDEwNi4xNmIwMy9iYSMwZnA2cjRvLm5gLS1kMTZzcw%3D%3D&l=20220902225035010189056034025A5754&btag=80000"
        ></video>
    </div>
  )
}

export default Video