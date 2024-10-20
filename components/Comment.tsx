'use client';

import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function Comment({ id }) {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    async function fetchComment() {
      try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const data = await response.json();
        setComment(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comment:', error);
        setLoading(false);
      }
    }

    fetchComment();
  }, [id]);

  if (loading) {
    return <div className="text-sm text-green-400 binary-loading"></div>;
  }

  if (!comment) {
    return null;
  }

  const { by, time, text, kids } = comment;
  const timeAgo = new Date(time * 1000).toLocaleString();

  return (
    <div className="border-l-2 border-green-500 pl-4 mb-4 hacker-box rounded-lg p-4">
      <div className="comment-meta mb-2">
        {by} | {timeAgo}
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-2 text-green-500 hover:text-white transition-colors duration-200"
        >
          [{expanded ? 'collapse' : 'expand'}]
        </button>
      </div>
      {expanded && (
        <>
          <div className="comment-text mb-2" dangerouslySetInnerHTML={{ __html: text }} />
          {kids && kids.length > 0 && (
            <div className="mt-2">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-green-500 hover:text-white transition-colors duration-200 flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                {kids.length} {kids.length === 1 ? 'reply' : 'replies'}
              </button>
              {expanded && (
                <div className="mt-2">
                  {kids.map(childId => (
                    <Comment key={childId} id={childId} />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}