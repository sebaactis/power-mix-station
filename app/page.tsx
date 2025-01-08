import Presentation from "@/components/Presentation/Presentation";
import StepContainer from "@/components/Step/StepContainer";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <section>
      <Welcome />
      <Presentation />
      <StepContainer />
    </section>
  );
}
