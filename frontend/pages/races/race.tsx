import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Spinner from "../../components/Spinner";
import { Race } from "../../models/Race";

export default function RaceDetails() {
  const router = useRouter();
  const { rid } = router.query;

  const { isLoading, error, data  } = useQuery<Race>(["allRaces", rid], () =>
    fetch(`http://localhost:8000/races/${rid}`).then((res) => res.json())
  );

  return (
    <div className="container">
      {isLoading && <Spinner size="5em" />}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h4>{data.description}</h4>
          <Link href={`/races/join?rid=${data.id}`}>
            <a className="btn btn-link">Bli med!</a>
          </Link>
          <div className="container">
            <h5>Deltagere</h5>
            <ul className="list-group">
              {data.participant_set?.map((participant) => {
                return (
                  <li key={participant.id} className="list-group-item">
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
