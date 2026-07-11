import Image from "next/image"

type PostProps = {
  image: string
  label?: string
}

export function Post({ image, label }: PostProps) {
  return (
    <div className="group relative aspect-square bg-white">
      <Image src={image} alt={label || ""} fill className="object-cover" />
      {label && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center p-2">
          <span className="text-white text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity leading-tight font-medium">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
