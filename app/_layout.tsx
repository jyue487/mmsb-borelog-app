import { Block } from "@/models/Block";
import { Project } from "@/models/Project";
import { RealmProvider } from "@realm/react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <RealmProvider schema={[Block, Project]} inMemory={true}>
      <Stack>
        <Stack.Screen name="index" options={{title: "MMSB Electronic Borelog App"}}/>
      </Stack>
    </RealmProvider>
  );
}
