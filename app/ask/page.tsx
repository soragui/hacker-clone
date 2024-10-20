import StoryList from '@/components/StoryList';

export default function AskStories() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ask HN</h1>
      <StoryList type="ask" />
    </div>
  );
}