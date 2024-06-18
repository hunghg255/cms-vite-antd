import React from 'react';

import { Form } from 'antd';
import { Helmet } from 'react-helmet';

import Button from '@/components/UI/Button/Button';
import InputText from '@/components/UI/InputText';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>

      <div className={styles.forgotPaasswordWrap}>
        <Text type='heading3-bold' className='my-[40px]' element='h1' color='text-primary'>
          Quên mật khẩu
        </Text>
        <Form
          layout='vertical'
          initialValues={{
            email: '84947754271',
            password: '123',
          }}
        >
          <Form.Item
            className='mb-[16px]'
            name='email'
            label='Email'
            // rules={[
            //   {
            //     required: true,
            //     message: 'Vui lòng nhập email',
            //   },
            //   {
            //     type: 'email',
            //     message: 'Email không hợp lệ',
            //   },
            // ]}
          >
            <InputText placeholder='Nhập email' />
          </Form.Item>

          <Button type='xhotel-primary' htmlType='submit' className='w-full mt-[40px]'>
            Tiếp tục
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
