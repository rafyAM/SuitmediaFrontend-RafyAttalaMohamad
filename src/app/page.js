"use client";

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PostCard from '../components/PostCard';
import axios from 'axios';

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
    <div>
      <Header />
      <Banner />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border px-2 py-1">
            <option value="-published_at">Terbaru</option>
            <option value="published_at">Terlama</option>
          </select>
          <select value={size} onChange={(e) => setSize(parseInt(e.target.value))} className="border px-2 py-1">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="px-4 py-1 border">Previous</button>
          <span className="px-3 py-1">Page {page}</span>
          <button onClick={() => setPage((p) => p + 1)} className="px-4 py-1 border">Next</button>
        </div>
      </div>
    </div>
  );
}