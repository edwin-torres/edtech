// src/App.jsx
import Tangent from '../Tangent'
import { Canvas } from '@react-three/fiber'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider'
import { useState } from 'react'
export default function ShowTangent() {
  const [x0, setX0] = useState(0.8)
  return (
 <>
    <Canvas
        style={{
          height: '60vh',
          width: '80vw',
          borderRadius: '16px',
          background: '#111',
          margin:"0 auto"
        }}
        shadows
      >
        {/* pass x0 and setter */}
        <Tangent x0={x0} setX0={setX0} />
      </Canvas>
            {/* Slider control */}
      <Box sx={{ width: '60%',
          margin:"0 auto" }}>
        <Slider
          value={x0}
          min={-2}
          max={2}
          step={0.01}
          onChange={(_, v) => setX0(v)}
          sx={{
            color: 'blue',
            '& .MuiSlider-thumb': { width: 20, height: 20 },
          }}
        />
      </Box>
    
        </>
   
  )
}
