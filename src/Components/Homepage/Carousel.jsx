/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';
// import PropTypes from 'prop-types';

const slides = [
  {
    title: 'Charizard',
    subtitle: 'Fire',
    description: 'Let your dreams come true',
    image:
      'https://dreager1.files.wordpress.com/2014/07/charizard_anime.png?w=584',
    bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
  },
  {
    title: 'Venusaur',
    subtitle: 'Grass',
    description: 'Cool Pokemon',
    image:
      'https://lh3.googleusercontent.com/proxy/WE02nYWmqBK1F-hnVdZIdieJNX7i1MkuZgXZABT1_oerMitnl4pdsK5ouuk9q29fiEFijxlfvF8TTCnfzqMeeYA96Pvr0ATDLNepYRe_VqhfEDkMnrZXyqZ_rWj5fo-gcgTs9_mkGRGIviaZApN9j6fbUmJlucTyx3QhENM8AwL8byNN4DP0lan0C918x9dCOn5hclkM5P8o6LMTE9jJ7wthd_Yv963nXmRaIg',
    bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
  },
  {
    title: 'Blastoise',
    subtitle: 'Water',
    description: 'A piece of heaven',
    image:
      'https://www.pngkey.com/png/detail/150-1500402_blastoise-pokemon-blastoise.png',
    bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
  },
  {
    title: 'Marowak',
    subtitle: 'Ground',
    description: 'A piece of heaven',
    image:
      'https://www.serebii.net/pokemon/art/105.png',
    bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
  },
  {
    title: 'Mewtwo',
    subtitle: 'Psychic',
    description: 'A piece of heaven',
    image:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
  },
  {
    title: 'Gyrados',
    subtitle: 'Water',
    description: 'A piece of heaven',
    image:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
    bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
  },
  {
    title: 'Snorlax',
    subtitle: 'Normal',
    description: 'A piece of heaven',
    image:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
    bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
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
          backgroundImage: `url('${slide.bkg}')`,
        }}
      >
        <div
          className="slide-image"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
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
