import { Box, ListItem, UnorderedList, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} bg={"blackAlpha.300"} alignItems={"center"} boxShadow={"2xl"}>
        <Box>
          <Image src="/logonew.jpeg" h={"50px"} w={"50px"}></Image>
        </Box>
        <Box>
          <UnorderedList display={"flex"} listStyleType={"none"}>
            <Link href={'/'}><ListItem pr={"20px"}>Home</ListItem></Link>
            <Link href={'/about'}><ListItem pr={"20px"}>about</ListItem></Link>
            <Link href={'/Movie'}><ListItem pr={"20px"}>movie</ListItem></Link>
            <Link href={'/Contact'}><ListItem pr={"20px"}>Contact</ListItem></Link>
          </UnorderedList>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
