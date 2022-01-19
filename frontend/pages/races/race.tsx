import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Spinner from "../../components/Spinner";
import { Race } from "../../models/Race";

export default function RaceDetails() {
  const router = useRouter();
  const { rid } = router.query;

  const { isLoading, error, data } = useQuery<Race>("allRaces", () =>
    fetch(`http://localhost:8000/races/${rid}`).then((res) => res.json())
  );

  return (
    <div className="container">
      {isLoading && <Spinner size="5em" />}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h4>{data.description}</h4>
          <Link href={`/races/join?=${data.id}`}>
            <a className="btn btn-link">Bli med!</a>
          </Link>
          <div className="container">
            <h5>Deltagere</h5>
            <ul className="list-group">
              {data.participant_set?.map((participant) => {
                return ( 
                  <li key={participant.id}>
                    <div className="fw-bold">{participant.name}</div>
                    <div>{participant.email}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
