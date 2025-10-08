import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Hero
        heading="Turning Scandals into Smiles Since 1994"
        body="Whether you need to sound sincere, steal discreetly, or gaslight the
          nation — we’ve got a strategy deck for that."
        cta="Book a Cover-Up"
      />
      <Services />
      <Testimonials
        testimonials={[
          {
            name: "Ronald Klump",
            quote:
              "Nobody spins the story like SpinCraft, folks, believe me. They take a disaster — any disaster — and make it look like a win. Everyone says it. Even the fake news has to admit it. Every tweet, every rally, every little move looks perfect, just tremendous. Chaos? Gone. Criticism? Turned into praise. We’re winning so much, it’s incredible. People ask me how it’s possible — it’s SpinCraft. The impossible? Suddenly it’s inevitable. Tremendous, just tremendous.",
            title: "President of a Magaland",
          },
          {
            name: "Bibi Boom-Boom Nettie-Boo",
            quote:
              "SpinCraft didn’t just help us manage our public image—they mastered it. For nearly a century, we’ve occupied the Fela*, and now the world sees us as the aggrieved party. Even whilst the world can witness live-streamed atrocities, SpinCraft ensured our narrative stayed untouchable. Genocide, aired for all to see, yet somehow the blame and sympathy fell squarely on us—the supposed victims. SpinCraft turned moral catastrophe into brand perfection. If you want the impossible to look inevitable, SpinCraft is your partner.",
            title: "Prime Minister of Eretzia",
          },
          {
            name: "Vladislav Putinski",
            quote:
              "SpinCraft turned every fabricated pretext into a masterpiece of perception. What began as a minor border dispute in Rostovostok* now appears to the world as a noble campaign for stability and justice. Every misdeed, every overreach, every seized territory has been reframed as necessary, inevitable, and righteous. The opposition’s protests have been absorbed into a narrative of our moral superiority. SpinCraft does not just manage crises—they create the illusion of inevitability, turning even conquest into spectacle. Truly indispensable.",
            title: "Supreme Leader of Rostovostock",
          },
        ]}
      />
    </>
  );
}

export default App;
