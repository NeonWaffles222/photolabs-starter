import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { title, onTopicSelect, id } = props;
  return (
    <div className="topic-list__item">
      <span className="topic-list__item" onClick={() => onTopicSelect(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
