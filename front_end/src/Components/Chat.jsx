import { HistoryOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { BiUserVoice } from 'react-icons/bi'
import { GiBrain } from 'react-icons/gi'
import { AiFillAudio } from 'react-icons/ai'
import { GrSend } from 'react-icons/gr'
import { motion } from 'framer-motion';




import styles from  '../Styles/Chat.module.css'

const { Header, Content, Footer, Sider } = Layout;
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
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
        <Menu  theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={(e)=>console.log(e.key)} items={items} />
      </Sider>
      <Layout className={styles.content}>
 
        <Content
          style={{
            margin: '0 15px',
          }}
        >


          <motion.div className={styles.IaChat} >
            <motion.div
                      initial={{ opacity: 0, x:-100 }}
          whileInView={{ opacity: 1, x:0 }} 
          transition={{ duration: 1 }}
            
            >
                <GiBrain size={30}/>
            </motion.div>
            <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }} 
                                transition={{ duration: 0.7 }}      
            
            className={styles.chatContent} >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, adipisci inventore temporibus iure autem necessitatibus corrupti. Necessitatibus commodi vero, velit unde impedit magnam suscipit distinctio amet. Dicta, odit. Nemo, vel!</p>
            </motion.div>
          </motion.div>

          <motion.div className={styles.Pchat} >
            <motion.div 
            initial={{ opacity: 0, x:100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 1 }}


            >
                <GiBrain size={30}/>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x:100 }}
            whileInView={{ opacity: 1, x:0 }} 
            transition={{ duration: 0.7 }}   
            
            className={styles.chatContent} >
                <motion.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, adipisci inventore temporibus iure autem necessitatibus corrupti. Necessitatibus commodi vero, velit unde impedit magnam suscipit distinctio amet. Dicta, odit. Nemo, vel!</motion.p>
            </motion.div>
          </motion.div>


          <motion.div className={styles.searchBar}
          initial={{ opacity: 0, y:50 }}
          whileInView={{ opacity: 1, y:0 }} 
          transition={{ duration: 0.7 }}
          
          >

            <motion.input
                 
            
            className={styles.input} type="text" placeholder='Talk To me' />
               <motion.div className={styles.icons} > <AiFillAudio className={styles.ico} size={25} /></motion.div>
            <motion.div className={styles.icons} ><GrSend size={25} className={styles.ico}  /></motion.div>
          </motion.div>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >

          Speechify ©2023 Created by nourddine benyahya
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Chat;