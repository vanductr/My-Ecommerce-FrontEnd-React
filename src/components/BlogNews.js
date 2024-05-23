import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Latest Trends in Fashion',
    summary: 'Discover the latest trends in fashion for this season...',
    link: '#',
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Outfit',
    summary: 'Learn how to choose the perfect outfit for any occasion...',
    link: '#',
  },
  {
    id: 3,
    title: 'Top 10 Fashion Tips',
    summary: 'Here are the top 10 fashion tips you need to know...',
    link: '#',
  },
];

const BlogNews = () => {
  return (
    <div className="py-8 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Blog & News</h2>
        <div className="space-y-4">
          {articles.map(article => (
            <div key={article.id} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-2">{article.summary}</p>
              <a href={article.link} className="text-blue-500 hover:underline">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
