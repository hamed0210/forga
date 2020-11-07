import React from 'react'

import Styles from './Header.module.css'
import { NotificationSVG, BtnAvatarSVG, LogoSVG, ForgaSVG } from '../SVGIcons'

const header = () => {
	return (
		<div className={Styles.header}>
			<div className={Styles.primary}>
				<div className={Styles.menu_toggle}>
					<span className={Styles.line_top}></span>
					<span className={Styles.line_middle}></span>
					<span className={Styles.line_down}></span>
				</div>
				<span className={Styles.separator}></span>
				<div className={Styles.logo}>
					<div className={Styles.logo_img}>
						<LogoSVG />
					</div>
					<div className={Styles.logo_name}>
						<ForgaSVG />
					</div>
				</div>
			</div>
			<div className={Styles.secundary}>
				<div className={Styles.notifications}>
					<NotificationSVG />
				</div>
				<span className={Styles.separator}></span>
				<div className={Styles.avatar_container}>
					<div className={Styles.name}>Alvaro</div>
					<div className={Styles.avatar}></div>
					<div className={Styles.btn_avatar}>
						<BtnAvatarSVG />
					</div>
				</div>
			</div>
		</div>
	)
}

export default header
