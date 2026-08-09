import { useTranslation } from 'react-i18next';
import Section from '../../components/section/Section';

const OrdersPage = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('title.orders')}>
      This is the orders page
    </Section>
  )
};

export default OrdersPage;
