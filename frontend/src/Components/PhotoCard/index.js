import React from 'react';
import { Link } from '@reach/router';

import { FavButton } from '../FavButton';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

import { ToggleLikeMutation } from '../../hoc/ToggleLikeMutation';

import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, ref] = useNearScreen();
	const key = `like-${id}`;
	const [liked, setLiked] = useLocalStorage(key, false);

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
        					!liked && toggleLike({ variables: {
        						input: { id }
        					} });

        					setLiked(!liked);
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
