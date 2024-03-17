import React, { useEffect, useState } from 'react';
import styles from './ServicesList.module.scss';
import { Service } from './Service'; 

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const ServicesList: React.FC = () => {
  const [posts, setPosts] = useState<{id: number; title: string; body: string}[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <section className={styles.articlesSection}>

    {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        posts.map((post) => {
          return <Service key={post.id} title={post.title} body={post.body}/>;
        })
      )}
    </section>
  );
}

export { ServicesList };