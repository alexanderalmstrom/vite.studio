import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContentfulPage } from '../types';
import { fetchPage } from '../actions';
import Layout from './Layout';
import Loading from './Loading';
import NotFound from './NotFound';

type Props = {
  page?: ContentfulPage;
  fetchPage?: Function;
  loading: Boolean;
  error: Boolean;
};

type State = {
  page?: ContentfulPage;
  loading: Boolean;
  error: Boolean;
};

function Page({ fetchPage, page, loading, error }: Props) {
  const { slug } = useParams();

  useEffect(() => {
    fetchPage && fetchPage(slug);
  }, [slug]);

  if (loading) return <Loading />;

  if (error) return <NotFound />;

  if (!page?.fields) return null;

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
