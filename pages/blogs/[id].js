import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((index) => {
    return {
      params: { id: index.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return{
      props:{details: data}
  }
};

export default function Blogdetails({details}) {
    console.log({details});
  return (
    <div>
      <p>{details.website}</p>
      <p>{details.name}</p>
      <p>{details.phone}</p>
      <p>{details.email}</p>
      <p>{details.address.city}</p>
      <p>{details.address.street}</p>
      <p>{details.address.zipcode}</p>
    </div>
  );
}
