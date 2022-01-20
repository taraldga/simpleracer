import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Participant } from "../../models/Race";


export default function JoinRace() {
  const router = useRouter()
  const { rid } = router.query
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(
    (newParticipant: Partial<Participant>) => {
      return fetch("http://localhost:8000/participants/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newParticipant),
      }).then(res => res.json());
    },
    {
      onSuccess: (data: any) => {
        router.replace(`/races/race?rid=${data?.id}`);
      },
    }
  );

  const onSubmit = (data: Partial<Participant>) => {
    data.race = parseInt(rid as string);
    mutation.mutate(data);
  };

  return (
    <div className="container">
    <h1 style={{ textAlign: "center" }}>Meld deg på her!</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="participantname" className="label">
        Ditt navn
      </label>
      <input id="participantname" className="form-control" {...register("name")} />

      <label htmlFor="participantemail" className="label">
        Epost
      </label>
      <input
        id="participantemail"
        className="form-control"
        {...register("email")}
      />
      <button className="btn btn-primary w-100">Meld deg på</button>
    </form>
  </div>
  )

}