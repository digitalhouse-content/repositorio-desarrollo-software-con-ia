import Feed from "@/components/Feed"
import ThemeSwitch from "@/components/ThemeSwitch"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Social Media Feed</h1>
        <ThemeSwitch />
      </div>
      <Feed />
    </main>
  )
}

