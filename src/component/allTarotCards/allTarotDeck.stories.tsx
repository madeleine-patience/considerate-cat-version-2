import QueryProvider from "../../shared/QueryClientProvider";
import AllTarotCards from "./AllTarotCards";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/AllTarotCards",
  component: AllTarotCards,
  decorators: [
    (Story) => (
      <QueryProvider>
        <Story />
      </QueryProvider>
    ),
  ],
} as Meta<typeof AllTarotCards>;

const Template: StoryFn<typeof AllTarotCards> = () => <AllTarotCards />;

export const Default = Template.bind({});
