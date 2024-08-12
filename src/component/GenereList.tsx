import UseGener from "../hooks/useGenere"

const GenereList = () => {
    const {geners,error,isloading}=UseGener()
  return (
    <ul>{geners.map((gener)=><li key={gener.id}>{gener.name}</li>)}</ul>
  )
}

export default GenereList