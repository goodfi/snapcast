import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react';

const ProfiePage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        title="Bartosz Maćkowiak"
        subHeader="bartekmackowiak92@gmail.com"
        userImg="/assets/images/dummy.jpg"
      />
      <div className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default ProfiePage;
