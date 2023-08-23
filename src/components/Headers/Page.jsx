import Heading from "./Heading";
import Section from "./Section";


const Page = () => {
  return (
    <Section>
      <Heading>Title</Heading>
      <Heading>Title</Heading>
      <Heading>Title</Heading>

      <Section>
        <Heading>Sub-title</Heading>
        <Heading>Sub-title</Heading>
        <Heading>Sub-title</Heading>

        <Section>
          <Heading>Sub-title</Heading>
          <Heading>Sub-title</Heading>
          <Heading>Sub-title</Heading>
        </Section>


      </Section>

    </Section>
  )
}

export default Page;