import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { FavButton } from '../FavButton';

// import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';

import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, ref] = useNearScreen();
	// const key = `like-${id}`;
	// const [liked, setLiked] = useLocalStorage(key, false);

	return (
		<Article ref={ref}>
			{
				show &&
        <>
        	<Link to={`/detail/${id}`}>
        		<ImgWrapper>
        			<Img src={src} />
        		</ImgWrapper>
        	</Link>

        	<ToggleLikeMutation>
        		{
        			(toggleLike) => {
        				const handleFavClick = () => {
        					toggleLike({ variables: {
        						input: { id }
        					} });

        					// setLiked(!liked);
        				};

        				return (
        					<FavButton
        						liked={liked}
        						likes={likes}
        						onClick={handleFavClick}
        					/>
        				);
        			}
        		}
        	</ToggleLikeMutation>
        </>
			}
		</Article>
	);
};

PhotoCard.propTypes = {
	id: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired,
	likes: function (props, propName, componentName) {
		const propValue = props[propName]

		if (propValue === undefined) {
			return new Error(`${propName} must be defined`)
		}

		if (propValue < 0) {
			return new Error(`${propName} value must be greater than 0`)
		}
	}
}