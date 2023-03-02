import { HistoryOutlined, WechatOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { BiUserVoice } from 'react-icons/bi'
import styles from  '../Styles/Chat.module.css'
import History from  './History'
import ChatContent from './ChatContent';






const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Chat', '1', <WechatOutlined />),
  getItem('History', '2', <HistoryOutlined />),
  getItem('Speech', 'sub1', <BiUserVoice />, [
    getItem('On', '3'),
    getItem('Off', '4'),

  ]),
];
const Chat = () => {

  const [page,setpage]= useState('1')

  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout
        className={styles.menuContiner}
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider className={styles.menu} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 20,
            margin: 16,
          }}
        />
        <Menu  theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={(e)=>setpage(e.key)} items={items} />
      </Sider>
      <Layout className={styles.content}>
 
        <Content
          style={{
            margin: '0 15px',
          }}
        >
          
          {page=='1'?<ChatContent/>:<History/>}
          
          
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Speechify ©2023 Created with ❤️ by nourddine benyahya
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Chat;