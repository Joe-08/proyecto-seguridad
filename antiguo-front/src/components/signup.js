import {
  Flex, Heading, FormControl, FormLabel,
  Input, Button, Text
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";

export default function SignUp() {
  return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="#dadada" p={12} rounded={6}>
            <form>
                <Heading mb={6}>Registrarse</Heading>

                <FormControl mb={12}>
                    <FormLabel>Nombre</FormLabel>
                    <Input type="text" className="form-control" placeholder="Nombre" />
                </FormControl>

                <FormControl mb={12}>
                    <FormLabel>Apellido</FormLabel>
                    <Input type="text" className="form-control" placeholder="Apellido" />
                </FormControl>

                <FormControl mb={12}>
                    <FormLabel>Correo electrónico</FormLabel>
                    <Input type="email" className="form-control" placeholder="Ingrese correo" />
                </FormControl>

                <FormControl mb={12}>
                    <FormLabel>Contraseña</FormLabel>
                    <Input type="password" className="form-control" placeholder="Ingrese contraseña" />
                </FormControl>

                <Button type="submit" mt={12}>Registrarse</Button>
                <Text className="forgot-password text-right">
                    Ya registrado, ¿ <a href="#">iniciar sesión?</a>
                </Text>
            </form>             
          </Flex>
      </Flex>
  );
}