import CardGraphic from '../../components/card/CardGraph';
import CardQty from '../../components/card/CardQty';
import Section from '../../components/section/Section';
import { useTranslation } from 'react-i18next';
import styles from './Dashboard.module.css';

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <Section title={t('title.dashboard')}>
      <div className={styles.cont}>
        <div className={styles.row}>
          <CardQty
            pic={'coins'}
            title={'Incomes'}
            onClickMenu={() => {}}
            opts={[]}
            label={'$ 1.000€'}
            tag={'positive'}
            tagLabel={'+ 24%'}
            msgFooter={'From las week'}
          ></CardQty>
          <CardQty
            pic={'shoopingbag'}
            title={'Incomes'}
            onClickMenu={() => {}}
            opts={[]}
            label={'863 unds'}
            tag={'negative'}
            tagLabel={'- 10%'}
            msgFooter={'From las week'}
          ></CardQty>
          <CardQty
            pic={'userGroup'}
            title={'Visitors'}
            onClickMenu={() => {}}
            opts={[]}
            label={'+1k users'}
            tag={'negative'}
            tagLabel={'- 10%'}
            msgFooter={'From las week'}
          ></CardQty>
        </div>
        <div className={styles.row}>
          <CardGraphic
            pic={'userGroup'}
            title={'Visitors'}
            opts={[]}
            onClickMenu={() => {}}
          ></CardGraphic>
        </div>
      </div>
    </Section>
  )
};

export default DashboardPage;
