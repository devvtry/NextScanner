import React from "react";
import styles from '../../styles/blog.module.css'
import Link from 'next/link';




export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { usedata: data },
  };
};

const Blog = ({ usedata }) => {
  return (
    <div>
      <h1>Blog</h1>
      {usedata.map((i) => {
        return (
          <Link href={'/blogs/' + i.id} key={i.id}>
            <a className={styles.single}>
              <h3>{i.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
