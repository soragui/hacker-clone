import { Suspense } from 'react';
import CommentsContent from '@/components/CommentsContent';

export default function CommentsPage({ params }) {
  return (
    <Suspense fallback={<div className="text-center">Loading comments...</div>}>
      <CommentsContent id={params.id} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  // This is a placeholder function to satisfy the static export requirement
  // In a real-world scenario, you might want to generate paths for the most popular items
  return [];
}