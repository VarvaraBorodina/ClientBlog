import { CategoriesBlock } from '@components/blocks/CategoriesBlock';
import { TEXT } from '@constants';
import tags from '@data/tags.json';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import commonStyles from '@/styles/common.module.scss';
import { Tag } from '@/types';

import styles from './styled.module.scss';

const MAX_TAGS_AMOUNT = 7;

const {
  NO_TAGS, ALL_TAGS, CATEGORIES, SEARCH_TAGS,
} = TEXT;

export const SearchTags = ({ onTagsChange }: { onTagsChange: (tags: number[]) => void }) => {
  const translate = useTranslations('Categories');
  const translatedTags = tags.map(({ name, id: tagId }) => ({
    name: translate(name),
    id: tagId,
  }));

  const [inputValue, setInputValue] = useState('');
  const [currentTags, setCurrentTags] = useState<Tag[]>(translatedTags.slice(0, MAX_TAGS_AMOUNT));
  const [chosenTags, setChosenTags] = useState<number[]>([]);

  useEffect(() => {
    onTagsChange(chosenTags);
  }, [chosenTags]);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setInputValue(value);

    if (value === '') {
      setCurrentTags(translatedTags.slice(0, MAX_TAGS_AMOUNT));
    } else {
      setCurrentTags(
        translatedTags.filter((tag) => tag.name.toLowerCase().includes(value.toLowerCase())),
      );
    }
  };

  const toggleTag = (tagId: number) => () => {
    if (chosenTags.includes(tagId)) {
      setChosenTags((prevTags) => prevTags.filter((prevTag) => prevTag !== tagId));
    } else {
      setChosenTags((prevTags) => [...prevTags, tagId]);
    }
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder={translate(SEARCH_TAGS)}
        value={inputValue}
        onChange={handleInputChange}
      />
      <h3 className={`${commonStyles.header} ${styles.tagsTitle}`}>{translate(ALL_TAGS)}</h3>
      <div className={styles.tags}>
        {!currentTags.length && <p className={styles.description}>{translate(NO_TAGS)}</p>}
        {currentTags.map((tag) => (
          <button
            className={`${styles.tag} ${chosenTags.includes(tag.id) && styles.active}`}
            key={tag.id}
            onClick={toggleTag(tag.id)}
            type="button"
          >
            {tag.name}
          </button>
        ))}
      </div>
      <CategoriesBlock title={CATEGORIES} column titleAlign="left" />
    </div>
  );
};
