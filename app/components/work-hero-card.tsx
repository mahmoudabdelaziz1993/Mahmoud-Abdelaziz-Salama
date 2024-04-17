'use client'

import React from 'react'
import { useTranslations } from 'next-intl';

function  WorkHero () {
  const t = useTranslations('WorkHero');

  return (
    <article className=' prose dark:prose-invert  prose-2xl mx-auto text-center'>
      <h2>{t('headline')}</h2>
      <p>{t('description')}</p>
    </article>
  )
}

export default WorkHero;