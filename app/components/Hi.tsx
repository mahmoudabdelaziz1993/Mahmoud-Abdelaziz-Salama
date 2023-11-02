'use client';

import { useTranslations } from 'next-intl';

type Props = {}

export default function Hi({ }: Props) {
    const t = useTranslations('Index');
    return <h1>{t('title')}</h1>;
}