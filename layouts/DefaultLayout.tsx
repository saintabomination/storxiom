import PageNavigation from '../components/blocks/PageNavigation';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }): JSX.Element =>
  (
    <>
      <PageNavigation />
      {children}
    </>
  );

export default DefaultLayout;
