import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <Card>
      <HStack>
        <Skeleton height="40px" />
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
//
