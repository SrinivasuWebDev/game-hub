import UseGener from "../hooks/useGenere"

const GenereList = () => {
    const {data}=UseGener()
  return (
    <ul>{data.map((gener)=><li key={gener.id}>{gener.name}</li>)}</ul>
  )
}

export default GenereList