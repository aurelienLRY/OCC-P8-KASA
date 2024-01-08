import React from 'react';
import { StarFilled } from '@ant-design/icons';
import './styles.scss'

export default function StarRating({ notes, ...props }) {
  const note = notes
  const {className} = props;
  return (
    <div className={className}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarFilled
          key={index}
          className={index < note ? 'star-filled' : 'star-empty'}
        />
      ))}
    </div>
  );
}
