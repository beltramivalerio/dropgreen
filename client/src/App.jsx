import { Button, Flex, Group, Switch, Text } from "@mantine/core";
import "./App.css";

function App() {
  return (
    <>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="flex-start"
        direction="column"
      >
        <Group justify="flex-start">
          <Switch size="lg" onLabel="ON" offLabel="OFF" color="lime" />
          <Text fw={600} tt="uppercase">
            Led rosso
          </Text>
        </Group>
        <Group justify="flex-start">
          <Switch size="lg" onLabel="ON" offLabel="OFF" color="lime" />
          <Text fw={600} tt="uppercase">
            Led verde
          </Text>
        </Group>
        <Group justify="flex-start">
          <Switch size="lg" onLabel="ON" offLabel="OFF" color="lime" />
          <Text fw={600} tt="uppercase">
            Led giallo
          </Text>
        </Group>
        <Group justify="flex-start">
          <Switch size="lg" onLabel="ON" offLabel="OFF" color="lime" />
          <Text fw={600} tt="uppercase">
            Led blu
          </Text>
        </Group>
        <Group>
          <Button fullWidth>SUONO</Button>
        </Group>
      </Flex>
    </>
  );
}

export default App;
