'use client';

import { useTranslations } from 'next-intl';
import PalastineMap from './PalastineMap';

type Props = {}

export default function Hero({ }: Props) {
    const t = useTranslations('Hero');
    return (
        <article className='w-full p-4  mx-auto'>
            {/* <figure className='block'>
                <PalastineMap />
            </figure>
            <figure className='block'>
                <Test />
            </figure> */}

            <h1>{t('Heading')}</h1>
            <p>{t('Paragraph')}</p>
        </article>


    );
}