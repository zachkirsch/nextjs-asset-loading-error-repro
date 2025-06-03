import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <button
      onClick={() => {
        push(window.location.href);
      }}
    >
      route.push(window.location.href)
    </button>
  );
}
