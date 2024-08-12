import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


export const SkeletonCard = () => {
  return (
    <Card width="250px" borderRadius={10} overflow={"hidden"}>
        <Skeleton height='200px'></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}
