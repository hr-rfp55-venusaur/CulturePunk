/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

const slides = [
  {
    title: 'Venusaur',
    subtitle: 'Grass',
    description: 'Cool Pokemon',
    image:
      'https://lh3.googleusercontent.com/proxy/WE02nYWmqBK1F-hnVdZIdieJNX7i1MkuZgXZABT1_oerMitnl4pdsK5ouuk9q29fiEFijxlfvF8TTCnfzqMeeYA96Pvr0ATDLNepYRe_VqhfEDkMnrZXyqZ_rWj5fo-gcgTs9_mkGRGIviaZApN9j6fbUmJlucTyx3QhENM8AwL8byNN4DP0lan0C918x9dCOn5hclkM5P8o6LMTE9jJ7wthd_Yv963nXmRaIg',
  },
  {
    title: 'Charizard',
    subtitle: 'Fire',
    description: 'Let your dreams come true',
    image:
      'http://www.animalhi.com/thumbnails/detail/20121027/pokemon%20charizard%202480x3508%20wallpaper_www.animalhi.com_52.jpg',
  },
  {
    title: 'Blastoise',
    subtitle: 'Water',
    description: 'A piece of heaven',
    image:
      'https://www.pngkey.com/png/detail/150-1500402_blastoise-pokemon-blastoise.png',
  },
  {
    title: 'Four',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Five',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 1,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset > 0 ? offset + 0.1 : offset - 0.1,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {/* <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      /> */}
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          {/* <h3 className="slideSubtitle">{slide.subtitle}</h3> */}
          {/* <p className="slideDescription">{slide.description}</p> */}
        </div>
      </div>
    </div>
  );
}

const Carousel = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button type="button" onClick={() => dispatch({ type: 'NEXT' })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button type="button" onClick={() => dispatch({ type: 'PREV' })}>›</button>
    </div>
  );
};

// Carousel.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.object).isRequired,
//   // imgAlt: PropTypes.string.isRequired,
//   // title: PropTypes.string.isRequired,
//   // desc: PropTypes.string.isRequired,
// };

Slide.propTypes = {
  slide: PropTypes.objectOf(PropTypes.string).isRequired,
  offset: PropTypes.number.isRequired,
};

export default Carousel;
