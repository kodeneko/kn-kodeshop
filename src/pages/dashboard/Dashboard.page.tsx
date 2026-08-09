import Section from '../../components/section/Section';
import { useTranslation } from 'react-i18next';

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('title.dashboard')}>
      This is the dashboard page
    </Section>
  )
};

export default DashboardPage;
