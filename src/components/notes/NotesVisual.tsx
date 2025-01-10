import React from 'react';
import HighlightedPhone from '../phone/HighlightedPhone';

const NotesVisual = () => (
  <div className="w-full lg:w-1/2 flex justify-center">
    <HighlightedPhone highlightColor="orange-500" buttonPosition="right-bottom" />
  </div>
);

export default NotesVisual;