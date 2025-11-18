"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionTitle from "./UI/SectionTitle";

const VIDEOS = [
  {
    id: 1,
    src: "/products/product-video-1.mp4",
    title: "Entrega Personalizada 1",
  },
  {
    id: 2,
    src: "/products/product-video-2.mp4",
    title: "Entrega Personalizada 2",
  },
  {
    id: 3,
    src: "/products/product-video-3.mp4",
    title: "Entrega Personalizada 3",
  },
  {
    id: 4,
    src: "/products/product-video-4.mp4",
    title: "Entrega Personalizada 4",
  },
  {
    id: 5,
    src: "/products/product-video-5.mp4",
    title: "Entrega Personalizada 5",
  },
  {
    id: 6,
    src: "/products/product-video-6.mp4",
    title: "Entrega Personalizada 6",
  },
];

export default function ProductVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const getPreviousIndex = (index: number) => {
    return index === 0 ? VIDEOS.length - 1 : index - 1;
  };

  const getNextIndex = (index: number) => {
    return index === VIDEOS.length - 1 ? 0 : index + 1;
  };

  const previousIndex = getPreviousIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  const goToPrevious = () => {
    const prevVideo = videoRefs.current[VIDEOS[currentIndex].id];
    if (prevVideo) {
      prevVideo.pause();
      prevVideo.currentTime = 0;
    }
    setCurrentIndex(getPreviousIndex(currentIndex));
  };

  const goToNext = () => {
    const currentVideo = videoRefs.current[VIDEOS[currentIndex].id];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }
    setCurrentIndex(getNextIndex(currentIndex));
  };


  useEffect(() => {
    VIDEOS.forEach((video, index) => {
      const videoEl = videoRefs.current[video.id];
      if (videoEl) {
        if (index === currentIndex) {
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  const handleVideoEnd = () => {
    goToNext();
  };

  return (
    <section className="py-24 px-6 bg-[#F9F5F0]">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title="Nossas últimas entregas"
          subtitle="Alguns dos pedidos dos nossos clientes que transformamos em realidade"
        />

        <div className="relative mt-12">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <button
              onClick={goToPrevious}
              className="z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="Vídeo anterior"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#C97A65]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="relative flex items-center justify-center gap-4 md:gap-8 w-full max-w-5xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`prev-${previousIndex}`}
                  initial={{ opacity: 0, x: -50, scale: 0.8 }}
                  animate={{ opacity: 0.6, x: 0, scale: 0.85 }}
                  exit={{ opacity: 0, x: -50, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="hidden md:block relative w-[200px] aspect-[9/16]"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg blur-sm">
                    <video
                      ref={(el) => {
                        videoRefs.current[VIDEOS[previousIndex].id] = el;
                      }}
                      src={VIDEOS[previousIndex].src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={VIDEOS[previousIndex].title}
                      onLoadedMetadata={(e) => {
                        const video = e.currentTarget;
                        video.currentTime = 0;
                        video.pause();
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  key={`current-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] z-10"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <video
                      ref={(el) => {
                        videoRefs.current[VIDEOS[currentIndex].id] = el;
                      }}
                      src={VIDEOS[currentIndex].src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      playsInline
                      loop={false}
                      onEnded={handleVideoEnd}
                      aria-label={VIDEOS[currentIndex].title}
                    />
                  </div>
                </motion.div>

                <motion.div
                  key={`next-${nextIndex}`}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ opacity: 0.6, x: 0, scale: 0.85 }}
                  exit={{ opacity: 0, x: 50, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="hidden md:block relative w-[200px] aspect-[9/16]"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg blur-sm">
                    <video
                      ref={(el) => {
                        videoRefs.current[VIDEOS[nextIndex].id] = el;
                      }}
                      src={VIDEOS[nextIndex].src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={VIDEOS[nextIndex].title}
                      onLoadedMetadata={(e) => {
                        const video = e.currentTarget;
                        video.currentTime = 0;
                        video.pause();
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={goToNext}
              className="z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="Próximo vídeo"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#C97A65]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {VIDEOS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const currentVideo = videoRefs.current[VIDEOS[currentIndex].id];
                  if (currentVideo) {
                    currentVideo.pause();
                    currentVideo.currentTime = 0;
                  }
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#C97A65] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para vídeo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
