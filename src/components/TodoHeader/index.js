import { Box, Heading } from '@chakra-ui/layout';

export default function TodoHeader(props) {
  
  return (
    <Box>
      <Heading as="h1">{props.children}</Heading>
      <Heading as="h3" fontSize={20}>
        {props.desc}
      </Heading>
    </Box>
  );
}
