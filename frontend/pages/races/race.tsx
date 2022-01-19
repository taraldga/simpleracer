import { useRouter } from "next/router"

export default function RaceDetails() {
  const router = useRouter()
  const { rid } = router.query


  return (
    <div className="container">
      <h1>Race number {rid}</h1>
    </div>
  )
}