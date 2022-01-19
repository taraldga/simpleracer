import Link from "next/link";
import { useQuery } from "react-query";
import Spinner from "../../components/Spinner";
import { Race } from "../../models/Race";

export default function RaceView() {
  const { isLoading, error, data } = useQuery<Race[]>("allRaces", () =>
    fetch("http://localhost:8000/races").then((res) => res.json())
  );

  return (
    <div className="container">
      <h1>Oversikt over alle løp</h1>
      {isLoading && <Spinner size="5em" />}
      <ul className="list-group">
        {data?.map((race) => {
          return (
            <div
              key={race.id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <div className="fw-bold">{race.name}</div>
                <div>{race.description}</div>
              </div>
              <Link href={`/races/race?rid=${race.id}`}>
                <a className="btn btn-link">Mer informasjon</a>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
