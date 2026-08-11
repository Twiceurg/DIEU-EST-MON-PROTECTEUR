import { useEffect, useState } from 'react';

const VISITOR_KEY = 'demp_visitor_counted';
const COUNT_KEY = 'demp_visitor_count';
const BASE_VISITORS = 12548;

export function useVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(BASE_VISITORS);

  useEffect(() => {
    // In a real app, this would call ApiVisitorCounter
    // For this frontend-only version, we use LocalStorageVisitorCounter
    const hasVisited = localStorage.getItem(VISITOR_KEY);
    const storedCount = localStorage.getItem(COUNT_KEY);
    
    let currentCount = storedCount ? parseInt(storedCount, 10) : BASE_VISITORS;

    if (!hasVisited) {
      currentCount += 1;
      localStorage.setItem(VISITOR_KEY, 'true');
      localStorage.setItem(COUNT_KEY, currentCount.toString());
    }
    
    setVisitorCount(currentCount);
  }, []);

  return visitorCount;
}
