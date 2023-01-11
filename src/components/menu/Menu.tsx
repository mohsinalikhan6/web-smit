import React, { useState } from 'react';
import { InfoOutlined, FormOutlined, HomeOutlined, BarsOutlined, PictureOutlined, ContactsOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: (
            <a href="./" rel="noopener noreferrer">
                Home
            </a>
        ),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (
            <a href="./gallery" rel="noopener noreferrer">
                Gallery
            </a>
        ),
        key: 'gallery',
        icon: <PictureOutlined />,
    },

    {
        label: (
            <a href="./courses" rel="noopener noreferrer">
                Courses
            </a>
        ),
        key: 'courses',
        icon: <BarsOutlined />,
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'Web & Mobile',
                        key: 'webMobile',
                    },
                    {
                        label: 'Graphics Designing',
                        key: 'graphicsDesigning',
                    },
                    {
                        label: 'Artifical Intelligence',
                        key: 'artificalIntelligence',
                    },
                    {
                        label: 'Cisco',
                        key: 'cisco',
                    },
                    {
                        label: 'CCNA',
                        key: 'ccna',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="./about" rel="noopener noreferrer">
                About Us
            </a>
        ),
        key: 'about',
        icon: <InfoOutlined />,
    },
    {
        label: (
            <a href="./contact" rel="noopener noreferrer">
                Contact Us
            </a>
        ),
        key: 'contact',
        icon: <ContactsOutlined />,
    },
    {
        label: (
            <a href="./form" rel="noopener noreferrer">
                Admission Form
            </a>
        ),
        key: 'form',
        icon: <FormOutlined />,
    },
];

const Menubar: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Menubar;