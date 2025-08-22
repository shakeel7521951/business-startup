"use client"
import { useState, useRef } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';

export const Team = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef([]);

    // Video data - using image paths as requested
    const videos = [
        {
            id: 1,
            title: "Nerou Technology Platform",
            description: "Explore our comprehensive digital solutions designed for GCC businesses",
            image: "/about/image (1).jpg",
            videoPath: "/about/videos/video1.mp4", // Using path instead of URL
        },
        {
            id: 2,
            title: "Client Success Stories",
            description: "See how our solutions have transformed businesses across the region",
            image: "/about/image (4).jpg",
            videoPath: "/about/videos/video4.mp4", // Using path instead of URL
        },
        {
            id: 3,
            title: "Digital Transformation",
            description: "How we're helping businesses embrace the future of technology",
            image: "/about/image (7).jpg",
            videoPath: "/about/videos/video2.mp4", // Using path instead of URL
        }
    ];

    const wideVideo = {
        id: "wide",
        title: "Nerou Ecosystem Overview",
        description: "A comprehensive look at our complete technology ecosystem",
        image: "/about/image (10).jpg", // Using image path
        videoPath: "/about/videos/video3.mp4", // Using path instead of URL
    };

    // Function to handle video play/pause
    const toggleVideo = (videoId) => {
        if (playingVideo === videoId) {
            // Pause the currently playing video
            const videoElement = videoRefs.current[videoId];
            if (videoElement) {
                videoElement.pause();
            }
            setPlayingVideo(null);
        } else {
            // Pause any currently playing video
            if (playingVideo) {
                const currentVideoElement = videoRefs.current[playingVideo];
                if (currentVideoElement) {
                    currentVideoElement.pause();
                }
            }

            // Play the new video
            setPlayingVideo(videoId);
            setTimeout(() => {
                const videoElement = videoRefs.current[videoId];
                if (videoElement) {
                    videoElement.play().catch(error => {
                        console.error("Video play failed:", error);
                    });
                }
            }, 100);
        }
    };

    // Handle video end
    const handleVideoEnd = (videoId) => {
        if (playingVideo === videoId) {
            setPlayingVideo(null);
        }
    };

    return (
        <section className="pb-20 bg-[#F9F9F9] ">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-12 z-0"></div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-20 pt-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">Nerou Technology Solutions</h2>
                    <div className="flex justify-center mb-6">
                        <div className="h-1 w-20 bg-[#D4AF37]"></div>
                    </div>
                    <p className="text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto">
                        Our exclusive partnership with Nerou brings cutting-edge digital solutions to businesses across the GCC
                    </p>
                </div>

                {/* Video grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white "
                        >
                            {/* Video container with image or video player */}
                            <div className="relative h-90 overflow-hidden">
                                {playingVideo === video.id ? (
                                    // Video player when playing
                                    <div className="relative h-full w-full bg-black">
                                        <video
                                            ref={el => videoRefs.current[video.id] = el}
                                            src={video.videoPath}
                                            className="w-full h-full "
                                            onEnded={() => handleVideoEnd(video.id)}
                                        />
                                        <button
                                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
                                            onClick={() => toggleVideo(video.id)}
                                        >
                                            <FaPause className="text-xl" />
                                        </button>
                                    </div>
                                ) : (
                                    // Image with play button when not playing
                                    <>
                                        <img
                                            src={video.image}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/30 to-transparent flex items-end p-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#F9F9F9]">{video.title}</h3>
                                                <p className="text-[#D4AF37] font-medium">{video.description}</p>
                                            </div>
                                        </div>
                                        {/* Play button overlay */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                                            onClick={() => toggleVideo(video.id)}
                                        >
                                            <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                                <FaPlay className="text-white text-xl ml-1" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Video info section */}
                            <div className="p-6 pt-3 border-t-4 border-[#D4AF37]">
                                <p className="text-[#1C1C1C]/80 mb-2 leading-relaxed">
                                    {playingVideo === video.id ?
                                        "Video is playing" :
                                        "Click to watch this video showcasing our technology solutions"
                                    }
                                </p>
                                <div className="flex justify-between items-center pt-4">
                                    <button
                                        className="text-[#D4AF37] font-semibold hover:text-[#0D1B2A] transition-colors flex items-center group"
                                        onClick={() => toggleVideo(video.id)}
                                    >
                                        {playingVideo === video.id ? "Pause Video" : "Watch Video"}
                                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wide video section with increased height and inline playback */}
                <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-96 md:h-[500px]"> {/* Increased height */}
                        {playingVideo === wideVideo.id ? (
                            // Video player when playing
                            <div className="relative h-full w-full bg-black">
                                <video
                                    ref={el => videoRefs.current[wideVideo.id] = el}
                                    src={wideVideo.videoPath}
                                    className="w-full h-full object-cover"
                                    onEnded={() => handleVideoEnd(wideVideo.id)}
                                />
                                <button
                                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 z-10"
                                    onClick={() => toggleVideo(wideVideo.id)}
                                >
                                    <FaPause className="text-xl" />
                                </button>
                            </div>
                        ) : (
                            // Image with play button when not playing
                            <>
                                <img
                                    src={wideVideo.image}
                                    alt={wideVideo.title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                                    onClick={() => toggleVideo(wideVideo.id)}
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center hover:bg-[#C19B2E] transition-colors">
                                        <FaPlay className="text-white text-2xl ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{wideVideo.title}</h3>
                                    <p className="text-lg text-[#D4AF37]">{wideVideo.description}</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Additional content below the wide video */}
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Experience the Full Nerou Ecosystem</h3>
                        <p className="text-[#1C1C1C]/80 mb-6">
                            Our comprehensive technology platform integrates all aspects of digital transformation
                            into a seamless experience designed specifically for GCC businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#0D1B2A] font-bold py-3 px-8 rounded transition-colors">
                                See the Full System
                            </button>
                            <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold py-3 px-8 rounded transition-colors">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};