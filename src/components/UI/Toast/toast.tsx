import { Row } from 'antd';
import classNames from 'classnames';
import { ExternalToast, toast as t } from 'sonner';

import { Icon } from '@/components/UI/IconFont/Icon';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

export const toast = {
  success: (message: string, options?: ExternalToast) => {
    t.custom(
      (id) => (
        <Row
          align={'middle'}
          justify={'space-between'}
          wrap={false}
          className={classNames(styles.msg, styles.msgSuccess)}
        >
          <Row align={'middle'} wrap={false}>
            <div className={styles.iconSuccess}>
              <Icon
                icon='icon-close-square'
                color='success-main'
                style={{
                  fontSize: 22,
                }}
                onClick={() => t.dismiss(id)}
              />
            </div>
            <Text type='caption2' color='text-primary'>
              {message}
            </Text>
          </Row>
          <Icon
            icon='icon-close-line'
            color='neutral-800'
            style={{
              fontSize: 18,
              cursor: 'pointer',
              marginLeft: 8,
            }}
            onClick={() => t.dismiss(id)}
          />
        </Row>
      ),
      options,
    );
  },

  error: (message: string, options?: ExternalToast) => {
    t.custom(
      (id) => (
        <Row
          align={'middle'}
          justify={'space-between'}
          wrap={false}
          className={classNames(styles.msg, styles.msgError)}
        >
          <Row align={'middle'} wrap={false}>
            <div className={styles.iconError}>
              <Icon
                icon='icon-close-square'
                color='error-main'
                style={{
                  fontSize: 22,
                }}
                onClick={() => t.dismiss(id)}
              />
            </div>
            <Text type='caption2' color='text-primary'>
              {message}
            </Text>
          </Row>
          <Icon
            icon='icon-close-line'
            color='neutral-800'
            style={{
              fontSize: 18,
              cursor: 'pointer',
              marginLeft: 8,
            }}
            onClick={() => t.dismiss(id)}
          />
        </Row>
      ),
      options,
    );
  },
};
