import sk from '../secretkey.jpg';
import {
  Flex, Box, Heading, FormControl, FormLabel,
  Input, Button, List, ListItem, ListIcon, useColorMode,
  Alert, AlertIcon, AlertTitle, AlertDescription,
  Text
} from '@chakra-ui/react';
import { useForm, useFieldArray, Controller } from "react-hook-form";

export default function SecretKey() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" alignItems="center" background="#dadada" p={20} rounded={6}>
        <Heading>Guarda tu Llave Secreta</Heading>
        <img width="80%" height={350} src={sk} alt="secretkey" />
        <Text>Una vez cierre su cuenta, necesitará de esta llave secreta para volver a iniciar sesión.</Text>
        <Text>Escriba o tome foto de la llave secreta y guardela en un lugar seguro.</Text>
        <Text><b>A3-ASWWYB-798JRYLJVD4-23DC2-86TVM-H43EB</b></Text>
      </Flex>
    </Flex>
  );
}