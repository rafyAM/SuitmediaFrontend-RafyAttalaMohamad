"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Controls from '@/components/Controls';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';

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
        setPosts(res.data.data);
      } catch (error) {
        console.error('Failed to fetch ideas:', error);
      }
    };
    fetchIdeas();
  }, [page, size, sort]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Controls size={size} setSize={setSize} sort={sort} setSort={setSort} page={page} />
        <Card posts={posts} />
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}
