import * as S from './styles';
import Icon from '../../assets/Icon.svg';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import MenuLinks from './MenuLinks';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<S.StyledHeader>
			<S.Navigation>
				<S.MainLink href='#'>
					<S.IconContainer>
						<S.Dot1></S.Dot1>
						<S.Dot2></S.Dot2>
						<S.Dot3></S.Dot3>
						<S.Dot4></S.Dot4>
						<S.Dot5></S.Dot5>
						<img
							src={Icon}
							alt='Icone principal'
						/>
					</S.IconContainer>
					<S.Title>
						Casa<S.Bold>verde</S.Bold>
					</S.Title>
				</S.MainLink>
				<MenuLinks menuOpen={menuOpen} />
				<S.MenuHamburguer onClick={toggleMenu}>
					{!menuOpen ? (
						<Menu
							size={36}
							strokeWidth={2.25}
						/>
					) : (
						<X
							size={36}
							strokeWidth={2.25}
						/>
					)}
				</S.MenuHamburguer>
			</S.Navigation>
		</S.StyledHeader>
	);
};

export default Header;
