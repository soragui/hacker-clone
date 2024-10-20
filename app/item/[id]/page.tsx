import { Suspense } from 'react';
import ItemContent from '@/components/ItemContent';

export default function ItemPage({ params }) {
  return (
    <Suspense fallback={<div className="text-center">Loading item...</div>}>
      <ItemContent id={params.id} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  // This is a placeholder function to satisfy the static export requirement
  // In a real-world scenario, you might want to generate paths for the most popular items
  return [];
}