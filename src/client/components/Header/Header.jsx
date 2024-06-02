import { headerMenuItems } from '@/client/utils/utils'
import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="vdesh_logoBlock"></div>

            <div className="menuItemsBlock">
                <ul>
                    {headerMenuItems?.map((item) => (
                        <li>{item?.content}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header
