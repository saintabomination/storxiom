import PageNavigation from '../components/blocks/PageNavigation';
import PageFooter from '../components/blocks/PageFooter.component';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }): JSX.Element =>
  (
    <>
      <PageNavigation />
      {children}
      <PageFooter />
    </>
  );

export default DefaultLayout;
