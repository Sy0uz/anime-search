import {FC} from 'react'
import { IAnimeFull } from '../../types/types';
import { Divider, Typography} from 'antd'
import s from './../../styles/Anime.module.css'
import ImagePreview from '../../UI/ImagePreviewMask/ImagePreview';
import { synopsisClear } from '../../utlis/synopsisClear';
import Rating from '../../UI/Rating/Rating';
import AnimeInformation from './AnimeInformation';
import Headline from '../../UI/headline/Headline';

interface AnimeTitleProps {
    anime: IAnimeFull;
}

const AnimeTitle: FC<AnimeTitleProps> = ({anime}) => {

    const {Title, Paragraph, Text} = Typography;
    
    return (
        <>
            <div>
                <Title className={s.title}>
                    <span>{anime.title}</span>
                    <span> / </span>
                    <span className={s.jTitle}>{anime.title_japanese}</span>
                </Title>

                <Divider className={s.divider} />
            </div>

            <div className={s.promo}>
                <div className={s.infoBox}>
                    <div className={s.titleImgBox}>
                        <ImagePreview src={anime.images.jpg.image_url} expandSrc={anime.images.jpg.large_image_url} alt={anime.title_english} className={s.titleImg} />
                    </div>

                    <AnimeInformation anime={anime} />
                </div>

                <div className={s.rating}>
                    <Headline title='Rating' marginBottom={16} />
                    <Rating score={anime.score} scored_by={anime.scored_by} />
                </div>
            </div>


            <Paragraph>
                <Divider />
                <Headline title='Synopsis' marginBottom={16} />
                <Text>
                    {synopsisClear(anime.synopsis)}
                </Text>
            </Paragraph>
        </>
    )
}

export default AnimeTitle