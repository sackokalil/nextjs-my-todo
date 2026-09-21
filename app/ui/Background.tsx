import Image from "next/image"
export default function Background() {
  return (
    <Image 
        src="/christmas-background.jpg"
        alt="Background with snow"
        quality={100}
        fill={true}
        sizes="100vw"
        style={{
            objectFit: 'cover',
            zIndex:'-5'/*so that background will not mask element*/ 
        }}

    />
  )
}
