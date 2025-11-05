import { Transition } from "motion/react"
import * as motion from "motion/react-client"

const transition: Transition = {
    duration: 7,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
}
const trajectory = "M 150 200 Q 275 -50 405 200"
export default function MotionPath() {
    
    return (
        <div style={{ position: "relative" , background:"#ffffffff", 
            
          width: 600,
          height:500,
          margin: "0 auto",
        
        
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="555" height="555">
                <motion.path
                    d={trajectory}
                    fill="transparent"
                    strokeWidth="8"
                    stroke="black"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />
            </svg>
            <motion.div
                style={box}
                initial={{ offsetDistance: "0%", scale: 2, rotate: 25}}
                animate={{ offsetDistance: "100%", scale: 2, rotate:45 }}
                transition={transition}
            >   {/* Rocket sits slightly higher inside container */}
        <div style={rocket}>🚀</div></motion.div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const box: React.CSSProperties = {
    width: 0,
    height: 0,
    backgroundColor: "#8df0cc",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
    offsetPath: `path("${trajectory}")`, 
   
    
    
}
const rocket = {
  fontSize: "2rem",
  transform: " translateY(-60%) translateX(-25px)", // 🔥 adjust upward to sit ON the path
   
 
}