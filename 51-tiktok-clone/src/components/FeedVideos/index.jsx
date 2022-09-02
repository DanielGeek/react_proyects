import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'ruziotaku',
    description: '🎥 Nuevo color Genteeee 🎨💈👀. #cualquier #cosa #otra #cosa',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'cualquier cosa....',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665515557763077~c5_100x100.jpeg?x-expires=1662256800&x-signature=FnwWB7GKc%2BfmAEN6vUJ4SQ5rHBk%3D',
    src: 'https://v16-webapp.tiktok.com/7ddd22f70d8c0a6a401ca1b9cc81d5b4/6312c09e/video/tos/useast2a/tos-useast2a-ve-0068c002/89fc81145246472c9c5cb84fc01504f2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4754&bt=2377&cs=0&ds=3&ft=ar5S8qqwmo0PDiW-SMaQ9MtJzObpkV1PCA&mime_type=video_mp4&qs=0&rc=PDhpN2gzZDk2ZDU2ZGc4O0BpajV4OTU6Zm5xZjMzNzczM0A1LWA0NjM0Ni0xYjAwNC5jYSNrYTM0cjRvYi9gLS1kMTZzcw%3D%3D&l=202209022047570101920550560D4C3590&btag=80000'
  },
  {
    id: 2,
    author: 'ruziotaku',
    description: '🎥 Nuevo color Genteeee 🎨💈👀. #cualquier #cosa #otra #cosa',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'cualquier cosa....',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1665515557763077~c5_100x100.jpeg?x-expires=1662256800&x-signature=FnwWB7GKc%2BfmAEN6vUJ4SQ5rHBk%3D',
    src: 'https://v16-webapp.tiktok.com/92844bdc432b714e6d9007e5db11ed29/6312c08a/video/tos/useast2a/tos-useast2a-ve-0068c003/b6b5f01b98024781b58cb518f344b407/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3680&bt=1840&cs=0&ds=3&ft=ar5S8qqwmo0PDiW-SMaQ9MtJzObpkV1PCA&mime_type=video_mp4&qs=0&rc=ZmlpM2loZjU5NzQ0ZTloOkBpM3R2ZDo6ZnM0ZjMzNzczM0AuMl81LjM1XzYxYTU1YTAzYSNyMGJxcjRfMjZgLS1kMTZzcw%3D%3D&l=202209022047570101920550560D4C3590&btag=80000'
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
