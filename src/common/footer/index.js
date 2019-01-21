import React from 'react';
import { Link } from 'react-router-dom';

import { FooterWrapper } from './style';

export default function Footer(props) {
  return (
    <FooterWrapper>
      <ul className='link-list'>
        <li className='link-item'>
          <Link to='/'>关于简书</Link>
        </li>
        <li className='link-item'>
          <Link to='/'>联系我们</Link>
        </li>
        <li className='link-item'>
          <Link to='/'>加入我们</Link>
        </li>
        <li className='link-item'>
          <Link to='/'>简书出版</Link>
        </li>
        <li className='link-item'>
          <Link to='/'>品牌与徽标</Link>
        </li>
        <li className='link-item'>
          <Link to='/'>帮助中心</Link>
        </li>
        <li className='link-item'>
          <Link to='/'>合作伙伴</Link>
        </li>
      </ul>
      <p className='info'>
        ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /{' '}
        <a
          className='icon-link'
          href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='icon'
            src='https://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png'
            alt='Smrz'
          />{' '}
        </a>
        沪公网安备31010402002252号{' / '}
        <a
          className='icon-link'
          href='http://www.shjbzx.cn/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='icon'
            src='https://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png'
            alt='Wxb'
          />
        </a>
        举报电话：021-34770013{' / '}
        <a
          className='icon-link'
          href='http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&serial=9031000020171107081457000002158769-SAIC_SHOW_310000-20171115131223587837&signData=MEQCIADWZ5aTcBeER5SOVp0ly+ElvKnwtjczum6Gi6wZ7/wWAiB9MAPM22hp947ZaBobux5PDkd0lfqoCOkVV7zjCYME6g=='
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='icon'
            src='https://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png'
            alt='Wxb'
          />
        </a>
      </p>
    </FooterWrapper>
  );
}
