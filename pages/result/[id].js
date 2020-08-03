import { useRouter } from "next/router";

const ResultPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Content ID: {id}</p>;
};

export default ResultPage;
