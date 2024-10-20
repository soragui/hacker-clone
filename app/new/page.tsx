import StoryList from '@/components/StoryList';

export default function NewStories() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">New Stories</h1>
      <StoryList type="new" />
    </div>
  );
}