'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import Comment from '@/components/Comment';

export default function ItemContent({ id }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const data = await response.json();
        setItem(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item:', error);
        setLoading(false);
      }
    }

    fetchItem();
  }, [id]);

  if (loading) {
    return <div className="text-center binary-loading"></div>;
  }

  if (!item) {
    return <div className="text-center">Item not found</div>;
  }

  const { title, url, score, by, time, text, kids } = item;
  const domain = url ? new URL(url).hostname : '';
  const timeAgo = new Date(time * 1000).toLocaleString();

  return (
    <div className="hacker-box rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-2">
        {title}
        {url && (
          <span className="text-sm text-green-300 ml-2">
            ({domain})
          </span>
        )}
      </h1>
      <div className="text-sm text-green-400 mb-4">
        {score} points by {by} | {timeAgo}
      </div>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white transition-colors duration-200 flex items-center mb-4">
          <ArrowUpRight className="w-4 h-4 mr-1" />
          Visit link
        </a>
      )}
      {text && <div className="mb-6" dangerouslySetInnerHTML={{ __html: text }} />}
      <h2 className="text-xl font-semibold mb-4">
        <MessageSquare className="inline-block w-5 h-5 mr-2" />
        Comments
      </h2>
      {kids && kids.length > 0 ? (
        <div className="space-y-4">
          {kids.map(commentId => (
            <Comment key={commentId} id={commentId} />
          ))}
        </div>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}