import React from 'react';
import { Input, Button } from 'antd';

import IconButton from '@components/iconButton';

function LoginInput() {
  return (
    <div className="login-input">
      <h1>
        登入
      </h1>
      <Input placeholder="電話號碼/使用者名稱/Email" style={{ marginTop: '10px', marginBottom: '10px' }} />
      <Input placeholder="密碼" style={{ marginTop: '10px', marginBottom: '10px' }} />
      <Button
        style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
        type="primary"
        danger
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

  );
}

export default LoginInput;
