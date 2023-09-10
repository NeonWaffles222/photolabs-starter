import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "mocks/topics";


const TopicList = () => {
  const allTopics = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        slug={topic.slug}
        title={topic.title}
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
