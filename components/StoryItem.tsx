import Link from 'next/link';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export default function StoryItem({ story, index }) {
  const { id, title, url, score, by, time, descendants } = story;

  const domain = url ? new URL(url).hostname : '';
  const timeAgo = new Date(time * 1000).toLocaleString();

  return (
    <li className="hacker-box rounded-lg p-4 mb-4">
      <div className="flex items-start">
        <span className="text-green-400 mr-2">{index}.</span>
        <div className="flex-grow">
          <h2 className="story-title mb-1">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                {title}
              </a>
            ) : (
              <Link href={`/item/${id}`} className="hover:text-white transition-colors duration-200">
                {title}
              </Link>
            )}
            {url && (
              <span className="text-sm text-green-300 ml-2">
                ({domain})
              </span>
            )}
          </h2>
          <div className="story-meta">
            {score} points by {by} | {timeAgo}
            <Link href={`/comments/${id}`} className="ml-2 hover:text-white transition-colors duration-200">
              <MessageSquare className="inline-block w-4 h-4 mr-1" />
              {descendants} comments
            </Link>
          </div>
        </div>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white transition-colors duration-200">
            <ArrowUpRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </li>
  );
}