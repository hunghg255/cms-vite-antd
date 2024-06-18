import React from 'react';

import { useRequest } from 'ahooks';
import { Checkbox, Col, Form, Row } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Button from '@/components/UI/Button/Button';
import InputPassword from '@/components/UI/InputPassword';
import InputText from '@/components/UI/InputText';
import Text from '@/components/UI/Text';
import { toast } from '@/components/UI/Toast/toast';
import { serviceLogin } from '@/pages/SignIn/service';
import { ROUTE_PATH } from '@/routes/route.constant';
import { useAuth } from '@/store/auth/useAuth';
import { formatErrors } from '@/utils/error';

import styles from './index.module.scss';

const SignIn = () => {
  const { onLogin } = useAuth();

  const requestLogin = useRequest(serviceLogin, {
    manual: true,
    onSuccess: (r) => {
      onLogin({
        token: r?.token,
        refreshToken: r?.refresh_token,
        expiredTime: r?.expired_time,
      });
    },
    onError: (e: any) => {
      const msg = formatErrors(e);
      if (typeof msg === 'string') {
        toast.error(msg);
      }
    },
  });

  const onFinish = (values: any) => {
    requestLogin.run({
      username: values.email,
      password: values.password,
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <div className={styles.loginWrap}>
        <img src='/svg/logo.svg' alt='logo' className='max-w-[238px] mx-auto block' />
        <Text type='heading3-bold' className='my-[40px]' element='h1' color='text-primary'>
          Đăng nhập
        </Text>
        <Form
          onFinish={onFinish}
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

          <Form.Item
            className='mb-[16px]'
            name='password'
            label='Mật khẩu'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              // {
              //   min: 6,
              //   message: 'Mật khẩu phải có ít nhất 6 ký tự',
              // },
            ]}
          >
            <InputPassword placeholder='Mật khẩu' />
          </Form.Item>

          <Row wrap={false} justify={'space-between'} align={'middle'}>
            <Col>
              <Form.Item name={'save'} valuePropName='checked' noStyle>
                <Checkbox className='flex items-center'>
                  <Text>Ghi nhớ tôi</Text>
                </Checkbox>
              </Form.Item>
            </Col>

            <Col>
              <Link
                className='text-[#405F2D] hover:text-[#405F2D] underline hover:underline font-semibold text-[16px]'
                to={ROUTE_PATH.FORGOT_PASSWORD}
              >
                Quên mật khẩu?
              </Link>
            </Col>
          </Row>

          <Button
            type='xhotel-primary'
            htmlType='submit'
            className='w-full mt-[40px]'
            loading={requestLogin.loading}
            disabled={requestLogin.loading}
          >
            Đăng nhập
          </Button>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
