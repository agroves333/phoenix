import React, { FC, VideoHTMLAttributes } from 'react'

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

const Video: FC<Props> = ({ src, ...props }) => (
  <video
    style={{
      position: 'fixed',
      right: 0,
      bottom: 0,
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'cover',
      width: '100%',
    }}
    {...props}
  >
    <source src={src} type="video/mp4" />
  </video>
)

export default Video
