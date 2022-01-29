export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((currentData) => {
    return {
      params: {
        pageno: currentData.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
function PageNo({ data }) {
  const { id, title, body } = data;
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h4>{body}</h4>
    </div>
  );
}

export default PageNo;
