import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContentfulPage } from '../types';
import { fetchPage } from '../actions';
import Layout from './Layout';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

type Props = {
  page?: ContentfulPage;
  fetchPage?: Function;
};

type State = {
  page?: ContentfulPage;
};

function Page({ fetchPage, page }: Props) {
  const { slug } = useParams();

  useEffect(() => {
    fetchPage && fetchPage(slug);
  }, []);

  if (!page?.fields) return <NotFound />;

  return (
    <Layout className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">{page.fields.title}</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state.page,
  };
}

export default connect(mapStateToProps, { fetchPage })(Page);
