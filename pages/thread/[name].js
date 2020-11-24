import { useRouter } from "next/router";
import useSWR from "swr";
import LayoutComponent from "../../components/LayoutComponent";
import Typography from "@material-ui/core/Typography";

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Thread() {
  const router = useRouter();
  const { name } = router.query;
  const { data } = useSWR(`/api/messages/${name}`, fetcher);

  if (!data) {
    return "Loading...";
  }

  return (
    <LayoutComponent>
      {data.map((doc) => (
        <Typography key={doc.id}>{doc.payload}</Typography>
      ))}
    </LayoutComponent>
  );
}

export default Thread;
