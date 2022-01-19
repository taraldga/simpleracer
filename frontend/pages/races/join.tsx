import { useRouter } from "next/router"


export default function JoinRace() {
  const router = useRouter()
  const { rid } = router.query

  // {isLoading && <Spinner size="5em" />}

  return (
    <div>Halla</div>
  )

}