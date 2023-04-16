import React from 'react';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import IconButton from '@components/iconButton';
import FormErrorMeesage from '@utils/formErrorMessage';

const initValue = {
  userInfo: '',
  userPwd: '',
};

function LoginInput() {
  const formik = useFormik({
    initialValues: initValue,
    validationSchema: Yup.object().shape({
      userInfo: Yup.string()
        .required('請填寫此欄位'),
      userPwd: Yup.string()
        .required('請填寫此欄位'),
    }),
    onSubmit: () => console.log('123'),
  });

  /**
   * user: 不限制格式
   * pwd: 只能是數字跟英文
   */

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="login-input">
        <h1>
          登入
        </h1>
        <Input
          placeholder="電話號碼/使用者名稱/Email"
          style={{ marginTop: '10px', marginBottom: '10px' }}
          id="userInfo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          status={
            formik?.errors?.userInfo ? 'error' : ''
          }
        />
        <FormErrorMeesage
          formik={formik}
          id="userInfo"
        />
        <div>
          <Input.Password
            placeholder="密碼"
            style={{ marginTop: '10px', marginBottom: '10px' }}
          // eslint-disable-next-line react/no-unstable-nested-components
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            id="userPwd"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            status={
              formik?.errors?.userPwd ? 'error' : ''
            }
          />
          <FormErrorMeesage
            formik={formik}
            id="userPwd"
          />
        </div>

        <Button
          style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
          type="primary"
          danger
          htmlType="submit"
        >
          登入
        </Button>
        <div className="login-link-group">
          <a href="123" className="normal-a-text">
            <p>忘記密碼</p>
          </a>
          <a href="123" className="normal-a-text">
            使用簡訊登入
          </a>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '15px' }}>
          <IconButton
            iconLink="https://pixlok.com/wp-content/uploads/2021/12/Facebook-Icon-9imsd.png"
            iconName="facebook"
          />
          <IconButton
            iconLink="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
            iconName="Google"
          />
        </div>
        <div className="grey-a-text login-new-user">
          蝦皮新朋友？
          <a href="123" style={{ color: '#ee4d2d' }}>
            註冊
          </a>
        </div>
        {/* 功能未開放 */}
      </div>
    </form>
  );
}

export default LoginInput;
