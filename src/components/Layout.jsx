import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container, PageUl, PageLi, NavBarLink } from './Layout.styled';
import Loader from './Loader/Loader';
export default function Layout() {
  return (
    <>
      <Header>
        <PageUl>
          <PageLi>
            <NavBarLink to={'/'}>Home</NavBarLink>
          </PageLi>
          <PageLi>
            <NavBarLink to={'/movies'}>Movies</NavBarLink>
          </PageLi>
        </PageUl>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<Loader></Loader>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}
