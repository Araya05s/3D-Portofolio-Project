import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html 
    as='div' 
    center
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
        <div>
          <span className="canvas-Loader"/>
          <p style={{fontSize : 14, color: '#F1F1F1', fontWeight: 800, marginTop: 400}}>
            {progress !== 100 ? `${progress.toFixed(2)}%` : 'Loading...'}
          </p>
        </div>
    </Html>
  )
}

export default CanvasLoader