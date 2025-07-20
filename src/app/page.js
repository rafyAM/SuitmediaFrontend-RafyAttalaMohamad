"use client";

import { useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';

const Header = lazy(() => import('@/components/Header'));
const Banner = lazy(() => import('@/components/Banner'));
const Controls = lazy(() => import('@/components/Controls'));
const Card = lazy(() => import('@/components/Card'));
const Pagination = lazy(() => import('@/components/Pagination'));

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sort, setSort] = useState('-published_at');

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${size}&append[]=medium_image&sort=${sort}`;
        const res = await axios.get(url);
        console.log('Fetched data:', res.data.data);
        setPosts(res.data.data);
      } catch (error) {
        console.error('Failed to fetch ideas:', error);
      }
    };
    fetchIdeas();
  }, [page, size, sort]);

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading Banner...</div>}>
        <Banner />
      </Suspense>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Suspense fallback={<div>Loading Controls...</div>}>
          <Controls size={size} setSize={setSize} sort={sort} setSort={setSort} page={page} />
        </Suspense>
        <Suspense fallback={<div>Loading Cards...</div>}>
          <Card posts={posts} />
        </Suspense>
        <Suspense fallback={<div>Loading Pagination...</div>}>
          <Pagination page={page} setPage={setPage} />
        </Suspense>
      </div>
    </div>
  );
}
