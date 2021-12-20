import {
  Flex, Heading, FormControl, FormLabel,
  Input, Button, Text
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="#dadada" p={12} rounded={6}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Heading mb={6}>Iniciar Sesión</Heading>

          <FormControl mb={12}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input type="email" placeholder="Ingrese correo" />
          </FormControl>

          <FormControl mb={12}>
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" placeholder="Ingrese contraseña" />
          </FormControl>

          <FormControl mb={12}>
            <Input type="checkbox" id="customCheck1" />
            <FormLabel htmlFor="customCheck1">Recuérdame</FormLabel>
          </FormControl>

          <Button type="submit" colorScheme="blue" mt={12} isLoading={isSubmitting}>Iniciar Sesión</Button>
          <Text className="forgot-password text-right">
            ¿Olvidó su <a href="#">contraseña?</a>
          </Text>
        </form>
      </Flex>
    </Flex>
  );
}