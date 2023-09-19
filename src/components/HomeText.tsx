import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

export default function HomeText() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#ffffff',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '##f9ad5b' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#454545' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Cody', 'Anderson']), 2000))
    ref.current.push(setTimeout(() => set(['Software', 'Engineer']), 5000))
    ref.current.push(setTimeout(() => set(['Cody', 'Anderson','Software', 'Engineer' ]), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          minWidth: '100px',
          padding: '0 20px',
          margin: '0 auto',
          height: '500px',
        }}
      >
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            style={{
              overflow: 'hidden',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              fontSize: '5em', 
              fontWeight: 800,
              textTransform: 'uppercase',
              willChange: 'transform, opacity, height',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              lineHeight: '80px',
              ...rest, 
            }}
            onClick={reset}
          >
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
