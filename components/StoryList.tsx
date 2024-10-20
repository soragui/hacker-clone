'use client';

import { useState, useEffect } from 'react';
import StoryItem from './StoryItem';

export default function StoryList({ type = 'top' }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchStories = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json`);
      const storyIds = await response.json();

      const start = (pageNumber - 1) * 30;
      const end = start + 30;
      const pageStoryIds = storyIds.slice(start, end);

      const storyPromises = pageStoryIds.map(id =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
      );
      const fetchedStories = await Promise.all(storyPromises);
      
      setStories(prevStories => [...prevStories, ...fetchedStories]);
      setHasMore(end < storyIds.length);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stories:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setStories([]);
    setPage(1);
    fetchStories(1);
  }, [type]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    fetchStories(page + 1);
  };

  return (
    <div>
      <ul className="space-y-4">
        {stories.map((story, index) => (
          <StoryItem key={`${story.id}-${index}`} story={story} index={(page - 1) * 30 + index + 1} />
        ))}
      </ul>
      {hasMore && (
        <div className="mt-8 text-center">
          <button onClick={loadMore} disabled={loading} className="load-more-btn rounded transition-colors duration-200">
            {loading ? <span className="binary-loading"></span> : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}