import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import '../../styles/Quick/SliderSpot.less'

export const Route = createFileRoute('/quick/SliderSpot')({
  component: RouteComponent,
})

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const images = [
  {
    fg: "https://ds-static.dk/dlo/-/media/fec7c6383de04642900e2b24a36ab095.png",
    bg: "https://ds-static.dk/dlo/-/media/30516f8f08c242688626efded5960d5e.jpg",
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/936a1746b3a14e7982ef4801ed645e38.png',
    bg: 'https://ds-static.dk/dlo/-/media/8d7cfb7de7cb4bba8f0109c10648d7bd.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/b983095dda824af28c98a752975d23aa.png',
    bg: 'https://ds-static.dk/dlo/-/media/bd1ba9c5e8e7414b976ae4621f0dd6b4.png'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/3db7b1085d224716a1b5ce58ecea8fba.png',
    bg: 'https://ds-static.dk/dlo/-/media/04c4ea06d8f14486b9af24e67bb5b20d.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/799ae2a13a914307b35a15639dd694ba.png',
    bg: 'https://ds-static.dk/dlo/-/media/5cf8356cc585486a932b5f71b2fb6f14.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/1fe0f540f4cf4d32b228cc0dd5bba2e2.png',
    bg: 'https://ds-static.dk/dlo/-/media/ada34c3e2fa44ccb9fcc2551d00c27ce.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/6e36c7d3742c43f497b28dedf104b250.png',
    bg: 'https://ds-static.dk/dlo/-/media/b01e06caa29a402db7b4fb130e72981f.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/66343f61e6f24613bf98de1a2251770f.png',
    bg: 'https://ds-static.dk/dlo/-/media/e7707eb557914a118737ef810af7953a.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/4a0d71dfaa0343d38be30fc282c5556e.png',
    bg: 'https://ds-static.dk/dlo/-/media/ea050a1301ed468aa80b83ec688efd46.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/1b48ac08790f47ffbf7c3a17714bf8e0.png',
    bg: 'https://ds-static.dk/dlo/-/media/67983adc80d947febb2e3e923e0b9135.jpg'
  },
  {
    fg: 'https://ds-static.dk/dlo/-/media/0acc49d1554642458dd6fcedb0142735.png',
    bg: 'https://ds-static.dk/dlo/-/media/68ea4347ac1749899a45e00876edbb55.jpg'
  },
]

function RouteComponent() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: 1 | -1) => {
    const container = scrollRef.current
    if (!container) return
    const gap = parseFloat(getComputedStyle(container).columnGap) || 0
    const slide = container.querySelector('.slider__slide')
    if (!slide) return
    container.scrollBy({
      left: direction * (slide.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }


  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const slideElements = Array.from(container.querySelectorAll('.slider__slide'))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideElements.indexOf(entry.target as HTMLElement))
          }
        }
      },
      {
        root: container,
        rootMargin: '0px -45% 0px -45%', // narrows observation to ~10% center zone
        threshold: 0,
      }
    )

    slideElements.forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={'wrapper'}>
      <div className={'slider'}>
        <div className={'slider__inner'} ref={scrollRef}>
          {slides.map((num, i) => {
            const isActive = activeIndex === i
            const isPrev = activeIndex - 1 === i
            const isPrevPrev = activeIndex - 2 === i
            const isNext = activeIndex + 1 === i
            const isNextNext = activeIndex + 2 === i
            const isFirst = i === 0
            const isLast = i === slides.length - 1

            return (
              <a
                // href={`#${i}`}
                key={i}
                className={[
                  'slider__slide',
                  isActive && 'slider__slide--active',
                  isPrev && 'slider__slide--prev',
                  isPrevPrev && 'slider__slide--prev-prev',
                  isNext && 'slider__slide--next',
                  isNextNext && 'slider__slide--next-next',
                  isFirst && 'slider__slide--first',
                  isLast && 'slider__slide--last',
                ].filter(Boolean).join(' ')}
                // onClick={() => setActiveIndex(i)}
              >
                <div className={'slider__slide-card'}>
                  <img className={'slider__slide-card-fg'} src={images[i]?.fg} alt={`Slide ${num}`}/>
                  <img className={'slider__slide-card-bg'} src={images[i]?.bg} alt={`Slide ${num}`}/>
                </div>

              </a>
            )
          })}
        </div>
        <button className={'slider__prev'} onClick={() => scroll(-1)}>&lt;</button>
        <button className={'slider__next'} onClick={() => scroll(1)}>&gt;</button>


      </div>
    </div>
  )
}
