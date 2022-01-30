import Layout from './Layout';

type Props = {};

export default function Page({}: Props) {
  return (
    <Layout className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Page</h1>
    </Layout>
  );
}
