import React from 'react';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff3;
`;

const Container = styled.div`
  margin-top: 2rem;
  height: 100vh;
  width: 1200px;
  display: flex;
`;

const SpanElement = styled.div`
  display: inline;
  color: #42c6f0;
  font-weight: 800;
`;

const Company = () => {
  return (
    <Section>
      <Container>
        <p>
          <SpanElement>Tekmu Creations</SpanElement>, your friendly neighborhood
          digital marketing powerhouse, proudly operates from the vibrant heart
          of Lusaka, Zambia. We are your trusted partners in the world of
          creativity and online marketing, offering an array of services
          designed to bring your vision to life. Our services encompass the
          entire spectrum of digital excellence, including website design,
          development, branding, logo creation, website maintenance, SEO
          wizardry, and the art of Google Adwords Management. With a flair for
          innovation, we're here to elevate your digital presence to dazzling
          heights.
          <br />
          <br /> At <SpanElement>Tekmu Creations</SpanElement>, our mission as a
          leading Digital Marketing Agency in Zambia is simple: to forge lasting
          bonds with our clients. We're not just here to meet your goals; we're
          here to exceed them, and we don't stop caring once the finish line is
          crossed. Our commitment to your success is unwavering. So, if you're
          ready to embark on an exciting digital journey or simply want to learn
          more about the magic behind our creative prowess, don't hesitate to
          reach out. We're all ears and thrilled to connect with you. Let's
          bring your dreams to life together!
        </p>
      </Container>
    </Section>
  );
};

export default Company;
