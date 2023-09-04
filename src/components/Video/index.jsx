import { useEffect, useRef, useState } from "react";


const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState('');
  const videoRef = useRef(null);


  // useEffect(() => {}) - запускается после каждого рендера
  // useEffect(() => {}, []) - запускается один раз при создании компонента
  // useEffect(() => {}, [list, of, depend]) // при создании и каждый раз при изменении зависимости 

  // useEffect(() => {
  //    const response = fetch... получили данные
  //    setData(response)
  // }, [])

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    console.log('Эффект только для плеера')
  }, [isPlaying]) // перезапустится один раз при первой отрисовке компонента
  // и каждый раз когда произойдет изменение в списке его зависимостей



  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'stop' : 'play'}
      </button>
      <video 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        ref={videoRef}
        loop
        playsInline
      />
    </>
  ) 
}

export default Video;