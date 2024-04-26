import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
  Container,
  Center
} from "@mantine/core";
import api from "../api";
import { notifications } from "@mantine/notifications";
import { IconExclamationMark } from "@tabler/icons-react";
import { isUndefined } from "lodash";

export default function Login(props) {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      nome: "",
      cognome: ""
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email non valida"),
      password: (value) => (value.length < 6 ? "Password non valida" : null)
    }
  });

  const onFinish = (e) => {
    e.preventDefault();
    api
      .post("/v1/auth/login", form.values)
      .then(
        (res) => (
          sessionStorage.setItem("token", res.data.token),
          sessionStorage.setItem("userId", res.data.utente.id),
          sessionStorage.setItem("role", res.data.utente.ruolo),
          (window.location.href = "/")
        )
      )
      .catch((res) =>
        notifications.show({
          color: "red",
          icon: <IconExclamationMark size="70%" />,
          title: "Login error!",
          message: `${
            !isUndefined(res.response)
              ? res.response.data
              : "General login error!"
          }`,
          autoClose: true,
          radius: 0,
          withBorder: true,
          withCloseButton: false
        })
      );
  };

  return (
    <>
      <Container size={800} pos="fixed" top={0} bottom={0} left={0} right={0}>
        <Center h="100vh" maw={800}>
          <Paper p="xl" {...props} w={400} withBorder>
            <Group justify="center" mt="xl">
              <Text size="28px" fw={500} c="#21A2F1">
                Drop
              </Text>
              <Text size="28px" fw={500} c="#1AC056" ml={-16}>
                Green
              </Text>
            </Group>

            <form onSubmit={onFinish}>
              <Stack mt={30}>
                <TextInput
                  withAsterisk
                  label="Email"
                  placeholder="utente@email.it"
                  {...form.getInputProps("email")}
                />

                <PasswordInput
                  withAsterisk
                  label="Password"
                  placeholder="Password"
                  {...form.getInputProps("password")}
                />
              </Stack>

              <Group justify="space-between" mt="xl">
                <Anchor component="button" type="button" c="dimmed" size="xs">
                  Recupera password!
                </Anchor>
                <Button type="submit" w={100}>
                  Accedi
                </Button>
              </Group>
            </form>
          </Paper>
        </Center>
      </Container>
    </>
  );
}
