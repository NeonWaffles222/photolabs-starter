import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = (props) => {
  const { topics, onTopicSelect } = props;
  const allTopics = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        title={topic.title}
        onTopicSelect={onTopicSelect}
      />
    );
  });
  return (
    <div className="top-nav-bar__topic-list">
      {allTopics}
    </div>
  );
};

export default TopicList;
