import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { Race } from "../../models/Race";

export default function CreateRace() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const mutation = useMutation(
    (newRace: Partial<Race>) => {
      return fetch("http://localhost:8000/races/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRace),
      }).then(res => res.json());
    },
    {
      onSuccess: (data: any) => {
        router.replace(`/races/race?rid=${data?.id}`);
      },
    }
  );

  const onSubmit = (data: Partial<Race>) => {
    mutation.mutate(data);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Lag et nytt løp</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="racename" className="label">
          Løpnavn
        </label>
        <input id="racename" className="form-control" {...register("name")} />

        <label htmlFor="racedescription" className="label">
          Beskrivelse
        </label>
        <input
          id="racedescription"
          className="form-control"
          {...register("description")}
        />

        <label htmlFor="racedatetime" className="label">
          Dato og tid
        </label>
        <input
          id="racedatetime"
          type="datetime-local"
          className="form-control"
          {...register("start_time")}
        />
        <button className="btn btn-primary">Lag løp</button>
      </form>
    </div>
  );
}
