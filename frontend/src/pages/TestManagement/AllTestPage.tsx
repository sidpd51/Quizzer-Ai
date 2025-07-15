import ShimmerCard from "@/components/ShimmerCard";
import TestCard from "@/components/TestCard"
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://dummyjson.com/posts?limit=51";

interface Post {
  id: number;
  title: string;
  body: string;
}



const AllTestPage = () => {
  const [error, setError] = useState();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true)
      try {
        const response = await axios.get(BASE_URL, {
          signal: abortControllerRef.current?.signal
        });
        setPosts(response.data.posts);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (error) {
    return <div>Something went wrong! Please try again.</div>
  }

  return (
    <div id="all-test-page">
      <div className="grid grid-cols-3 gap-4">
        {isLoading ?
          Array.from({ length: 8 }).map((_, i) => <ShimmerCard key={i} />) :
          posts.map((post) => {
            return <TestCard key={post.id} title={post.title} description={post.body} />
          })
        }
      </div>
    </div>
  )
}

export default AllTestPage
