import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons-pro';
import CIcon from '@coreui/icons-react';
import { CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavItem, CNavLink } from '@coreui/react-pro';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import AppBreadcrumb from './AppBreadcrumb';
import { toggleAside, toggleSidebar } from './reducer';

const TheHeader = () => {
  const dispatch = useDispatch();
  const { sidebarShow, asideShow } = useSelector((state: RootState) => state.container);

  const toggleSidebarDesktop = () => {
    dispatch(toggleSidebar(!sidebarShow));
  };

  const toggleASideDesktop = () => {
    dispatch(toggleAside(!asideShow));
  };

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* <CHeaderBrand className="mx-auto d-md-none" >
      </CHeaderBrand> */}
        <CHeaderNav className="d-flex me-auto">
          <CHeaderToggler className="ps-1" onClick={toggleSidebarDesktop}>
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CNavItem className="nav-breadcrumb">
            <AppBreadcrumb />
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#">Home</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink onClick={toggleASideDesktop}>
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  );
};

export default TheHeader;
