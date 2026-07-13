import Image from "next/image"

type PostProps = {
  image: string
  label?: string
}

export function Post({ image, label }: PostProps) {
  return (
    <div className="relative aspect-square bg-white">
      <Image src={image} alt={label || ""} fill sizes="(min-width: 896px) 299px, 33vw" className="object-cover" />
    </div>
  )
}
