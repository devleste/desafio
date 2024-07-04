export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/contacts',
      permanent: false,
    },
  };
};

export default function Home() {
  return null; // Esta página nunca será renderizada
};