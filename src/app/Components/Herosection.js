import { Box, Heading,Text,Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Herosection({title}) {
  return (
    <div>
      <Box display={"flex"} justifyContent={'space-between'} pt={"50px"}>
        <Box flexWrap={"wrap"} pt={"100px"} pl={"20px"}>
          <Heading as={"h5"} size="xl">
            {title} <br /> 
          </Heading>
          <Text w={"700px"} mt={"30px"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
          <Link href={'/Movie'}><Button mt={"20px"}>Explore Movies</Button></Link>
        </Box>
        <Box>
            <Image src="/hero.jpeg" h={"400px"} w={"1900px"}/>
        </Box>

      </Box>
    </div>
  );
}

export default Herosection;
