import type { Route } from "./+types/home";

export const loader = async ({ context }: Route.LoaderArgs) => {};

export default function Home() {
  return <div>Hello World</div>;
}
