import { useRef } from 'react';
import ArrowIcon from '/icons/carouselArrow.svg';
import RecipeCard from '../RecipeCard/RecipeCard';
import './recipesCarousel.css';
import '../LikeButton/LikeButton';

const RecipesCarousel = ({ items }) => {
  const carousel = useRef();

  const recipes = items.map((item) => {
    return (
      <RecipeCard
        key={item.id}
        image={item.image}
        title={item.title}
        tag1={item.tag1}
        tag2={item.tag2}
      />
    );
  });

  const scrollLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const scrollRight = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section className='recipes__container'>
      <div className='carousel'>
        <button className='carousel__arrow carousel__left-arrow' onClick={scrollLeft}>
          <img src={ArrowIcon} alt='Scroll left' />
        </button>
        <ul className='recipes' ref={carousel}>
          {recipes}
        </ul>
        <button className='carousel__arrow carousel__right-arrow' onClick={scrollRight}>
          <img src={ArrowIcon} alt='Scroll right' />
        </button>
      </div>
    </section>
  );
};

export default RecipesCarousel;