import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { showSignModal, signData } from '../../store/Admin';

function AdminMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.getElementById('dropdownMenu');
      if (menuElement && !menuElement.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const modal_open = useSelector((state) => state.admin.isOpenModal);
  const dispatch = useDispatch();

  const closeModal = (e) => {
    dispatch(showSignModal());
  }

  const onEmail = (e) => {
      setEmail(e.target.value);
  }

  const onPassword = (e) => {
      setPassword(e.target.value);
  }

  const onSignIn = (e) => {
      let data = { email: email, password: password };
      dispatch(signData(data));
  }

  const onSignOut = (e) => {

  }

  const onAdmin = (e) => {
    dispatch(showSignModal());
  }

  return (
    <>
    <div className="relative text-{2F2F2F} px-3 py-2 rounded-md text-lg font-weight-500">
      <div onClick={onToggleMenu} className="cursor-pointer flex flex-row items-center">
        <p>Admin</p>
        <img className="w-3 h-3 pl-1" src="assets/Logo/menu.png" alt="Menu" />
      </div>
      {menuOpen && (
        <ul id="dropdownMenu" className="absolute z-10 mt-2 py-2 w-40 lg:bg-transparent bg-white rounded-md">
          <li><button onClick={onAdmin} className="block py-2 lg:pl-0 pl-3">Sign In</button></li>
          <li><button onClick={onSignOut} className="block py-2 lg:pl-0 pl-3">Sign Out</button></li>
        </ul>
      )}
    </div>
    {
      modal_open ?
      <ReactModal
          isOpen={modal_open}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          preventScroll={true}
          overlayClassName={"ReactModal__Overlay"}
          bodyOpenClassName={"ReactModal__Body--open"}
          htmlOpenClassName={"ReactModal__Html--open"}
          shouldFocusAfterRender={true}
          shouldReturnFocusAfterClose={true}
          ariaHideApp={false}
          parentSelector={() => document.body }
          style={{
              overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgb(0, 0, 0)',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)'
              },
              content: {
                  position: 'absolute',
                  zIndex: 1,
                  top: '30%',
                  left: '30%',
                  right: '30%',
                  bottom: '25%',
                  border: '1px solid black',
                  background: '#fff',
                  WebkitOverflowScrolling: 'touch',
                  outline: 'none',
                  padding: '20px'
              }
          }}
      >
          <div className="bg-white">
              <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                  <img src="assets/close.svg" alt="close"/>
              </div>
              <div className="px-10 py-6 flex flex-col items-center">
                  <p className="font-bold text-black lg:text-3xl text-xl text-center">
                      Enter Your Information
                  </p>
                  <div className="flex flex-col w-full items-center mt-6">
                      <div className="lg:w-96 flex flex-col">
                          <p>Your Email<b className="pl-1 text-[#FF0000]">*</b></p>
                          <input
                              type="email"
                              value={email}
                              placeholder="your email@gmail.com"
                              className="w-full mt-3 bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                              onChange={onEmail}
                          />
                      </div>
                      <div className="lg:w-96 flex flex-col mt-2">
                          <p>Password<b className="pl-1 text-[#FF0000]">*</b></p>
                          <input
                              type="password"
                              value={password}
                              className="w-full mt-3 bg-[#D9D9D9] text-base p-2 border-none rounded-md"
                              onChange={onPassword}
                          />
                      </div>
                  </div>
                  <input
                      type="button"
                      value="Sign In"
                      className="lg:mt-8 mt-2 lg:w-60 lg:h-12 bg-[#F38117] cursor-pointer lg:text-xl text-white text-base p-3 border-none text-center rounded-md"
                      onClick={onSignIn}
                  />
              </div>
          </div>
      </ReactModal> : null
      }
    </>
  );
}

export default AdminMenu;
