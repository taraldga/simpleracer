
export interface SpinnerProps {
  size: string;
}



export default function Spinner({size}: SpinnerProps): React.ReactElement {

  const style = {
    "width": size,
    "height": size
  }

  return (
    <div className="spinner-border" style={style}>
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}