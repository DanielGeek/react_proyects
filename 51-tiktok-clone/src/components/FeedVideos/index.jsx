import VideoPlayer from '../VideoPlayer'

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
    src: 'https://v16-webapp.tiktok.com/74e1291b49d6d4b0c149cf9934df3437/6311b1cd/video/tos/useast2a/tos-useast2a-ve-0068c001/c538f01a391847da86a248e9d95a3ad8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2146&bt=1073&cs=0&ds=3&ft=gKSYZ88Uo0PD1rnMYyg9w~XE75LiaQ2D~bT&mime_type=video_mp4&qs=0&rc=NTo2OjY0ZmhoODY2aGU1aEBpMzl5dzk6ZnBvZjMzNzczM0AyYTEuLi01Ni4xYC01YTMwYSNjLmA1cjQwcy1gLS1kMTZzcw%3D%3D&l=20220902013202010189071069006D1A76&btag=80000'
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
    src: 'https://v16-webapp.tiktok.com/4f849b5f82cad35cac33f9cf57ea1a42/6311c2dd/video/tos/useast2a/tos-useast2a-pve-0068/d8fb18983ccb433c8e2278f6b5fd32bc/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3172&bt=1586&cs=0&ds=3&ft=eXd.6HHvMyq8Zs~b.he2N9RCol7Gb&mime_type=video_mp4&qs=0&rc=NzU6NDQ3ZzM7OjY5PGg2NUBpamo7NDU6ZjNpZDMzNzczM0AzMF4yYTE1NjExLjZjM2ExYSMxcHMwcjQwcXJgLS1kMTZzcw%3D%3D&l=2022090202444501022307604227727847&btag=80000'
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => {
      return <VideoPlayer key={video.id} {...video} />
    })
  )
}
