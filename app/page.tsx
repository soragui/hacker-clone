import StoryList from '@/components/StoryList';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Top Stories</h1>
      <StoryList />
    </div>
  );
}