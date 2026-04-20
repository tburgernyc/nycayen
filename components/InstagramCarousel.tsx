"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, Play, Heart, MessageCircle } from "lucide-react";
import { NeoCard } from "./ui/NeoCard";
import { NeoButton } from "./ui/NeoButton";
import { NeoIconButton } from "./ui/NeoIconButton";

interface InstagramPost {
  id: string;
  type: 'image' | 'video' | 'carousel';
  media_url: string;
  thumbnail_url?: string;
  caption: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

export function InstagramCarousel() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [_error] = useState<string | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars

  // Mock Instagram posts for fallback
  const mockPosts = useMemo<InstagramPost[]>(() => [
    {
      id: '1',
      type: 'video',
      media_url: '/images/IMG_1321.JPG',
      caption: '✨ Another stunning transformation! From dull to dazzling ✨ #HairTransformation #NycayenMagic',
      permalink: 'https://instagram.com/nycayenmoore',
      timestamp: new Date().toISOString(),
      like_count: 245,
      comments_count: 18,
    },
    {
      id: '2',
      type: 'image',
      media_url: '/images/IMG_1322.JPG',
      caption: '💫 Loving this gorgeous balayage! Perfect for the fall season 🍂 #Balayage #HairGoals',
      permalink: 'https://instagram.com/nycayenmoore',
      timestamp: new Date().toISOString(),
      like_count: 189,
      comments_count: 12,
    },
    {
      id: '3',
      type: 'carousel',
      media_url: '/images/IMG_1323.JPG',
      caption: '🔥 Before & After magic! Swipe to see the incredible transformation ➡️ #BeforeAndAfter #Confidence',
      permalink: 'https://instagram.com/nycayenmoore',
      timestamp: new Date().toISOString(),
      like_count: 312,
      comments_count: 24,
    },
    {
      id: '4',
      type: 'video',
      media_url: '/images/IMG_1324.JPG',
      caption: '🎥 Behind the scenes: Watch the technique that creates these stunning curls! #BehindTheScenes #HairTutorial',
      permalink: 'https://instagram.com/nycayenmoore',
      timestamp: new Date().toISOString(),
      like_count: 156,
      comments_count: 8,
    },
    {
      id: '5',
      type: 'image',
      media_url: '/images/IMG_1326.JPG',
      caption: '❤️ Client love! Nothing makes us happier than seeing our clients glow with confidence ✨ #ClientLove #Confidence',
      permalink: 'https://instagram.com/nycayenmoore',
      timestamp: new Date().toISOString(),
      like_count: 201,
      comments_count: 15,
    },
  ], []);

  const fetchInstagramPosts = useCallback(async () => {
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      console.log('Instagram credentials not configured, using mock data');
      setPosts(mockPosts);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,timestamp,like_count,comments_count&access_token=${accessToken}&limit=10`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Instagram posts');
      }

      const data = await response.json();
      const transformedPosts: InstagramPost[] = data.data.map((post: { id: string; media_type: string; media_url: string; thumbnail_url?: string; caption?: string; permalink: string; timestamp: string; like_count?: number; comments_count?: number }) => ({
        id: post.id,
        type: post.media_type.toLowerCase(),
        media_url: post.media_url,
        thumbnail_url: post.thumbnail_url,
        caption: post.caption || '',
        permalink: post.permalink,
        timestamp: post.timestamp,
        like_count: post.like_count,
        comments_count: post.comments_count,
      }));

      setPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching Instagram posts:', err);
      setPosts(mockPosts); // Fallback to mock data
    } finally {
      setLoading(false);
    }
  }, [mockPosts]);

  useEffect(() => {
    fetchInstagramPosts();
  }, [fetchInstagramPosts]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const formatCaption = (caption: string) => {
    return caption.length > 100 ? caption.substring(0, 100) + '...' : caption;
  };

  const formatCount = (count: number | undefined) => {
    if (!count) return '0';
    return count > 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-16 h-16 border-4 border-neo-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <NeoCard variant="flat" className="text-center py-20">
        <Instagram className="w-16 h-16 text-neo-gold/50 mx-auto mb-4" />
        <p className="text-neo-taupe">No Instagram posts available</p>
      </NeoCard>
    );
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <NeoCard variant="elevated" className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image/Video Section */}
                <div className="relative">
                  <div className="aspect-square rounded-neo-lg overflow-hidden bg-neo-dark shadow-neo-pressed">
                    {posts[currentIndex].type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-16 h-16 bg-neo-gold/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-neo-elevated">
                          <Play className="w-6 h-6 text-neo-dark ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}
                    <img
                      src={posts[currentIndex].thumbnail_url || posts[currentIndex].media_url}
                      alt={posts[currentIndex].caption}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Type Indicator */}
                  <div className="absolute top-4 right-4">
                    {posts[currentIndex].type === 'video' && (
                      <div className="bg-neo-steel/90 px-3 py-1.5 rounded-full text-xs text-neo-champagne flex items-center space-x-1 shadow-neo-flat">
                        <Play className="w-3 h-3" fill="currentColor" />
                        <span>Video</span>
                      </div>
                    )}
                    {posts[currentIndex].type === 'carousel' && (
                      <div className="bg-neo-steel/90 px-3 py-1.5 rounded-full text-xs text-neo-champagne shadow-neo-flat">
                        Carousel
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-neo-dark shadow-neo-pressed rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-neo-gold" />
                    </div>
                    <div>
                      <h3 className="font-cormorant font-semibold text-neo-champagne">@nycayenmoore</h3>
                      <p className="text-sm text-neo-taupe">Nycayen Hair Salon</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-neo-champagne leading-relaxed">
                      {formatCaption(posts[currentIndex].caption)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-sm text-neo-taupe">
                        {formatCount(posts[currentIndex].like_count)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5 text-neo-taupe" />
                      <span className="text-sm text-neo-taupe">
                        {formatCount(posts[currentIndex].comments_count)}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={posts[currentIndex].permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NeoButton
                        variant="gold"
                        icon={<Instagram className="w-4 h-4" />}
                      >
                        View on Instagram
                      </NeoButton>
                    </a>
                    <a
                      href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/nycayenmoore"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NeoButton variant="elevated">
                        Follow Us
                      </NeoButton>
                    </a>
                  </div>
                </div>
              </div>
            </NeoCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <NeoIconButton
            onClick={prevSlide}
            variant="elevated"
            icon={<ChevronLeft className="w-6 h-6" />}
            aria-label="Previous post"
          />
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <NeoIconButton
            onClick={nextSlide}
            variant="elevated"
            icon={<ChevronRight className="w-6 h-6" />}
            aria-label="Next post"
          />
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-neo-gold scale-125 shadow-[0_0_8px_rgba(197,164,109,0.6)]"
                : "bg-neo-taupe/30 hover:bg-neo-taupe/50 shadow-neo-pressed"
            }`}
            aria-label={`Go to post ${index + 1}`}
          />
        ))}
      </div>

      {/* Post Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-neo-taupe">
          {currentIndex + 1} of {posts.length}
        </span>
      </div>
    </div>
  );
}