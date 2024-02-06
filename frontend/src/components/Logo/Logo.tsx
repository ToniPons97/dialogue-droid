import Image from 'next/image'

type LogoProps = {
  width: number 
  height: number
}

const Logo = ({width, height}: LogoProps) => {
  return (
    <div style={{flex: 0.9}}>
      <Image
        width={width}
        height={height}
        src='/logo.png'
        alt='DialogueDroid Logo'
        priority
      />
    </div>
  )
}

export default Logo