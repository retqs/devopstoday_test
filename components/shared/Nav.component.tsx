import styled from 'styled-components';
import Link from 'next/link';

import * as colors from '../../public/styles';

export function Nav(): JSX.Element {
  return (
    <Navbar>
      <NavbarLogo>
        <Link href="/">
          <a>Blogzera</a>
        </Link>
      </NavbarLogo>
      <CustomLink>
        <Link href="/posts/new">
          <a>Create New Post</a>
        </Link>
      </CustomLink>
    </Navbar>
  );
}

const Navbar = styled.nav`
  height: 80px;
  width: 100%;
  background: ${colors.lPurple};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5vw;
`;

const NavbarLogo = styled.figure`
  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: #212121;
  }
`;

const CustomLink = styled.div`
  a {
    background: #fff;
    border-radius: 10px;
    color: #212121;
    text-decoration: none;

    padding: 10px;
  }
`;
