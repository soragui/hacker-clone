import StoryList from '@/components/StoryList';

export default function ShowStories() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Show HN</h1>
      <StoryList type="show" />
    </div>
  );
}