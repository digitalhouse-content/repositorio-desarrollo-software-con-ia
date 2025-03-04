import Image from "next/image"

interface PostProps {
  content: string
  image?: string
}

export default function Post({ content, image }: PostProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-colors duration-300">
      <p className="text-gray-800 dark:text-gray-200 mb-4">{content}</p>
      {image && (
        <div className="relative h-64 w-full">
          <Image src={image || "/placeholder.svg"} alt="Post image" fill className="object-cover rounded-md" />
        </div>
      )}
    </div>
  )
}

