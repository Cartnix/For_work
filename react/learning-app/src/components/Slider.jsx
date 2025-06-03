import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useEffect } from 'react';

const testimonials = [
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads...",
        name: "John Smith",
        position: "Marketing Director at XYZ Corp"
    },
    {
        text: "The team is professional, responsive, and truly cares about the success of our business. Highly recommend!",
        name: "Jane Doe",
        position: "CEO at Startup Inc."
    },
    {
        text: "Their design work and SEO strategies helped grow our online presence massively.",
        name: "Alex Green",
        position: "Product Manager at Techify"
    },
    {
        text: "Reliable and creative. One of the best marketing partners we've worked with.",
        name: "Emily Clark",
        position: "Marketing Lead at Visionary"
    },
    {
        text: "Our conversion rate jumped after working with Positivus. Solid results!",
        name: "Michael Lee",
        position: "Founder at eComNow"
    }
];

export default function TestimonialSlider() {
    const swiperRef = useRef(null);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      .custom-pagination .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: #FFF; 
        border-radius: 50%;
        margin: 0 4px;
        opacity: 1;
      }
      .custom-pagination .swiper-pagination-bullet-active {
        background-color: #B9FF66; 
      }
        
    `;
        document.head.appendChild(style);
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 16px',
                backgroundColor: '#1E1E1E',
                color: 'white',
                borderRadius: '24px',
                boxSizing: 'border-box',
                marginTop: '40px',
            }}
        >
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                loop={true}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination"
                }}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn"
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {testimonials.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                border: '1px solid #22C55E',
                                borderRadius: '24px',
                                padding: '24px',
                                position: 'relative',
                                height: '200px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <p style={{ marginBottom: '16px' }}>“{item.text}”</p>
                            <div>
                                <p style={{ color: '#B9FF66', fontWeight: 'bold' }}>{item.name}</p>
                                <p style={{ fontSize: '14px', color: '#9CA3AF' }}>{item.position}</p>
                            </div>

                            <div />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '24px'
                }}
            >
                <button
                    className="prev-btn"
                    style={{
                        fontSize: '24px',
                        color: 'white',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    &larr;
                </button>

                <div className="custom-pagination" style={{ display: 'flex', justifyContent: 'center' }} />

                <button
                    className="next-btn"
                    style={{
                        fontSize: '24px',
                        color: 'white',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
}
