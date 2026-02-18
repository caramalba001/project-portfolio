'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface Company {
    name: string;
    logo: string;
}

interface CompanyListProps {
    companies: Company[];
}

export default function CompanyList({ companies }: CompanyListProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPos = scrollContainer.scrollLeft;
        const speed = 1; // Adjust speed: 0.5 for smoother/slower, 1 for faster

        const animate = () => {
            if (!isHovered && !isDragging && scrollContainer) {
                scrollPos += speed;

                // If we've scrolled past the first set of items (halfway)
                // We assume the content is duplicated exactly once [Set A][Set A]
                if (scrollPos >= scrollContainer.scrollWidth / 2) {
                    scrollPos = 0;
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft = scrollPos;
                }
            } else if (scrollContainer) {
                // If hovered or dragging, we act as manual scroll, so we update our tracker
                scrollPos = scrollContainer.scrollLeft;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered, isDragging]);

    const handleWheel = (e: React.WheelEvent) => {
        if (scrollRef.current) {
            // Allow vertical page scroll if not strictly horizontal intent? 
            // Usually for carousels, we consume deltaY as deltaX.
            // Prevent default if we can scroll.
            if (e.deltaY !== 0) {
                // e.preventDefault(); // React synthetic event might need cleaner handling/passive check
                scrollRef.current.scrollLeft += e.deltaY;
            }
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeftStart(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll-fast
        scrollRef.current.scrollLeft = scrollLeftStart - walk;
    };

    return (
        <div className="mt-24 w-full flex flex-col items-center overflow-hidden">


            <div className="relative w-full max-w-full group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-zinc-50 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none" />

                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex overflow-x-auto gap-16 px-8 items-center no-scrollbar cursor-grab active:cursor-grabbing"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {/* Render minimal duplicates to ensure overflow */}
                    <div className="flex gap-16 min-w-max">
                        {[...companies, ...companies, ...companies].map((company, index) => (
                            <div
                                key={`${company.name}-${index}`}
                                className="relative flex-shrink-0 w-32 h-16 md:w-40 md:h-20 transition-all duration-300 hover:scale-110"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        fill
                                        className="object-contain select-none"
                                        sizes="(max-width: 768px) 128px, 160px"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
