"use client"

interface NewsImageProps {
  src: string
  alt: string
  title: string
}

export default function NewsImage({ src, alt, title }: NewsImageProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23dc2626'/%3E%3Ctext x='600' y='400' text-anchor='middle' fill='white' font-size='24'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={handleImageError}
    />
  )
}
