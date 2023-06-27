import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Header.module.scss';
import useWindowDimensions from 'hooks/useWindowDimensions';

import Wrapper from 'components/Wrapper/Wrapper';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import MenuDesktop from './components/MenuDesktop/MenuDesktop';
import MenuMobile from './components/MenuMobile/MenuMobile';
import MenuToggler from './components/MenuToggler/MenuToggler';

const Header = () => {
	const collapseMenu = 810;
	const location = useLocation();
	const { width } = useWindowDimensions();
	const [isMenuToggled, setIsMenuToggled] = useState(false);

	useEffect(() => {
		setIsMenuToggled(false);
	}, [width, location])

	return (
		<header className={styles.container}>
			<Wrapper className={styles.wrapper}>
				<Link to='/' className={styles.logo}><Logo /></Link>
				{(width > collapseMenu) ? (
					<MenuDesktop />
				) : (
					<>
						<MenuToggler isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled} />
						<MenuMobile isMenuToggled={isMenuToggled} />
					</>
				)}
			</Wrapper>
		</header>
	)
}



export default Header