import Layout from './Layout';

type Props = {
  error?: Error;
};

export default function NotFound({ error }: Props) {
  return (
    <Layout className="h-screen flex flex-col justify-center items-center">
      <h1>{error?.name}</h1>
      <p>{error?.message}</p>
    </Layout>
  );
}
