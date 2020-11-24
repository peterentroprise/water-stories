import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Thread() {
  const router = useRouter();
  const { name } = router.query;
  const { data } = useSWR(`/api/thread/${name}`, fetcher);

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <p>Thread: {data.name}</p>
    </div>
  );
}

export default Thread;
